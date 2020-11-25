/* LES MÉTHODES */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les méthodes');

// ------ TODO 1 ------
// TODO: ÉTAPE 1
// Écrire une variable du nom de votre choix, et de valeur de type String.
var nom = 'Doucoure';

// TODO: ÉTAPE 2
// Afficher sa longueur dans la console grâce à la propriété "length".

//
console.log(nom.length);

// ------ TODO 2 ------
// TODO: ÉTAPE 1
// Ajouter un espace au début ou à la fin de votre string.
nom = nom + ' '; //<- quand tu réaffecte une valeur à une variable il ne faut pas remettere var
// exemple :
// var unPrenom = 'Didier';
// unPrenom = 'Madigatta'; j'ai tjrs du mal à comprendre de quoi vous voulez dire
// normal, tu demandes à Charles ;) ah j'ai compris merci

// TODO: ÉTAPE 2
// Afficher sa longueur dans la console, et observez la différence.
console.log(nom.length); // <- parfait  MERCI

// ------ TODO 3 ------
// TODO: ÉTAPE 1
// Écrire une nouvelle variable du nom de votre choix, et de valeur de type String.
var prenom = 'saly';

// TODO: ÉTAPE 2
// Afficher dans la console sa valeur en MAJUSCULES grâce à la méthode "toUpperCase".
console.log(prenom.toUpperCase);

// ------ TODO 4 ------
// TODO: ÉTAPE 1
// Créer une fonction convertToUppercase qui prend en paramètre une chaîne
// de caractères et qui la renvoie en majuscule grâce à la méthode "toUpperCase".
function enMajuscule(string) {
  return string.toUpperCase();
}

// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.
var resultat = enMajuscule('Doucoure');
console.log(resultat);
