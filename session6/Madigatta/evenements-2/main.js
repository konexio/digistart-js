/* LES ÉVÉNEMENTS */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 2 sur les événements");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button du HTML.

var monButton = document.getElementsByTagName('button')[0];
console.log(monButton);

// ------ TODO 2 ------
// Créer la fonction qui sera appelée dans le TODO3.
// Elle devra afficher dans la console "Le bouton a été cliqué",
// ainsi qu'une alerte "Click !".
function Button() {
  console.log('Le bouton a été cliqué');
  alert('Click  !');
}
function monButton(params) {}
monButton.addEventListener('click', Button);
