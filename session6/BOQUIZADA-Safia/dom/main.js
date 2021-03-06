/* LE DOM */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 1 sur le DOM");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button ayant l'id "myButton" du HTML.

var button = document.getElementById("myButton")


// ------ TODO 2 ------
// Modifier le texte de l'élément button grâce à sa propriété innerHTML.
button.innerHTML = "Hi everyone"



// ------ TODO 3 ------
// Créez une variable récupérant tous les éléments de type paragraphe.
// p est un tag et pas un ID. Il faut utiliser document.getElementsByTagName
// Et la variable ne peut pas s'appeler document car ça existe déjà :)
var paragraphe = document.getElementsByTagName("p")




// ------ TODO 4 ------
// Créez une variable récupérant le paragraphe avec la classe "blue".

var color = getElementByClass("blue")


// ------ TODO 5 ------
// Créez une variable récupérant le paragraphe avec l'id "hideMe".




// ------ TODO 6 ------
// Modifiez le style du paragraphe avec l'id "hideMe" pour le faire disparaître.


