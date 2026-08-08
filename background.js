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

        showStartupPopup();
    });
});


function showStartupPopup() {

    // Ouvre le popup de l'extension (popup/popup.html) directement
    // depuis la barre d'outils de Chrome, au lieu d'une notification système.
    // Nécessite Chrome 127+ ; on encapsule dans un try/catch car l'appel
    // peut échouer si aucune fenêtre Chrome n'est au premier plan.
    try {

        const result = chrome.action.openPopup();

        if (result && typeof result.catch === "function") {

            result.catch((error) => {
                console.warn(
                    "NoPUB : impossible d'ouvrir le popup au démarrage :",
                    error
                );
            });

        }

    } catch (error) {

        console.warn(
            "NoPUB : impossible d'ouvrir le popup au démarrage :",
            error
        );

    }

}