# SEMAINE 1 - COURS 1

## Notions traitées

- Les variables et leurs types.
- Addition de nombres (type `number`), concaténation de textes ou "chaînes de caractères" (type `string`).
- Déclaration et appel de fonctions avec ou sans arguments.
- Les fonctions `alert()`, `console.log()`, `parseFloat()`, `toString()`.


## Description

Dans cet exercice, nous allons apprendre à stocker des valeurs dans des variables `var` et à les manipuler. Nous allons également apprendre à déclarer des fonctions `function`, les invoquer avec des arguments, et afficher leurs résultats dans une console.


## Syntaxe

### Une variable :

```js
    var exemple = 27;
```
  * Le mot-clé `var` sert à déclarer la variable.
  * `exemple` est le nom que je choisis de donner à ma variable.
  * `27` est la valeur que je donne à ma variable `exemple`.
  * Après l'exécution de cette ligne de code, `exemple` contient `27`.

### Une fonction :

```js
    function multiply(a, b) {
        return a * b;
    };
```
  * Le mot-clé `function` sert à déclarer la fonction.
  * `multiply` est le nom que je choisis de donner à ma fonction.
  * `a` et `b` sont les arguments de ma fonction. Je peux en mettre autant que je veux, aucun y compris.
  * `return` précède la valeur retournée (son résultat) par la fonction `multiply`.
  * `a * b` est une opération que j'écris avec les arguments.

### `parseFloat()` :

```js
    var monFauxNombre = '0';
    var monVraiNombre = parseFloat(monFauxNombre);
```
  * La valeur de `monFauxNombre` est un texte '0'.
  * La valeur de `monVraiNombre` est le nombre 0. Je peux maintenant faire des opérations mathématiques avec `monVraiNombre`.

### `toString()` :

```js
    var monFauxTexte1 = 5;
    var monFauxTexte2 = 2;
```
Je veux créer une variable `pasEncoreMonAge` de valeur 52. Mes variables `monFauxTexte1` et `monFauxTexte2` sont de type nombre. Si je les ajoute, j'obtiendrai 5 + 2 = 7. Voici comment j'obtiens 52 :

```js
    var monVraiTexte1 = 5.toString();
    var monVraiTexte2 = 2.toString();
    var pasEncoreMonAge = monVraiTexte1 + monVraiTexte2;
```
Ici, `pasEncoreMonAge` a bien la valeur de 52.

### `alert()` :

```js
    alert('Salut !');
```
Une fenêtre de dialogue s'ouvrira avec le texte 'Salut !'.

### `console.log()` :

```js
    console.log('Salut !');
```
La phrase 'Salut !' s'affichera dans la console du navigateur.


## Exercice

 *  Vous avez dans ce dossier 2 fichiers :
    - `index.html`
    - `main.js`
 *  `index.html` n'a pas besoin d'être touché.
 *  Ouvrez `main.js` dans Visual Studio Code, ainsi que `index.html` dans un navigateur, puis ouvrez la console.
 *  Suivez les instructions une par une indiquées dans `main.js`, en écrivant votre code **sous** les commentaires commençant par `// TODO:`.
