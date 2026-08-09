<div align="center">

<img src="assets/logo.png" alt="NoPUB Logo" width="140">

# NoPUB

**Une extension Chrome légère pour bloquer les publicités et nettoyer les pages web en temps réel.**

[Installation](INSTALLATION.md) · [Confidentialité](PRIVACY.md) · [Licence](LICENCE.md)

</div>

---

## Présentation

**NoPUB** est une extension Chrome légère et rapide conçue pour réduire les publicités et nettoyer l'affichage des pages web pendant la navigation.

L'extension combine le **blocage de certaines requêtes publicitaires** avec le **nettoyage dynamique des éléments publicitaires présents dans les pages**.

L'objectif est de proposer une solution simple, rapide et discrète, sans interface complexe.

---

## Aperçu

<div align="center">

<img src="assets/screenshot-main.png" alt="Interface principale de NoPUB" width="700">

</div>

> Interface principale de NoPUB avec l'état de la protection et le compteur des éléments supprimés.

### Protection active

<div align="center">

<img src="assets/screenshot-active.png" alt="NoPUB protection active" width="450">

</div>

### Protection désactivée

<div align="center">

<img src="assets/screenshot-disabled.png" alt="NoPUB protection désactivée" width="450">

</div>

### Paramètres

<div align="center">

<img src="assets/screenshot-settings.png" alt="Paramètres de NoPUB" width="450">

</div>

---

## Fonctionnalités

* Protection activée par défaut.
* Interrupteur permettant d'activer ou de désactiver la protection.
* Blocage de certaines requêtes provenant de domaines publicitaires connus.
* Suppression de certains éléments publicitaires directement présents dans les pages.
* Compteur des éléments supprimés.
* Interface accessible depuis l'icône NoPUB dans la barre d'outils Chrome.
* Indicateur visuel de l'état de la protection.
* Synchronisation de l'état de protection avec les pages déjà ouvertes.
* Application immédiate des changements effectués depuis l'interface.
* Petite popup affichée au lancement de Chrome pour indiquer l'état de l'extension.
* Paramétrage de la popup depuis la section dédiée aux paramètres.

---

## Comment fonctionne NoPUB ?

NoPUB repose sur deux mécanismes complémentaires.

### 1. Blocage des requêtes

L'extension utilise les mécanismes de filtrage de Chrome afin de bloquer certaines requêtes associées à des domaines publicitaires connus.

Cette première couche permet d'empêcher certaines ressources publicitaires d'être chargées.

### 2. Nettoyage des pages

Un script analyse ensuite le contenu des pages et supprime certains éléments identifiés comme publicitaires à partir de leurs **classes** ou **identifiants HTML**.

Cette approche permet de nettoyer certains éléments qui auraient malgré tout été chargés dans la page.

### 3. Synchronisation

L'état de la protection est partagé avec les pages ouvertes.

Lorsqu'un utilisateur active ou désactive NoPUB depuis son interface, le changement est appliqué immédiatement sans nécessiter de redémarrer le navigateur.

---

## Architecture

```text
NoPUB
│
├── Blocage des requêtes
│   └── Règles de filtrage Chrome
│
├── Nettoyage des pages
│   └── Détection et suppression des éléments publicitaires
│
├── Interface
│   ├── État de la protection
│   ├── Interrupteur
│   └── Compteur
│
└── Paramètres
    └── Gestion de la popup au lancement de Chrome
```

---

## Installation

L'installation de NoPUB peut être effectuée manuellement depuis le code source.

Consulte le guide détaillé :

**[Guide d'installation](INSTALLATION.md)**

---

## Utilisation

Après l'installation :

1. Ouvrez Chrome.
2. Accédez aux extensions.
3. Activez NoPUB.
4. Épinglez l'extension dans la barre d'outils si nécessaire.
5. Cliquez sur l'icône NoPUB pour accéder à l'interface.
6. Activez ou désactivez la protection selon vos besoins.

L'état actuel de la protection est indiqué directement dans l'interface.

---

## Confidentialité

NoPUB a été conçu pour fonctionner directement dans le navigateur.

Pour plus d'informations sur les données utilisées et les pratiques de confidentialité :

**[Consulter la politique de confidentialité](PRIVACY.md)**

---

## Licence

Ce projet est distribué sous la licence définie dans le fichier :

**[LICENCE](LICENCE.md)**

---

## Structure des ressources

Pour organiser les éléments visuels du README, je recommande cette structure :

```text
.
├── README.md
├── INSTALLATION.md
├── LICENCE.md
├── PRIVACY.md
│
└── assets/
    ├── logo.png
    ├── screenshot-main.png
    ├── screenshot-active.png
    ├── screenshot-disabled.png
    └── screenshot-settings.png
```

---

<div align="center">

**NoPUB**

Extension Chrome légère pour une navigation plus propre.

</div>
