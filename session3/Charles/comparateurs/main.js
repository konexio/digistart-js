/* LES COMPARATEURS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les comparateurs');

// ------ TODO 1 ------
// 1. Créer une variable neighbourAge qui contient l'âge de votre voisin

var ageVoisin = 30;

// 2. Créer une variable myAge qui contient votre âge

var monAge = 27;

// 3. Comparez les variables neighbourAge et monAge en utilisant des comparateurs (<, <=, >, >=, ===, !== ...)
// puis affichez le résultat des comparaisons dans la console avec la méthode "console.log".

console.log(monAge > ageVoisin);
console.log(monAge < ageVoisin);
console.log(monAge === ageVoisin);
console.log(monAge !== ageVoisin);

// ------ TODO 2 ------
// 1. Créer une fonction showGreaterNumber qui prend en paramètre deux nombres et
// qui affiche le plus grand des deux dans la console.

function montreNombreLePlusGrand(a, b) {
  if (a > b) {
    console.log(a);
  } else if (a < b) {
    console.log(b);
  }
}

// 2. L'exécuter avec les paramètres de votre choix.
montreNombreLePlusGrand(1, 2);

// ------ TODO 3 ------
// 1. Créer une fonction isBetween1000And3000 qui prend en paramètre une variable et
// qui renvoie un booléen indiquant si la variable est un nombre compris entre 1000 et 3000.
function isBetween1000And3000(a) {   
  if (a > 1000 && a < 3000) {
    return true;
  } else {
    return false;
  }
}

var resultat = isBetween1000And3000(3500);
console.log(resultat);
// 2. L'exécuter avec le paramètre de votre choix.

// a < 1000 return false
// a > 1000
// a < 3000
