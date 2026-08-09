const toggleButton = document.getElementById("toggle");
const statusText = document.getElementById("status");
const toggleSub = document.getElementById("toggleSub");
const counter = document.getElementById("counter");
const mainPage = document.getElementById("mainPage");
const settingsButton = document.getElementById("settingsButton");
const settingsPage = document.getElementById("settingsPage");
const backButton = document.getElementById("backButton");
const notificationToggle = document.getElementById("notificationToggle");
const version = document.getElementById("version");

let lastBlocked = null;

function updatePopup() {
  chrome.storage.local.get(["enabled", "blockedCount", "showActivationNotification"], (data) => {
    const enabled = data.enabled !== false;
    const blocked = data.blockedCount || 0;

    // Compteur avec petit effet de "pulse" quand la valeur change
    if (lastBlocked !== null && blocked !== lastBlocked) {
      counter.classList.add("bump");
      setTimeout(() => counter.classList.remove("bump"), 250);
    }
    lastBlocked = blocked;
    counter.textContent = blocked;

    if (enabled) {
      document.body.classList.remove("inactive");

      statusText.textContent = "Protection active";
      toggleSub.textContent = "Activée sur ce site";

      toggleButton.classList.add("on");
      toggleButton.setAttribute("aria-pressed", "true");
    } else {
      document.body.classList.add("inactive");

      statusText.textContent = "Protection inactive";
      toggleSub.textContent = "Désactivée sur ce site";

      toggleButton.classList.remove("on");
      toggleButton.setAttribute("aria-pressed", "false");
    }

    const showNotification = data.showActivationNotification !== false;
    notificationToggle.classList.toggle("on", showNotification);
    notificationToggle.setAttribute("aria-pressed", String(showNotification));
  });
}

toggleButton.addEventListener("click", () => {
  if (toggleButton.disabled) return;
  toggleButton.disabled = true;
  chrome.storage.local.get(["enabled"], (data) => {
    const newState = data.enabled === false;
    chrome.storage.local.set({ enabled: newState }, () => {
      toggleButton.disabled = false;
      updatePopup();
      chrome.runtime.sendMessage({ type: "setProtection", enabled: newState });
    });
  });
});

settingsButton.addEventListener("click", () => {
  settingsPage.classList.add("is-open");
  settingsPage.setAttribute("aria-hidden", "false");
});

backButton.addEventListener("click", () => {
  settingsPage.classList.remove("is-open");
  settingsPage.setAttribute("aria-hidden", "true");
});

notificationToggle.addEventListener("click", () => {
  chrome.storage.local.get(["showActivationNotification"], (data) => {
    chrome.storage.local.set(
      { showActivationNotification: data.showActivationNotification === false },
      updatePopup
    );
  });
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && (changes.enabled || changes.blockedCount || changes.showActivationNotification)) updatePopup();
});

updatePopup();
version.textContent = `Version ${chrome.runtime.getManifest().version}`;
