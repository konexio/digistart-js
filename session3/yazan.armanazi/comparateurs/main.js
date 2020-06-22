/* LES COMPARATEURS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les comparateurs');

// ------ TODO 1 ------
// 1. Créer une variable neighbourAge qui contient l'âge de votre voisin

var neighbourAge1 = 12;


// 2. Créer une variable myAge qui contient votre âge

var myAge1 = 29;


// 3. Comparez les variables neighbourAge et monAge en utilisant des comparateurs (<, <=, >, >=, ===, !== ...)
// puis affichez le résultat des comparaisons dans la console avec la méthode "console.log".


function compreAge(neighbourAge, myAge) {    

if(neighbourAge < myAge){
  console.log("neighbourAge is younger");
}

else if(neighbourAge>myAge){
  console.log("neighbourAge is older");
}

else if(neighbourAge>=myAge){
    console.log("neighbourAge is older or he has the same age");
  }

  else if(neighbourAge<=myAge){
    console.log("neighbourAge is younger or he has the same age");
  }
  else if(neighbourAge==myAge){
    console.log("neighbourAge has the same age as me");
  }
}


compreAge(12, 15);
compreAge(42, 44);
compreAge(17, 12);
compreAge(47, 47);
compreAge(46, 46);
// ------ TODO 2 ------
// 1. Créer une fonction showGreaterNumber qui prend en paramètre deux nombres et
// qui affiche le plus grand des deux dans la console.

function showGreaterNumber (num,num2){
if (num < num2){
    return("false");
}

else if(num > num2){
    return("true");
}
}


// 2. L'exécuter avec les paramètres de votre choix.

showGreaterNumber (10,7);


// ------ TODO 3 ------
// 1. Créer une fonction isBetween1000And3000 qui prend en paramètre une variable et
// qui renvoie un booléen indiquant si la variable est un nombre compris entre 1000 et 3000.

function isBetween1000And3000 (par1){
    console.log(par1>= 2000);
    console.log(par1<= 3000);
    return ((par1>= 2000) && (par1<= 3000));
    

}


// 2. L'exécuter avec le paramètre de votre choix.

isBetween1000And3000(1500);
isBetween1000And3000(3000);