/* LES BOUCLES WHILE */
console.log('Bienvenue dans la console JavaScript');
console.log('Vous êtes dans les exercices sur les boucles while');

// TODO: ÉTAPE 1
// À l'aide d'une boucle while, afficher dans la console les nombres
// de 1 à 10 compris.

var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// TODO: ÉTAPE 2
// Avec une autre boucle while, afficher les mêmes nombres dans la
// console, mais dans l'ordre inverse.

var j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

var nombres = [45, 2, 89, 12, 44, 29, 11, 3];

// TODO: ÉTAPE 3
// À l'aide d'une boucle while, afficher les valeurs du tableau `nombres`
// dans la console jusqu'à la valeur égale à 29.

var k = 0;

while (nombres[k] != 29) {
    console.log(nombres[k]);
    k++;
}

// TODO: ÉTAPE 4
// Avec une autre boucle while, afficher les valeurs du tableau `nombres`
// tant qu'elles sont inférieures à 50.
console.log("etape 4");
var l = 0;
while (nombres[l] < 50) {
    console.log(nombres[l]);
    l++;
}


var prenoms = ['Ali', 'Nora', 'Jean', 'Carole', 'Ibrahim', 'Joseph'];

// TODO: ÉTAPE 5
// À l'aide d'une boucle while, afficher les valeurs du tableau `prenoms`
// tant que leur longueur ne dépasse pas 5 caractères.
console.log("etape 4");
var r=0;

while (prenoms[r].length <=5) {
    console.log(prenoms[r]);
    r++;
}
// TODO: ÉTAPE 6
// Avec une autre boucle while, afficher les valeurs du tableau `prenoms`
// tant qu'elles contiennent la lettre "a" ou "A".
var q = 0;
while (prenoms[q].includes("a") || prenoms[q].includes("A")) {
    console.log(prenoms[q]);
    q++;
}

var q = 0;
while (prenoms[q].toLowerCase().includes("a")) {
    console.log(prenoms[q]);
    q++;
}
// TODO: ÉTAPE 7
// Avec une autre boucle while, utiliser la méthode pop() sur le tableau
// `prenoms` pour retirer une valeur du tableau et l'afficher dans la
// console tant que le tableau n'est pas vide.
// Documentation de la méthode Array.prototype.pop() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/pop
while (prenoms.length > 0) {
    var last = prenoms.pop();
    console.log('Etape 7', last);
}

// TODO: ÉTAPE 8
// À l'aide d'une boucle while, afficher le résultat de la fonction
// Date.now() dans la console tant qu'une variable aléatoire est inférieure
// à 50. Utiliser la fonction Math.random() pour définir cette variable
// aléatoire à chaque itération de la boucle.
// Documentation de la fonction Date.now() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/now
// Documentation de la fonction Math.random() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
while (Math.random() * 100 < 6) {
    console.log(Date.now());
}