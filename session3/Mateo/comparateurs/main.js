/* LES COMPARATEURS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les comparateurs');

// ------ TODO 1 ------
// 1. Créer une variable neighbourAge qui contient l'âge de votre voisin

// 2. Créer une variable myAge qui contient votre âge

// 3. Comparez les variables neighbourAge et monAge en utilisant des comparateurs (<, <=, >, >=, ===, !== ...)
// puis affichez le résultat des comparaisons dans la console avec la méthode "console.log".

// ------ TODO 2 ------
// 1. Créer une fonction showGreaterNumber qui prend en paramètre deux nombres et
// qui affiche le plus grand des deux dans la console.

// 2. L'exécuter avec les paramètres de votre choix.

// ------ TODO 3 ------
// 1. Créer une fonction isBetween1000And3000 qui prend en paramètre une variable et
// qui renvoie un booléen indiquant si la variable est un nombre compris entre 1000 et 3000.


function isBetween100And3000(a) {
  if (a < 1000 || a > 3000) {
    return false;
  } 
//  else if (a > 3000) { // merci didier, maintenant ça marche
  //  return false; } //
else {
    return true;
}

} 

// 2. L'exécuter avec le paramètre de votre choix.
var result = isBetween100And3000(13000)
console.log(result)
//OK