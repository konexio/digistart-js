/* LES CONDITIONS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les conditions');

// ------ TODO 1 ------
// 1. Créer une variable color1 qui contient la valeur "rouge"

var color1 = "rouge";


// 2. Créer une variable color2 qui contient la valeur "green"

var color2 = "green";


// 3. Ecrire une fonction qui prend une variable color en argument :
// - si la variable est égale à "rouge", affichez "fraise" dans la console
// - si la variable est égale à "green", affichez "pomme" dans la console
// Appeller cette fonction avec color1 et color2.

function printFruitWithColor(color) {
    if (color === "rouge") {
        console.log("fraise");
    }
    if (color === "green") {
        console.log("pomme");
    }
}

printFruitWithColor(color1);
printFruitWithColor(color2);




// ------ TODO 2 ------
// Complétez l'exercice avancé 1 situé dans le dossier "exercice-avance-1"