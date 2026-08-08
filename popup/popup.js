const toggleButton = document.getElementById("toggle");
const statusText = document.getElementById("status");
const toggleSub = document.getElementById("toggleSub");
const counter = document.getElementById("counter");

let lastBlocked = null;

function updatePopup() {
  chrome.storage.local.get(["enabled", "blockedCount"], (data) => {
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
  });
}

toggleButton.addEventListener("click", () => {
  chrome.storage.local.get(["enabled"], (data) => {
    const newState = data.enabled === false;

    chrome.storage.local.set({ enabled: newState }, () => {
      updatePopup();
    });
  });
});

updatePopup();