/* Exercice 3 - Le Juste Prix du Mercato */

// Ceci est le prix du rachat du joueur que nous générons aléatoirement lors du chargement
// de la page, c'est un chiffre compris entre 0 et 100
var random = Math.random(0, 1) * 100;
var price = Math.floor(random);

// Cette ligne permet d'afficher dans la console le prix que l'utilisateur doit trouver
console.log('l\'utilisateur doit trouver', price);

// Dans ce tableau on pourra ranger les prix qui ont été proposés par l'utilisateur
var prices = [];

// Cette fonction permet de voir ce que l'utilisateur a saisi dans le champ input
// elle est appelée sur l'événement 'submit' c'est à dire, dès que l'utilisateur valide
// le formulaire.

function logPrice(value) {
  console.log('l\'utilisateur a saisi', value);
}

function submitAnswer() {
  // Ici on récupère la valeur du prix saisi par l'utilisateur
  var value = document.getElementById('price').value;
  console.log('value ', value);

  // Instructions:
  // Écrire le code, pour comparer la valeur saisie par l'utilisateur à la valeur
  // du prix à trouver et renvoyer un message pour dire si c'est plus,
  // si c'est moins ou si l'utilisateur a trouvé !


  /* MON CODE EN DESSOUS */


  /* MON CODE AU DESSUS */

  // Ceci vide le champ input
  document.getElementById("price").value = "";

  // BONUS:
  // Ajouter les prix saisis par l'utilisateur pour pouvoir les afficher en dessous
  // afin qu'il sache quels prix il a déjà essayé
}
