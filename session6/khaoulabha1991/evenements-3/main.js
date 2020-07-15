/* LES ÉVÉNEMENTS */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 3 sur les événements");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button du HTML.

var button2 = document.getElementById('buttonId');



// ------ TODO 2 ------
// Créer la fonction qui sera appelée dans le TODO3.
// Elle devra modifier le texte du bouton par un nombre aléatoire.
// Pour obtenir un nombre aléatoire, utiliser Math.random().


function myFunction(){
    button2.innerHTML = Math.random();
}


// ------ TODO 3 ------
// Attacher un événement "click" sur le bouton, et appeler la fonction lors du clic.

button2.addEventListenner("click",myFunction);


