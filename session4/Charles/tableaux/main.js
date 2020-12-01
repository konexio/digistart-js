/* LES TABLEAUX (ARRAYS) */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les tableaux (arrays)');

// ------ TODO 1 ------
var prices = [12, 99, 3, 25, 4, 987, 22, 15, 99];

// 1. En accédant aux éléments du tableau, faire en sorte que le chiffre 4 s'affiche dans la console.

console.log(prices[4]);

// 2. Afficher dans la console la longueur du tableau "prices".

console.log(prices.length);

// 3. Ajouter un prix au tableau et afficher le tableau dans la console.

prices.push(120);
console.log(prices);

// ------ TODO 2 ------
var random = ['A', null, 123, 'hejllo', true];

// 1. En accédant aux éléments du tableau, remplacer un élément du tableau.

random[1] = 'toto';
random.splice(1, 1, 'tata');
// 2. Afficher le tableau dans la console.

console.log(random);

// ------ TODO 3 ------
var array = [1, 2, 3, 5, 6, 7, 9, 10];

// 1. Ajouter dans le tableau les éléments 4 et 8 manquants grâce à la méthode splice afin d'obtenir le tableau suivant :
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Documentation de la méthode splice : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice

array.splice(3, 0, 4);
// [1, 2, 3, 4, 5, 6, 7, 9, 10];
array.splice(7, 0, 8);
// 2. Afficher le tableau dans la console.
console.log(array);
// 3. Ajouter la valeur 11 à la fin du tableau.
array.push(11);
console.log(array);
// 4. Ajouter la valeur 0 au début du tableau.
array.splice(0, 0, 0);
console.log(array);
// 5. Afficher le tableau dans la console.
console.log(array);
// ------ TODO 4 ------
var array = ['B', 'A', 'C', 'E', 'D'];

// 1. Trier le tableau dans l'ordre alphabétique croissant grâce à la méthode sort.

array.sort();
console.log(array);

// 2. Utiliser la méthode join pour regrouper les éléments du tableau en une string.

var arrayJoin = array.join('');
console.log(arrayJoin);

// 3. Afficher le tableau dans la console et vérifier qu'on obtient la string "ABCDE".

// ------ TODO 5 ------
var array = ['Michael', 'Jordan', 'Laeticia', 'Julie', 'TOTO'];
var array2 = [1];

// 1. Ecrire une fonction qui renvoie le dernier élément du tableau passé en paramètre.

function dernierElement(tableau) {
  var longueurTableau = tableau.length; // 1
  var dernierIndice = longueurTableau - 1; // 0

  return tableau[dernierIndice];
}

tableau.length - 1;

function premierElement(tableau) {
  return tableau[0];
}

// 2. Appeller la fonction avec le tableau array et vérifier que l'élément "Julie" est bien renvoyé en l'affichant dans la console.

var resultat = dernierElement(array2);
console.log(resultat);
