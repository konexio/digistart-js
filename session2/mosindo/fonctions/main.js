/* LES FONCTIONS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les fonctions');

// ------ TODO 1 ------
// TODO: ÉTAPE 1
// Créer une fonction sayHello qui imprime "Bonjour" dans la console
function sayHello(){
    console.log("Bonjour");
}


// TODO: ÉTAPE 2
// L'exécuter

sayHello();

// ------ TODO 2 ------
// TODO: ÉTAPE 1
// Créer une fonction sayHelloName qui prend en paramètre le nom d'une personne, et
// qui imprime "Bonjour " suivi du nom de la personne dans la console.

function sayHello(){

    var greetings;
    greetings="Bonjour"

    var name;

    name= " Bertrand ";

    console.log(greetings+name);
    }
    /*2eme proposition de reponse

    function sayHello(){

    var name;

    name= "Bonjour"+" Bertrand ";

    console.log(name);
    }*/


// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.
sayHello();



// ------ TODO 3 ------
// TODO: ÉTAPE 1
// Créer une fonction addTwo qui prend en paramètre un nombre et qui
// retourne ce nombre + 2
function addTwo(a){
  return a + 2;

}

var result = addTwo(5);

console.log(result);



// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.



// ------ TODO 4 ------
// TODO: ÉTAPE 1
// Créer une fonction displaySum qui prend en paramètre deux nombres entiers
// et qui affiche la somme de ces deux nombres dans la console.
function displaySum(a,b){
    return a+b;
}
 displaySum(1,4);

 var tolal= displaySum(1,4);

 console.log(tolal);

 function logdisplaySum(a, b) {
    console.log(a + b);
    }

logdisplaySum(1,4);
// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.



