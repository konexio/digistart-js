# Exercice 1 : Faire une addition de deux nombres

## Notions traitées

- Révision du HTML.
- Inclure un fichier JavaScript externe dans un fichier HTML.
- Utiliser l'objet `document` et une de ses méthodes (`getElementById`).
- Définir des fonctions et ajouter une fonction en tant que _listener_ sur un événement.
- Les fonctions `alert` et `parseInt`.

## Description

Dans cet exercice, nous allons apprendre à récupérer les contenus de deux champs dans la page HTML et les additionner pour en afficher les résultats.

## Instructions

Vous avez dans ce dossier 2 fichiers :

- `exo1.html`
- `exo1.js`

### Partie 1

Au cours de cet exercice, nous allons modifier ces deux fichiers en suivant les instructions suivantes :

1. Dans la balise head du fichier HTML, ajouter une balise `script` pour inclure le fichier `exo1.js`.
   Lire la partie **"External JavaScript"** sur cette [page de documentation](https://www.w3schools.com/js/js_whereto.asp).

2. Dans le fichier `exo1.js`, écrire une fonction `handleClick` qui exécute l'instruction suivante :

```js
alert('Hello world');
```

3. Dans le fichier HTML :

- Ajouter une balise `input` avec un `id` **"input1"** et une deuxième balise `input` avec un `id` **"input2"**. Les deux inputs devront avoir un attribut **"value"** qui a une valeur `0`.
- Ajouter une balise `button` avec un `id` **"btn"**.

Voir la documentation :

- [Pour les balises `input`](https://www.w3schools.com/tags/tag_input.asp)
- [Pour les balises `button`](https://www.w3schools.com/tags/tag_button.asp)

4. Ouvrir le fichier HTML dans un navigateur (Chrome ou Firefox) pour voir le résultat.

5. Ajouter l’attribut `onclick` à la balise `button` avec comme valeur le nom de la fonction écrite dans le fichier `exo1.js` : `"handleClick()"`.

6. Rafraîchir la page et cliquer sur le bouton. Une fenêtre doit apparaître avec comme contenu : `"Hello world"`.

### Partie 2

**On va maintenant modifier la fonction `handleClick` pour calculer une addition.**

À l’intérieur de la fonction `handleClick` dans `exo1.js` :

1. Créer une variable `firstInput` dans laquelle on peut récupérer l’élément `input` qui a l’`id` **"input1"** ([voir la documentation ici](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)).

2. Créer une autre variable `firstInputValue` pour récupérer la valeur de cet élément `input` en écrivant : `firstInput.value;`.

3. De la même façon, créer les variables `secondInput` et `secondInputValue`.

4. Stocker dans une variable `result` l’addition de `parseInt(firstInputValue)` et `parseInt(secondInputValue)`.

5. Exécuter la fonction `alert` avec comme paramètre la variable `result`.

6. Rafraîchir la page, remplir les champs avec des nombres, cliquer sur le bouton et vérifier le résultat.
