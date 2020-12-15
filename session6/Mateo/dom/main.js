/* LE DOM */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 1 sur le DOM");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button ayant l'id "myButton" du HTML.
var buttonHello = document.getElementById('myButton');
console.log(buttonHello);
// ------ TODO 2 ------
// Modifier le texte de l'élément button grâce à sa propriété innerHTML.

buttonHello.innerHTML = 'JOJO';

// ------ TODO 3 ------
// Créez une variable récupérant tous les éléments de type paragraphe.
var toutLesP = document.getElementsByTagName('p');
console.log(toutLesP);

// ------ TODO 4 ------
// Créez une variable récupérant le paragraphe avec la classe "blue".
var lesPBleus = document.getElementsByClassName('blue');
console.log(lesPBleus);
// ------ TODO 5 ------
// Créez une variable récupérant le paragraphe avec l'id "hideMe".
var paragraphHideMe = document.getElementById('hideMe');
console.log(paragraphHideMe);
// ------ TODO 6 ------
// Modifiez le style du paragraphe avec l'id "hideMe" pour le faire disparaître.
paragraphHideMe.style.display = 'none';
console.log(paragraphHideMe);
