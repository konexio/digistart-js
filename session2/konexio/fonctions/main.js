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
function sayHelloName(name) {
  console.log('Bonjour ', name);
}

// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.
sayHelloName('Dara');
sayHelloName('Guillaume');
sayHelloName('Olivier');

// ------ TODO 3 ------
// TODO: ÉTAPE 1
// Créer une fonction addTwo qui prend en paramètre un nombre et qui
// retourne ce nombre + 2
function addTwo(number) {
  return number + 2;
}

// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.
console.log(addTwo(5));
console.log(addTwo(10));
console.log(addTwo(100));

// ------ TODO 4 ------
// TODO: ÉTAPE 1
// Créer une fonction displaySum qui prend en paramètre deux nombres entiers
// et qui affiche la somme de ces deux nombres dans la console.
function displaySum(a, b) {
  console.log(a + b);
}

// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.
displaySum(1, 2);
displaySum(10, 5);
displaySum(0, -50);
