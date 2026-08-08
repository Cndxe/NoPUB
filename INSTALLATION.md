# Comment installer **NoPUB** sur Google Chrome

## Prérequis

Disposer de :

* Google Chrome installé sur l'ordinateur
* Les fichiers sources de l'extension NoPUB
* Le fichier `manifest.json` présent dans le dossier de l'extension

> ⚠️ NoPUB est installée ici en tant qu'extension non empaquetée (« unpacked extension »). Cette méthode est principalement destinée au développement et aux tests.

## Installation

### 1. Télécharger ou récupérer le projet

Récupérez les fichiers sources de NoPUB sur votre ordinateur.

Le dossier doit contenir le fichier `manifest.json`.


### 2. Ouvrir la page des extensions Chrome

Dans Google Chrome, ouvrez :

```text
chrome://extensions/
```

Vous pouvez également accéder à cette page depuis :

**⋮ → Extensions → Gérer les extensions**

### 3. Activer le mode développeur

En haut à droite de la page des extensions, activez :

**Mode développeur**

Cette option permet notamment de charger une extension directement depuis son dossier source.

### 4. Charger NoPUB

Cliquez sur :

**Charger l'extension non empaquetée**

Sélectionnez ensuite le **dossier racine de NoPUB**

### 5. Vérifier l'installation

Une fois NoPUB installée, elle doit apparaître dans la liste des extensions Chrome.

Vérifiez que l'extension est activée.

## Utilisation

NoPUB fonctionne automatiquement une fois activée.

Selon la configuration de l'extension :

* la protection est activée au démarrage ;
* certaines requêtes publicitaires sont bloquées ;
* certains éléments publicitaires présents dans les pages peuvent être supprimés ;
* le compteur des éléments supprimés peut être mis à jour ;
* la protection peut être activée ou désactivée.

Après l'installation, ouvrez simplement un site correspondant aux permissions de l'extension.

## Après une modification du code

Lorsque vous modifiez le code source de NoPUB, il peut être nécessaire de recharger l'extension.

Pour cela :

1. Ouvrez `chrome://extensions/`
2. Repérez **NoPUB**
3. Cliquez sur le bouton **Actualiser** 🔄

Si une page web était déjà ouverte avant le rechargement de l'extension, rechargez également cette page.



### Il se peut que certaines publicités ne sont pas bloquées !

Le fonctionnement de NoPUB dépend des règles de blocage et des éléments ciblés par l'extension.


## Désinstallation

Pour supprimer NoPUB :

1. Ouvrez `chrome://extensions/`
2. Repérez **NoPUB**
3. Cliquez sur **Supprimer**
4. Confirmez la suppression

La suppression désactive et retire l'extension de Chrome.

## Licence

Consultez le fichier `LICENSE` du projet pour connaître les conditions d'utilisation et de distribution de NoPUB.
