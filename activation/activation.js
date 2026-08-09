setTimeout(() => {
  chrome.runtime.sendMessage({ type: "restoreMainPopup" });
  window.close();
}, 3000);
