/* LES ÉVÉNEMENTS */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 3 sur les événements");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button du HTML.

var button = document.getElementsByTagName("button")[0];



// ------ TODO 2 ------
// Créer la fonction qui sera appelée dans le TODO3.
// Elle devra modifier le texte du bouton par un nombre aléatoire.
// Pour obtenir un nombre aléatoire, utiliser Math.random().


function rand100() {
    button.innerHTML = Math.floor(Math.random() * 100);
}


// ------ TODO 3 ------
// Attacher un événement "click" sur le bouton, et appeler la fonction lors du clic.

button.addEventListener("click", rand100);

function onMouseOver(event) {
    event.target.style.opacity = 0.01;
}

function onMouseLeave(event) {
    event.target.style.opacity = 1;
}

var all = document.querySelectorAll("body > *");
for (let i = 0; i < all.length; i++) {
    var el = all[i];
    el.addEventListener("mouseover", onMouseOver);
    el.addEventListener("mouseleave", onMouseLeave);
}