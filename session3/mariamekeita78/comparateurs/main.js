/* LES COMPARATEURS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les comparateurs');

// ------ TODO 1 ------
// 1. Créer une variable neighbourAge qui contient l'âge de votre voisin

var neighbourAge = 15;


// 2. Créer une variable myAge qui contient votre âge

var myAge = 30;


// 3. Comparez les variables neighbourAge et monAge en utilisant des comparateurs (<, <=, >, >=, ===, !== ...)
// puis affichez le résultat des comparaisons dans la console avec la méthode "console.log".

function compareAge(age1, age2){
    if (age1 != age2) {
       console.log("age 1 is not equal age 2");
    }
    if (age1 < age2) {
       console.log("age 1 is smaller than age 2");
    } else if (age1 > age2) {
       console.log("age 1 is bigger than age 2");
    } else if (age1 <= age2) {
       console.log("age 1 is smaller or equal to age 2");
    } else if (age1 >= age2) {
       console.log("age 1 is bigger or equal to age 2");
    } else if (age1 == age2) {
       console.log("age 1 is equal age 2");
    } 
   }
   
   
   compareAge(23, 78);
   compareAge(20, 300);
   compareAge(20, 20);
   compareAge(-4, 789877);
   compareAge(2388989, 78899);
   compareAge(1, 2);


// ------ TODO 2 ------
// 1. Créer une fonction showGreaterNumber qui prend en paramètre deux nombres et
// qui affiche le plus grand des deux dans la console.

function showGreaterNumber(a, b) {
    if (a > b) {
      console.log(a);
    } else {
      console.log(b);
    }
  }


// 2. L'exécuter avec les paramètres de votre choix.

showGreaterNumber(1, 3);
showGreaterNumber(5, -10);


// ------ TODO 3 ------
// 1. Créer une fonction isBetween1000And3000 qui prend en paramètre une variable et
// qui renvoie un booléen indiquant si la variable est un nombre compris entre 1000 et 3000.

function isBetween1000And3000(int) {
    console.log("--->")
    console.log(int >= 1000);
    console.log(int <= 3000);
    console.log("<---")
    return ((int >= 1000) && (int <= 3000));
}



// 2. L'exécuter avec le paramètre de votre choix.

console.log(isBetween1000And3000(3));
console.log(isBetween1000And3000(3000));
console.log(isBetween1000And3000(2000));