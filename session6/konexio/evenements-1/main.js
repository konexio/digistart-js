/* LES ÉVÉNEMENTS */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 1 sur les événements");

// ------ TODO 1 ------
// Créer la fonction appelée par le bouton que vous avez créé dans le HTML.
// Elle devra afficher une alerte avec le texte "Vous avez cliqué sur le bouton !"
var button = document.getElementById("monBoutton");
button.addEventListener("click", testButton);

window.addEventListener("keydown", key_down);
window.addEventListener("resize", resizeWindow);

function testButton() {
    alert("Vous avez cliqué sur le bouton !");
}


function key_down() {
    alert("Arrêtez d'appuyer sur une touche")
}

function resizeWindow() {
    console.log(window.innerWidth);
}