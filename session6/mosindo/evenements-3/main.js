/* LES ÉVÉNEMENTS */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 3 sur les événements");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button du HTML.
var myButton =  document.querySelector("button");



// ------ TODO 2 ------
// Créer la fonction qui sera appelée dans le TODO3.
// Elle devra modifier le texte du bouton par un nombre aléatoire.
// Pour obtenir un nombre aléatoire, utiliser Math.random().

function num (min, max){;
    var num =Math.floor(Math.random() *(10 - 1)) + 1;
    var numRand =document.querySelector("button").innerHTML= num;

    return Math.floor(Math.random() * (max - min + 1) ) + min;
};


/* correction todo 2 version simplifier:

function random100(){;
    var num = Math.floor(Math.random() * 99) + 1;
    myButton.innerHTML = num;

    soluttion 2 :function rand100() {
    button.innerHTML = Math.floor(Math.random() * 100);
}


// ------ TODO 3 ------
// Attacher un événement "click" sur le bouton, et appeler la fonction lors du clic.

button.addEventListener("click", rand100);

};*/


// ------ TODO 3 ------
// Attacher un événement "click" sur le bouton, et appeler la fonction lors du clic.


myButton.addEventListener("click", num);



