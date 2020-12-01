/* LES COMPARATEURS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les comparateurs');

// ------ TODO 1 ------
// 1. Créer une variable neighbourAge qui contient l'âge de votre voisin
var neighbourAge = 30;

// 2. Créer une variable myAge qui contient votre âge
var monAge = 25;

// 3. Comparez les variables neighbourAge et monAge en utilisant des comparateurs (<, <=, >, >=, ===, !== ...)
// puis affichez le résultat des comparaisons dans la console avec la méthode "console.log".
// tu veux de l'aide ?   OUI
// je pense que tu dois comparer les 2 ages dans console.log()
// exemple console.log(age1 !== age2), avec quelques comparateurs
// /!\ en utilisant les variables neighbourAge et monAge

console.log(neighbourAge !== monAge); //yes

// ------ TODO 2 ------
// 1. Créer une fonction showGreaterNumber qui prend en paramètre deux nombres et
// qui affiche le plus grand des deux dans la console.

// 2. L'exécuter avec les paramètres de votre choix.

// ------ TODO 3 ------
// 1. Créer une fonction isBetween1000And3000 qui prend en paramètre une variable et
// qui renvoie un booléen indiquant si la variable est un nombre compris entre 1000 et 3000.
function isBetween1000And3000(a) { // on ouvre la fonction
    if (a < 1000) { //on ouvre le if ici
        return false  
    } //on ferme le if là 

    if (a === 3000) {//on ouvre le 2e if ici
        return true 
    }else{
    
    }//on ferme le 2e if ici

} // on ferme la fonction ok et dans le console on me quoi?
// il faut mettre le console log à l'extérieur de la fonction dans cet exercice
// exemple :
//  function laFonction(u) {
//      if ( u===10 ) {
//          return true
//      }
//  }
//  
//  console.log(laFonction(10)); OK j'ai compris maintenant merci. De rien ;)
// 
// 




// pour faire 2 if il faut bien fermer les {} :
//  if (x === 1) {
//      blalbla
//  }
//
//  if (y !== 2) {
//      blalbla
//  }

// 2. L'exécuter avec le paramètre de votre choix.
