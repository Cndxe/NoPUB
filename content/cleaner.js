(() => {

    "use strict";

    let enabled = true;

    const selectors = [
        '[id^="ad-"]',
        '[id^="ads-"]',
        '[id*="-ad-"]',
        '[id*="-ads-"]',

        '[class^="ad-"]',
        '[class^="ads-"]',
        '[class*="-ad-"]',
        '[class*="-ads-"]',

        '[id*="advert"]',
        '[class*="advert"]',

        '[id*="advertisement"]',
        '[class*="advertisement"]',

        '[id*="sponsored"]',
        '[class*="sponsored"]'
    ];


    chrome.storage.local.get(["enabled"], (data) => {

        enabled = data.enabled !== false;

        if (enabled) {
            cleanPage();
        }

    });


    function cleanPage() {

        removeAds();

        const observer = new MutationObserver(() => {

            if (enabled) {
                removeAds();
            }

        });


        if (document.documentElement) {

            observer.observe(
                document.documentElement,
                {
                    childList: true,
                    subtree: true
                }
            );

        }

    }


    function removeAds() {

        if (!enabled) {
            return;
        }

        let removed = 0;


        selectors.forEach((selector) => {

            try {

                const elements =
                    document.querySelectorAll(selector);


                elements.forEach((element) => {

                    if (
                        !element.dataset.nopubRemoved
                    ) {

                        element.dataset.nopubRemoved =
                            "true";

                        element.remove();

                        removed++;

                    }

                });

            } catch (error) {

                console.error(
                    "NoPUB:",
                    error
                );

            }

        });


        if (removed > 0) {

            chrome.storage.local.get(
                ["blockedCount"],
                (data) => {

                    const current =
                        data.blockedCount || 0;

                    chrome.storage.local.set({
                        blockedCount:
                            current + removed
                    });

                }
            );

        }

    }

})();