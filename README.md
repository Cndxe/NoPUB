# NoPUB

[![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue.svg)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![Licence](https://img.shields.io/badge/Licence-Tous%20droits%20r%C3%A9serv%C3%A9s-blue.svg)](LICENCE.md)
[![Privacy Friendly](https://img.shields.io/badge/Privacy-100%25-brightgreen.svg)](PRIVACY.md)

> NoPUB est une extension Chrome légère et rapide pour bloquer les publicités et nettoyer l'affichage des pages web en temps réel.



---


<p align="center">
  <img src="img/icon.png" alt="Logo NoPUB" width="150">
</p>

<p align="center">
  <img src="img/imgextension.png" alt="Interface de NoPUB avec la protection active" width="320">
</p>

---
NoPUB est une extension Chrome légère qui bloque une partie des publicités pendant la navigation.

## Fonctionnalités

- Protection activée par défaut, avec un interrupteur pour l'activer ou la désactiver.
- Blocage de certaines requêtes publicitaires.
- Suppression de certains éléments publicitaires présents dans les pages.
- Compteur des éléments supprimés.
- Interface principale accessible depuis l'icône NoPUB de la barre d'outils.
- Voyant vert lorsque la protection est active et gris lorsqu'elle est inactive.
- Petite popup intégrée au lançement de Chrome pour indiquer si l'extension est activée.
- Réglage de cette popup depuis l'engrenage des paramètres.

## Fonctionnement

NoPUB utilise deux mécanismes complémentaires :

1. **Blocage des requêtes** : des règles Chrome bloquent certaines requêtes provenant de domaines publicitaires connus.
2. **Nettoyage des pages** : un script retire les éléments identifiés comme publicitaires grâce à leurs identifiants ou classes HTML.

L'état de la protection est partagé avec les pages déjà ouvertes : un changement depuis l'interface est appliqué immédiatement.

## Installation

[Consulter le guide d'installation](INSTALLATION.md)

## Licence

[Consulter la licence](LICENCE.md)

## Confidentialité

[Consulter la politique de confidentialité](PRIVACY.md)
