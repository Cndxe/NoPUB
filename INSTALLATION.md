# Installer NoPUB dans Google Chrome

## Prérequis

- Google Chrome installé sur l'ordinateur ;
- le dossier source de NoPUB, contenant le fichier `manifest.json`


## Installation

1. Dans Chrome, ouvrez `chrome://extensions/`.
2. Activez le **Mode développeur**, en haut à droite.
3. Cliquez sur **Charger l'extension non empaquetée**.
4. Sélectionnez le dossier racine de NoPUB, celui qui contient `manifest.json`.
5. Épinglez NoPUB depuis le menu Extensions de Chrome pour voir son icône et sa pastille d'état dans la barre d'outils.

## Utilisation

Cliquez sur l'icône NoPUB pour ouvrir l'interface principale.

- L'interrupteur **Protection** active ou désactive le blocage.
- Le voyant et la pastille de l'icône sont verts lorsque la protection est active, gris lorsqu'elle est inactive.
- L'engrenage ouvre les paramètres, dont l'activation de la petite popup « NoPUB activée ».

## Après une modification du code

1. Ouvrez `chrome://extensions/`.
2. Repérez **NoPUB**.
3. Cliquez sur le bouton de rechargement de l'extension.
4. Rechargez les pages web déjà ouvertes pour que le script de nettoyage soit à nouveau injecté.

## Limites

NoPUB dépend de ses règles de blocage et des éléments HTML ciblés. Certaines publicités peuvent donc ne pas être détectées ou bloquées.

## Désinstallation

1. Ouvrez `chrome://extensions/`.
2. Repérez **NoPUB**.
3. Cliquez sur **Supprimer**, puis confirmez.

## Licence

[Consulter la licence de NoPUB](LICENCE.md)
