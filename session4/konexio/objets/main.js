/* LES OBJETS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les objets (objects)');

// ------ TODO 1 ------

// 1. Déclarer une variable student qui contient un objet avec les propriétés et valeurs suivantes :
// - name : Votre nom
// - age : Votre age
// - city: Votre ville

var student = {
  name: 'Jhon',
  age: 25,
  city: 'Paris',
}; 

// 2. Afficher dans la console l'objet student.


//console.log(student);

// ------ TODO 2 ------
var user = {
  name: 'John',
  age: 30,
//  city: "paris"
};

// 1. Ajouter une propriété (clé) "city" de valeur "Paris" à l'objet user.
console.log(user);
user["city"] = "Paris"; 

// 2. Afficher dans la console l'âge de John.

console.log(user);

// 3. Remplacer la valeur de "city" avec "Nice".
user.city = "Nice";
console.log(user);

// 4. Afficher dans la console un tableau des propriétés (clés) de l'objet user grâce à la méthode keys.
var keys = Object.keys(user);
console.log(keys.length);
console.log(keys);
keys.push("toto");
console.log(keys);


// ------ TODO 3 ------
var users = [user, { name: 'Emma', age: 32, city: 'London' }];

// 1. Afficher dans la console l'objet dont le name est "Emma".
console.log(users[0]);
console.log(users[1]);


// 2. Afficher dans la console "John", en accédant aux élements du tableau
// puis à la propriété de l'objet.

console.log(users[0].name);
console.log(users[0].age);
console.log(users[0].city);


// ------ TODO 4 ------
var car = {
  brand: 'Ford',
  speed: 100,
  drive : function() {
    console.log("Vroom");
    console.log("TOTO");
  },
};

// 1. Ajouter une méthode "drive" à l'objet car qui affiche dans la console "Vroom !".



// 2. Appeller la méthode drive à partir de l'objet car.

car.drive();


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

// 1. Changer la propriété read du livre de Steve Jobs à true.

library[1].read = true;

// 2. Ajouter un nouvel objet correspondant à un livre dans le tableau en suivant le même format.
library.push({author: 'toto',  title: 'titi', read: true});

console.log(library);

// 3. Supprimer le livre de Suzanne Collins du tableau.

library.splice(2, 1);
console.log(library);

