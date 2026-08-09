 # NoPUB 🚫

> Extension Chrome légère et rapide pour bloquer les publicités et nettoyer l'affichage des pages web en temps réel.

[![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue.svg)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENCE.md)
[![Privacy Friendly](https://img.shields.io/badge/Privacy-100%25-brightgreen.svg)](PRIVACY.md)

---

## 📸 Aperçu

<!-- Remplace les liens ci-dessous par les chemins vers tes captures d'écran -->
| Interface Active | Interface Inactive |
| :---: | :---: |
| ![NoPUB Actif](https://via.placeholder.com/300x200?text=Protection+Active) | ![NoPUB Inactif](https://via.placeholder.com/300x200?text=Protection+Inactive) |

---

## ✨ Fonctionnalités

- **Protection à la carte** : activée par défaut, désactivable en un clic via un interrupteur clair.
- **Blocage réseau** : interception et blocage des requêtes vers les domaines publicitaires connus.
- **Nettoyage du DOM** : suppression dynamique des éléments publicitaires dans les pages HTML.
- **Compteur en temps réel** : suivi du nombre d'éléments publicitaires éliminés pendant ta navigation.
- **Indicateur d'état dynamique** : 
  - 🟢 **Vert** : Protection active
  - ⚪ **Gris** : Protection inactive
- **Notification au démarrage** : petite popup d'information au lancement de Chrome pour confirmer l'état de l'extension.
- **Paramètres personnalisables** : gestion de la popup de démarrage depuis le panneau de configuration (icône engrenage).
- **Mise à jour instantanée** : les changements d'état sont appliqués immédiatement sur les onglets déjà ouverts sans avoir à les recharger.

---

## ⚙️ Fonctionnement technique

NoPUB utilise deux mécanismes complémentaires pour garantir une navigation épurée :

1. **Blocage des requêtes (Réseau)** : utilisation des API natives de Chrome (`declarativeNetRequest`) pour stopper les requêtes publicitaires avant même qu'elles ne soient téléchargées.
2. **Nettoyage des pages (DOM)** : un script d'injection (*content script*) analyse le code des pages web pour masquer/retirer les conteneurs publicitaires identifiés par leurs sélecteurs CSS (classes, identifiants).

---

## 📂 Structure du projet

```text
├── manifest.json       # Fichier de configuration de l'extension (Manifest V3)
├── background/         # Service Worker & gestion des règles réseau
├── content/            # Scripts d'injection pour le nettoyage du DOM
├── popup/              # Interface utilisateur (Popup de la barre d'outils & paramètres)
├── rules/              # Fichiers de règles de blocage (JSON)
└── assets/             # Icônes et images