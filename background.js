chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        enabled: true,
        blockedCount: 0
    });
});

chrome.runtime.onStartup.addListener(() => {
    chrome.storage.local.get(["enabled"], (data) => {

        if (data.enabled === undefined) {
            chrome.storage.local.set({
                enabled: true,
                blockedCount: 0
            });
        }

        showStartupNotification();
    });
});


function showStartupNotification() {

    chrome.notifications.create(
        "nopub-started",
        {
            type: "basic",
            iconUrl: "icon.png",
            title: "NoPUB",
            message: "NoPUB activé",
            priority: 1
        }
    );

}