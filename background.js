let startupPopupPending = false;

function initialiseSettings(showPopupOnStartup = false) {
  chrome.storage.local.get(
    ["enabled", "blockedCount", "showActivationNotification"],
    (data) => {
      const defaults = {};
      if (data.enabled === undefined) defaults.enabled = true;
      if (data.blockedCount === undefined) defaults.blockedCount = 0;
      if (data.showActivationNotification === undefined) {
        defaults.showActivationNotification = true;
      }

      const enabled = data.enabled === undefined ? true : data.enabled;
      if (Object.keys(defaults).length) chrome.storage.local.set(defaults);
      updateRuleset(enabled);
      updateToolbarIndicator(enabled);

      if (showPopupOnStartup && enabled) requestStartupPopup();
    }
  );
}

chrome.runtime.onInstalled.addListener(initialiseSettings);
chrome.runtime.onStartup.addListener(() => initialiseSettings(true));

chrome.windows.onFocusChanged.addListener((windowId) => {
  if (!startupPopupPending || windowId === chrome.windows.WINDOW_ID_NONE) return;
  showActivationPopup(windowId, true);
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes.enabled) {
    updateToolbarIndicator(changes.enabled.newValue !== false);
  }
});

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === "restoreMainPopup") {
    restoreMainPopup();
    return;
  }

  if (message.type !== "setProtection") return;

  const enabled = Boolean(message.enabled);
  updateRuleset(enabled).then(() => {
    chrome.storage.local.set({ enabled }, () => {
      updateToolbarIndicator(enabled);
      if (enabled) showActivationPopup();
      sendResponse({ success: true });
    });
  }).catch((error) => {
    console.error("NoPUB: mise a jour impossible", error);
    sendResponse({ success: false });
  });

  return true;
});

function updateRuleset(enabled) {
  return chrome.declarativeNetRequest.updateEnabledRulesets({
    enableRulesetIds: enabled ? ["ads"] : [],
    disableRulesetIds: enabled ? [] : ["ads"]
  });
}

async function updateToolbarIndicator(enabled) {
  const iconSizes = [16, 32, 48, 128];
  const imageData = {};

  try {
    await Promise.all(iconSizes.map(async (size) => {
      const response = await fetch(chrome.runtime.getURL(`icons/icon${size}.png`));
      const bitmap = await createImageBitmap(await response.blob());
      const canvas = new OffscreenCanvas(size, size);
      const context = canvas.getContext("2d");
      const radius = Math.max(2, Math.round(size * 0.15));
      const offset = Math.max(1, Math.round(size * 0.06));

      context.drawImage(bitmap, 0, 0, size, size);
      context.beginPath();
      context.arc(size - radius - offset, size - radius - offset, radius, 0, Math.PI * 2);
      context.fillStyle = enabled ? "#35d07f" : "#77768a";
      context.fill();
      imageData[size] = context.getImageData(0, 0, size, size);
    }));

    chrome.action.setBadgeText({ text: "" });
    chrome.action.setIcon({ imageData });
  } catch (error) {
    console.error("NoPUB: impossible de mettre a jour la pastille", error);
  }

  chrome.action.setTitle({ title: enabled ? "NoPUB - Protection active" : "NoPUB - Protection inactive" });
}

function requestStartupPopup() {
  startupPopupPending = true;

  chrome.windows.getLastFocused({}, (windowInfo) => {
    if (windowInfo?.id !== undefined && windowInfo.id !== chrome.windows.WINDOW_ID_NONE) {
      showActivationPopup(windowInfo.id, true);
    }
  });
}

function showActivationPopup(windowId, isStartupPopup = false) {
  chrome.storage.local.get(["showActivationNotification"], (data) => {
    if (data.showActivationNotification === false) return;

    chrome.action.setPopup({ popup: "activation/activation.html" }, () => {
      try {
        const result = windowId === undefined
          ? chrome.action.openPopup()
          : chrome.action.openPopup({ windowId });

        const onOpened = () => {
          if (isStartupPopup) startupPopupPending = false;
          setTimeout(restoreMainPopup, 3200);
        };

        if (result && typeof result.catch === "function") {
          result.then(onOpened).catch(() => {
            // Au démarrage, Chrome peut ne pas avoir fini d'activer une fenêtre.
            // L'écouteur onFocusChanged réessaiera alors au prochain focus.
          });
        } else {
          onOpened();
        }
      } catch (error) {
        // Même comportement : aucune erreur visible, nouvel essai au prochain focus.
      }
    });
  });
}

function restoreMainPopup() {
  chrome.action.setPopup({ popup: "popup/popup.html" });
}
