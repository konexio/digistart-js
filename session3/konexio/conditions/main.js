/* LES CONDITIONS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les conditions');

// ------ TODO 1 ------ 
// 1. Créer une variable color1 qui contient la valeur "rouge"
var color1 = "red";

// 2. Créer une variable color2 qui contient la valeur "green"
var color2 = "green";

// 3. Comparez les deux variables en utilisant une condition (if) et des comparateurs (===, !==) :
// - si la variable est égale à "rouge", affichez "fraise" dans la console
// - si la variable est égale à "green", affichez "pomme" dans la console

function fruit(color){
    if (color == "red"){
        console.log("Je suis une fraise");
    } else if (color == "green"){
        console.log("Je suis une pomme");
    } else {
        console.log("Je suis un fruit inconnu !");
    }
}

fruit(color1);
fruit(color2);
fruit("yellow");


// ------ TODO 2 ------ 
// Complétez l'exercice avancé 1 situé dans le dossier "exercice-avance-1"