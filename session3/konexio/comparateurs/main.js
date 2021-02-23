/* LES COMPARATEURS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les comparateurs');

// ------ TODO 1 ------ 
// 1. Créer une variable neighbourAge qui contient l'âge de votre voisin
var neighbourAge = 40;



// 2. Créer une variable myAge qui contient votre âge
var myAge = 28;



// 3. Comparez les variables neighbourAge et monAge en utilisant des comparateurs (<, <=, >, >=, ===, !== ...)
// puis affichez le résultat des comparaisons dans la console avec la méthode "console.log".
console.log(neighbourAge > myAge);
console.log(neighbourAge < myAge);
console.log(neighbourAge === myAge);
console.log(neighbourAge == myAge);
console.log(neighbourAge !== myAge);



// ------ TODO 2 ------ 
// 1. Créer une fonction showGreaterNumber qui prend en paramètre deux nombres et
// qui affiche le plus grand des deux dans la console.
function showGreaterNumber(numberA, numberB) {
    if (numberA > numberB){
        return numberA;
    } else
        return numberB;
}



// 2. L'exécuter avec les paramètres de votre choix.
var greaterNumber = showGreaterNumber(150, 2000);
console.log(greaterNumber);



// ------ TODO 3 ------ 
// 1. Créer une fonction isBetween1000And3000 qui prend en paramètre une variable et
// qui renvoie un booléen indiquant si la variable est un nombre compris entre 1000.
function isBetween1000And3000(number) {
    if (number > 1000 || number <= 3000)
        return true;
    else
        return false;
}



// 2. L'exécuter avec le paramètre de votre choix.
console.log(isBetween1000And3000(5550));


console.log(isBetween1000And3000(1000));
console.log(isBetween1000And3000(3));


function bestTeamClassico(scoreBarca, scoreReal){
    if (scoreBarca > scoreReal){
        console.log("Le Barca a gagné");
    }
    else if (scoreBarca < scoreReal){
        console.log("Le Real a gagné");
    } 
    else {
        console.log("Egalité !");
    }
}

bestTeamClassico(2,5);