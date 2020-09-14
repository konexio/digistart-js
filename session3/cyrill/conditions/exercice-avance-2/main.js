/* Exercice 2 - Indicateur de longueur d'un mot de passe */

// Instructions:
// Écrire le code pour changer la couleur de l'input en fonction de la
// longueur du mot de passe en utilisant des conditions (if) et des comparateurs (<, >...)

// Cette fonction est attachée à un événement "oninput" ça veut dire qu'elle
// est appelée à chaque fois que l'utilisateur tape dans la balise input
function passwordMeter(value) {

  // Dans cette variable, on stocke la longueur du mot de passe...
  // Le mot de passe est une string, ainsi on peut accéder à la propriété .length
  // pour en connaître la longueur.
  var passwordLength = value.length;

  // Cette partie du code te permets de voir la longueur du mot de passe saisi par l'utilisateur
  // va voir dans la console du navigateur
  console.log('longeur du mot de passe: ', passwordLength);

  // Pour changer la couleur de fond de l'input, utilise le code ci-dessous:
  // document.getElementById('password-input').style.backgroundColor = 'red';

  // Les règles sont les suivantes:
  // caractères |   couleur
  // 0 à 4      |   rouge
  // 4 à 8      |   orange
  // 8 à 20     |   vert

  /* MON CODE EN DESSOUS */


  /* MON CODE AU DESSUS */
}
