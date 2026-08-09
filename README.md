# NoPUB

NoPUB est une extension Chrome légère qui bloque une partie des publicités pendant la navigation.

## Fonctionnalités

- Protection activée par défaut, avec un interrupteur pour l'activer ou la désactiver.
- Blocage de certaines requêtes publicitaires grâce à l'API Chrome `declarativeNetRequest`.
- Suppression de certains éléments publicitaires présents dans les pages.
- Compteur des éléments supprimés.
- Interface principale accessible depuis l'icône NoPUB de la barre d'outils.
- Voyant vert lorsque la protection est active et gris lorsqu'elle est inactive.
- Pastille verte ou grise directement sur l'icône NoPUB épinglée.
- Petite popup intégrée à Chrome « NoPUB activée », qui se ferme automatiquement.
- Réglage de cette popup depuis l'engrenage des paramètres.

## Fonctionnement

NoPUB utilise deux mécanismes complémentaires :

1. **Blocage des requêtes** : des règles Chrome bloquent certaines requêtes provenant de domaines publicitaires connus.
2. **Nettoyage des pages** : un script retire certains éléments identifiés comme publicitaires grâce à leurs identifiants ou classes HTML. Un `MutationObserver` surveille les éléments ajoutés après le chargement.

L'état de la protection est partagé avec les pages déjà ouvertes : un changement depuis l'interface est appliqué immédiatement.

## Installation

[Consulter le guide d'installation](INSTALLATION.md)

## Licence

[Consulter la licence](LICENCE.md)
