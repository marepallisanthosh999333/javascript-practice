const fruits = ["apple", "banana", "orange"];
let newFruits = fruits.push("grapes", "kiwi");
console.log(newFruits);
console.log(fruits);

let newFruits2 = fruits.unshift("mango", "papaya");
console.log(newFruits2);
console.log(fruits);

let removedFruit = fruits.pop();
console.log(removedFruit);
console.log(fruits);

let removedFruit2 = fruits.shift();
console.log(removedFruit2);
console.log(fruits);