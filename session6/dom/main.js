/* LE DOM */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 1 sur le DOM");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button ayant l'id "myButton" du HTML.
var monButton = document.getElementById('myButton');
console.log(monButton);

// ------ TODO 2 ------
// Modifier le texte de l'élément button grâce à sa propriété innerHTML.
monButton.innerHTML = 'toto';

// ------ TODO 3 ------
// Créez une variable récupérant tous les éléments de type paragraphe.
var tousLesP = document.getElementsByTagName('p');
console.log(tousLesP);
// ------ TODO 4 ------
// Créez une variable récupérant le paragraphe avec la classe "blue".
var pBleue = document.getElementsByClassName('blue')[0];
console.log(pBleue);
// ------ TODO 5 ------
// Créez une variable récupérant le paragraphe avec l'id "hideMe".

var hideMe = document.getElementById('hideMe');
console.log(hideMe);

// ------ TODO 6 ------
// Modifiez le style du paragraphe avec l'id "hideMe" pour le faire disparaître.
hideMe.style.display = 'none';
