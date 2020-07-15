
var button = document.getElementById("Button");



// ------ TODO 2 ------
// Créer la fonction qui sera appelée dans le TODO3.
// Elle devra afficher dans la console "Le bouton a été cliqué",
// ainsi qu'une alerte "Click !".

function buttonClicked(){

    console.log("Le bouton a été cliqué");
    alert("click");
    }


// ------ TODO 3 ------
// Attacher un événement "click" sur le bouton, et appeler la fonction lors du clic.

button.addEventListener("click", buttonClicked);

