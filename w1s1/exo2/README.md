# Exercice 2 : Modifier le style du `body`

## Notions traitées

- Révision du CSS (comment inclure le fichier dans le HTML).
- Travailler avec les classes CSS dans le JavaScript.
- Utiliser un _event listener_ sur le bouton.

## Description

Dans cet exercice, nous allons créer des boutons qui portent des noms de couleurs différentes et nous allons faire en sorte de changer la couleur du `body` quand l'utilisateur clique sur un des boutons.

## Instructions

Vous avez dans ce dossier 3 fichiers :

- `exo2.html`
- `exo2.js`
- `exo2.css`

Au cours de cet exercice, nous allons modifier ces trois fichiers en suivant les instructions suivantes :

1. Dans la balise `head` du fichier HTML, ajouter une balise `script` pour inclure le fichier `exo2.js` et une balise `link` pour ajouter le fichier `exo2.css`.

```html
<!-- Rappel: Pour inclure un fichier CSS -->
<link rel="stylesheet" type="text/css" href="le_nom_de_mon_fichier.css" />
```

2. Dans le fichier CSS, ajouter deux **classes** `blue` et `red` qui ajoutent respectivement une couleur de fond bleue et rouge.

3. Dans le fichier JavaScript, créer une fonction `handleClick` qui prend en paramètre un nom de classe `className` et qui affecte cette classe au `body`, en utilisant :

```js
document.body.className = className;
```

4. Dans le fichier HTML :

- Ajouter au bouton avec le texte rouge, l’attribut `onclick` avec la valeur `handleClick('red')`.
- Ajouter au bouton avec le texte bleu, l’attribut `onclick` avec la valeur `handleClick('blue')`.

5. Ouvrir la page HTML dans le navigateur, cliquer sur les boutons et le document devrait changer de couleur.

## Bonus

Faire la même chose mais pour modifier le style d’un élément `div` que vous aurez ajouté dans le document.
