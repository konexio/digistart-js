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
function sayHelloName(prenom) {
  console.log('Bonjour ' + prenom);
}

// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.
sayHelloName('Ola');

// ------ TODO 3 ------
// TODO: ÉTAPE 1
// Créer une fonction addTwo qui prend en paramètre un nombre et qui
// retourne ce nombre + 2
function addTwo(nombre) {
  return nombre + 2;
}
var resultat = addTwo(4);

console.log(resultat);

// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.

// 1. mettre le résultat de la function dans une variable
// 2. console.log de la variable

// ------ TODO 4 ------
// TODO: ÉTAPE 1
// Créer une fonction displaySum qui prend en paramètre deux nombres entiers
// et qui affiche la somme de ces deux nombres dans la console.
function displaySum(n1, n2) {
  console.log(n1 + n2);
}

// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.
displaySum(5, 7);

function equation(v1, v2, v3) {
  console.log(
    'Hello, my name is ' +
      v1 +
      '. I have ' +
      v2 +
      " years old and I'm from " +
      v3 +
      '.'
  );
}
equation('Mateo', 26, 'Brazil');

// Tu es tjr là ? oui Est ce que il y a des errors? Ou autres exercices
// Tu peux regarder les exercices sur les methodes si tu veux
// Lis la suite du cour
// dacc
