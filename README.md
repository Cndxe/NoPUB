# NoPUB

NoPUB est une extension Chrome légère qui a pour objectif de bloquer les publicités lors de la navigation sur Internet.

L'extension fonctionne en arrière-plan et ne montre aucune interface pendant la navigation.

## Fonctionnalités

- 🛡️ Protection activée automatiquement

- 🚫 Blocage de certaines requêtes publicitaires

- 🧹 Suppression de certains éléments publicitaires présents dans les pages

- 🔢 Compteur des publicités/éléments supprimés

- 🔘 Activation ou désactivation de la protection

- 🔔 Notification `NoPUB activé` au démarrage

- ⚡ Fonctionnement en arrière-plan

- 🌐 Fonctionne sur les sites correspondant aux permissions de l'extension



## Fonctionnement

NoPUB utilise deux mécanismes principaux :

### 1. Blocage des requêtes

L'extension utilise l'API `declarativeNetRequest` de Chrome afin de bloquer certaines requêtes provenant de domaines publicitaires connus.

### 2. Nettoyage des pages

Un script analyse les pages et supprime certains éléments identifiés comme publicitaires grâce à leurs identifiants ou classes HTML.

Un `MutationObserver` permet également de surveiller les modifications de la page afin de détecter certains éléments ajoutés après le chargement initial.

