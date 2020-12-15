/* LE DOM */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 1 sur le DOM");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button ayant l'id "myButton" du HTML.
var monButton = document.getElementById('myButton'); //parfait ;)
console.log('myButton'); // ici tu dois faire un console.log de la VARIABLE pas de la string 'myButton'
// ------ TODO 2 ------// c'est deja fait
// Modifier le texte de l'élément button grâce à sa propriété innerHTML.
monButton.innerHTML = 'Digistart';

// ------ TODO 3 ------
// Créez une variable récupérant tous les éléments de type paragraphe.
var paragraphe = document.getElementsByTagName('p');
console.log(paragraphe);

// ------ TODO 4 ------
// Créez une variable récupérant le paragraphe avec la classe "blue".
var pBlue = document.getElementsByClassName('blue')[0];
console.log(pBlue);

// ------ TODO 5 ------
// Créez une variable récupérant le paragraphe avec l'id "hideMe".

// ------ TODO 6 ------
// Modifiez le style du paragraphe avec l'id "hideMe" pour le faire disparaître.
