const fruits = ['apple', 'banana', 'orange'];
let [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1); // Output: apple
console.log(fruit2); // Output: banana
console.log(fruit3); // Output: orange

// Skipping elements
let [firstFruit, , thirdFruit] = fruits;
console.log(firstFruit); // Output: apple
console.log(thirdFruit); // Output: orange

// Using rest operator to collect remaining elements
let [first, ...restFruits] = fruits;
console.log(first); // Output: apple
console.log(restFruits); // Output: ['banana', 'orange']

// Default values
let [fruitA, fruitB, fruitC, fruitD = 'grape'] = fruits;
console.log(fruitA); // Output: apple
console.log(fruitB); // Output: banana
console.log(fruitC); // Output: orange
console.log(fruitD); // Output: grape (default value)