// /* LES BOUCLES FOR */
// console.log('Bienvenue dans la console JavaScript');
// console.log('Vous êtes dans les exercices sur les boucles for');

// var nombres = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];
// // 11
// // 12

// // TODO: ÉTAPE 1
// // À l'aide d'une boucle for, afficher dans la console toutes les valeurs
// // contenues dans le tableau `nombres`, une par une.

// for (var i = 0; i < nombres.length; i++) {
//   console.log(nombres[i]);
// }

// // TODO: ÉTAPE 2
// // Avec une autre boucle for, afficher dans la console toutes les valeurs
// // du tableau `nombres`, une par une, sauf les deux premières.

// for (var i = 2; i < nombres.length; i++) {
//   console.log(nombres[i]);
// }

// // TODO: ÉTAPE 3
// // Avec une autre boucle for, afficher dans la console toutes les valeurs
// // du tableau `nombres`, une par une, sauf les trois dernières.

// // nombres.length === 12
// for (var i = 0; i < nombres.length - 3; i++) {
//   console.log(nombres[i]);
// }

// // TODO: ÉTAPE 4
// // Avec une autre boucle for, afficher dans la console toutes les valeurs
// // du tableau `nombres`, une par une, mais en commençant par la dernière
// // valeur et en terminant par la première.

// for (var i = nombres.length - 1; i >= 0; i = i - 1) {
//   console.log(nombres[i]);
// }

// // TODO: ÉTAPE 5
// // Avec une autre boucle for, afficher dans la console uniquement les
// // valeurs du tableau `nombres` ayant un indice pair (0, 2, 4, etc.),
// // une par une.

// for (var i = 0; i < nombres.length; i = i + 2) {
//   console.log(nombres[i]);
// }

// var prenoms = ['Ali', 'Nour', 'Jean', 'Carole', 'Ibrahim', 'Alma'];

// // TODO: ÉTAPE 6
// // À l'aide d'une boucle for, afficher dans la console des messages
// // qui saluent chaque prénom contenus dans le tableau `prenoms`.
// // Par exemple : "Bonjour Joseph".

// for (var i = 0; i < prenoms.length; i = i + 1) {
//   console.log('Bonjour ' + prenoms[i]);
// }

// // TODO: ÉTAPE 7
// // Avec une autre boucle for, afficher dans la console uniquement
// // le premier prénom contenant plus de 4 lettres.

// for (var i = 0; i < prenoms.length; i = i + 1) {
//   var prenom = prenoms[i];
//   if (prenom.length > 4) {
//     console.log(prenom);
//     i = prenoms.length;
//   }
// }

// // TODO: ÉTAPE 8
// // Avec une autre boucle for, construire une nouvelle chaîne de
// // caractères (string) qui contiendra tous les prénoms séparés par
// // une virgule. Afficher cette nouvelle chaîne de caractères dans
// // la console.
// var prenoms = ['Ali', 'Nour', 'Jean', 'Carole', 'Ibrahim', 'Alma'];

// var stringDePrenoms = '';
// // i = 0 => 'Ali' + ", " + "" => "Ali, "
// // i = 1 => 'Nour' + ", " + "Ali, " => "Nour, Ali,"
// // i = 2 =>  'Jean' + ", " + "Nour, Ali," => "Jean, "
// for (var i = 0; i < prenoms.length; i = i + 1) {
//   if (i === prenoms.length - 1) {
//     stringDePrenoms = stringDePrenoms + prenoms[i];
//   } else {
//     stringDePrenoms = stringDePrenoms + prenoms[i] + ', ';
//   }
// }
// console.log(stringDePrenoms);

// var a = [12, 47, 5, 450, 98, 100, 54, 2, 87, 9999];
// var b = [3, 76, 1002, 31, 9, 340, 420, 90, -12, 1];

// // TODO: ÉTAPE 9
// // À l'aide d'une boucle for, parcourir les deux tableaux `a` et `b`,
// // et pour chaque indice, placer la valeur la plus petite dans un
// // nouveau tableau.

// var petitTableau = [];
// var plusPetiteValeur = a[0];
// for (var i = 0; i < a.length || i < b.length; i++) {
//   var valeurA = a[i];
//   var valeurB = b[i];

//   if (valeurA < valeurB) {
//     petitTableau.push(valeurA);
//   } else if (valeurB < valeurA) {
//     petitTableau.push(valeurB);
//   }

//   if (valeurA < plusPetiteValeur) {
//     plusPetiteValeur = valeurA;
//   }

//   if (valeurB < plusPetiteValeur) {
//     plusPetiteValeur = valeurB;
//   }
// }
// console.log(petitTableau);
// // console.log(plusPetiteValeur);

// // TODO: ÉTAPE 10
// // Avec une autre boucle for, additionner les valeurs de `a` ayant un
// // indice pair avec les valeurs de `b` ayant l'indice impair suivant.
// // Placer ces résultats d'addition dans un nouveau tableau à afficher
// // dans la console.
// // Par exemple: a[0] + b[1], a[2] + b[3], etc.

// var resultatsAddition = [];
// for (var i = 0; i < a.length || i < b.length; i = i + 2) {
//   resultatsAddition.push(a[i] + b[i + 1]);
// }
// console.log(resultatsAddition);

// var document = 'hello';
// console.log(document);
