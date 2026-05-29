// we use concat(), slice(), or the spread operator to create shallow copies of arrays in JavaScript. These methods do not modify the original array and return a new array instead.

// using concat() method to create a shallow copy of an array
const original = ["Banana", "Orange", "Apple", "Mango"];
const copy1 = original.concat(); // creates a shallow copy of the original array
console.log(copy1); // Output: ["Banana", "Orange", "Apple", "Mango"]
console.log(original === copy1); // Output: false (original and copy1 are different arrays)

// using slice() method to create a shallow copy of an array
const copy2 = original.slice(); // creates a shallow copy of the original array
console.log(copy2); // Output: ["Banana", "Orange", "Apple", "Mango"]
console.log(original === copy2); // Output: false (original and copy2 are different arrays)

// using spread operator to create a shallow copy of an array
const copy3 = [...original]; // creates a shallow copy of the original array
console.log(copy3); // Output: ["Banana", "Orange", "Apple", "Mango"]
console.log(original === copy3); // Output: false (original and copy3 are different arrays)

// modifying the copied arrays does not affect the original array
copy1.push("Pineapple");
console.log(copy1); // Output: ["Banana", "Orange", "Apple", "Mango", "Pineapple"]
console.log(original); // Output: ["Banana", "Orange", "Apple", "Mango"] (original array remains unchanged)

copy2.pop();
console.log(copy2); // Output: ["Banana", "Orange", "Apple"] (last element removed)
console.log(original); // Output: ["Banana", "Orange", "Apple", "Mango"] (original array remains unchanged)

copy3[0] = "Grapes";
console.log(copy3); // Output: ["Grapes", "Orange", "Apple", "Mango"] (first element modified)
console.log(original); // Output: ["Banana", "Orange", "Apple", "Mango"] (original array remains unchanged)