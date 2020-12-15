/* LES ÉVÉNEMENTS */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 2 sur les événements");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button du HTML.

var monButton = document.getElementsByTagName('button');
console.log(monButton);

// ------ TODO 2 ------
// Créer la fonction qui sera appelée dans le TODO3.
// Elle devra afficher dans la console "Le bouton a été cliqué",
// ainsi qu'une alerte "Click !".
function buttonClique() {
  console.log('The button was already clicked');
  alert('clique');
}
// ------ TODO 3 ------
// Attacher un événement "click" sur le bouton, et appeler la fonction lors du clic.
monButton.addEventListener('click', buttonClique);
