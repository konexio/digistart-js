/* LES FONCTIONS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les fonctions');

// ------ TODO 1 ------
// TODO: ÉTAPE 1
// Créer une fonction sayHello qui imprime "Bonjour" dans la console

function sayHello() {
  console.log('Bonjour');
}

// TODO: ÉTAPE 2
// L'exécuter
sayHello();

// ------ TODO 2 ------
// TODO: ÉTAPE 1
// Créer une fonction sayHelloName qui prend en paramètre le nom d'une personne, et
// qui imprime "Bonjour " suivi du nom de la personne dans la console.
function sayHello(prenom) {
  console.log('Bonjour', prenom);
}
// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.
sayHello('Didier');
// ------ TODO 3 ------
// TODO: ÉTAPE 1
// Créer une fonction addTwo qui prend en paramètre un nombre et qui
// retourne ce nombre + 2
function addTwo(a) {
  //
  return a + 2;
}

// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.
var resultat = addTwo(2);
console.log(resultat);
// ------ TODO 4 ------
// TODO: ÉTAPE 1
// Créer une fonction displaySum qui prend en paramètre deux nombres entiers
// et qui affiche la somme de ces deux nombres dans la console.
function displaySum(a, b) {
  console.log(a + b);
}
// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.
displaySum(2, 4);
// Impeccable :)
