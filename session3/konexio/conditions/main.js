/* LES CONDITIONS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les conditions');

// ------ TODO 1 ------


// 3. les en utilisant une condition (if) et des comparateurs (===, !==) :
// - si la variable est égale à "rouge", affichez "fraise" dans la console
// - si la variable est égale à "green", affichez "pomme" dans la console

function printFruitOfColor(color) {
    if (color === "rouge") {
        console.log("fraise");
    } else if (color === 'green'){
        console.log('pomme');
    } else {
        console.log('autre fruit');
    }
}


printColor("rouge");
printColor("green");
printColor("bleu");