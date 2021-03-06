/* LES OBJETS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les objets (objects)');

// ------ TODO 1 ------

// 1. Déclarer une variable student qui contient un objet avec les propriétés et valeurs suivantes :
// - name : Votre nom
// - age : Votre age
// - city: Votre ville



// 2. Afficher dans la console l'objet student.




// ------ TODO 2 ------
var user = {
  name: 'John',
  age: 30
};

// 1. Ajouter une propriété (clé) "city" de valeur "Paris" à l'objet user.



// 2. Afficher dans la console l'âge de John.



// 3. Remplacer la valeur de "city" avec "Nice".



// 4. Afficher dans la console un tableau des propriétés (clés) de l'objet user grâce à la méthode keys.




// ------ TODO 3 ------
var users = [user, { name: 'Emma', age: 32, city: 'London' }];

// 1. Afficher dans la console l'objet dont le name est "Emma".



// 2. Afficher dans la console "John", en accédant aux élements du tableau
// puis à la propriété de l'objet.




// ------ TODO 4 ------
var car = {
  brand: 'Ford',
  speed: 100
};

// 1. Ajouter une méthode "drive" à l'objet car qui affiche dans la console "Vroom !".



// 2. Appeller la méthode drive à partir de l'objet car.




// ------ TODO 5 ------
var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    read: true
  },
  {
    author: 'Walter Isaacson',
    title: 'Steve Jobs',
    read: false
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    read: false
}];

// 1. Changer la propriété read du livre titré 'Steve Jobs' à true.



// 2. Ajouter un nouvel objet correspondant à un livre dans le tableau en suivant le même format.



// 3. Supprimer le livre de Suzanne Collins du tableau.



