/* LES COMPARATEURS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les comparateurs');

// ------ TODO 1 ------ 
// 1. Créer une variable neighbourAge qui contient l'âge de votre voisin


var neighbourAge = 27;

// 2. Créer une variable myAge qui contient votre âge


var myAge = 36;





// 3. Comparez les variables neighbourAge et monAge en utilisant des comparateurs (<, <=, >, >=, ===, !== ...)
// puis affichez le résultat des comparaisons dans la console avec la méthode "console.log".


if (neighbourAge < myAge){
    console.log("mon voisin est plus jeune")
  }
  
  if (neighbourAge > myAge){
    console.log("mon voisin est plus vieux")
  }


// ------ TODO 2 ------ 
// 1. Créer une fonction showGreaterNumber qui prend en paramètre deux nombres et
// qui affiche le plus grand des deux dans la console.

function showGreaterNumber( number1, number2){
    return Math.max(number1, number2);
    }
    

// 2. L'exécuter avec les paramètres de votre choix.

function showGreaterNumber( number1, number2){
    console.log(Math.max(number1, number2));
    }

showGreaterNumber( 15, 10);


function showGreaterNumber(a, b) {
    if (a > b) {
      console.log(a);
    } else {
      console.log(b);
    }
  }

// ------ TODO 3 ------ 
// 1. Créer une fonction isBetween1000And3000 qui prend en paramètre une variable et
// qui renvoie un booléen indiquant si la variable est un nombre compris entre 1000 et 3000.

function isBetween1000And3000 (from1000to3000){
    if (from1000to3000 >= 1000 && from1000to3000 <=3000){
      console.log(true)}
      else{ 
      console.log(false)
      }
    }

    function isBetween1000And3000(int) {
        console.log("--->")
        console.log(int >= 1000);
        console.log(int <= 3000);
        console.log("<---")
        return ((int >= 1000) && (int <= 3000));
    }



// 2. L'exécuter avec le paramètre de votre choix.


isBetween1000And3000 (2000);



