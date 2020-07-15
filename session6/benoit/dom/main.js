/* LE DOM */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 1 sur le DOM");

var buttonElement = document.getElementById("myButton");

console.log (buttonElement);
// ------ TODO 2 ------
// Modifier le texte de l'élément button grâce à sa propriété innerHTML.

buttonElement.innerHTML = "Bonjour Mister";


// ------ TODO 3 ------
// Créez une variable récupérant tous les éléments de type paragraphe.

var paragraphe = document.getElementsByTagName ("p");

console.log (paragraphe)

// ------ TODO 4 ------
// Créez une variable récupérant le paragraphe avec la classe "blue".

var paragrapheBlue = document.getElementsByClassName("blue");

var pBlue = paragrapheBlue[0];

pBlue.style.color = "red";

console.log (paragrapheBlue);

// ------ TODO 5 ------
// Créez une variable récupérant le paragraphe avec l'id "hideMe".

var paragrapheHideMe = document.getElementById("hideMe");

console.log(paragrapheHideMe);
// ------ TODO 6 ------
// Modifiez le style du paragraphe avec l'id "hideMe" pour le faire disparaître.


document.getElementById("hideMe").style.display = "none";