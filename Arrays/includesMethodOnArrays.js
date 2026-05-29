// using includes() method to check if an array contains a specific element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Apple")); // Output: true
console.log(fruits.includes("Grapes")); // Output: false

// includes() method is case-sensitive
console.log(fruits.includes("apple")); // Output: false

// using includes() method with an array of numbers
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // Output: true
console.log(numbers.includes(6)); // Output: false

// using includes() method by specifying a starting index
console.log(fruits.includes("Apple", 2)); // Output: true (starts searching from index 2)
console.log(fruits.includes("Apple", 3)); // Output: false (starts searching from index 3)

// includes() method uses strict equality (===) for comparison
const mixedArray = [1, "1", true, false];
console.log(mixedArray.includes(1)); // Output: true
console.log(mixedArray.includes("1")); // Output: true
console.log(mixedArray.includes(true)); // Output: true
console.log(mixedArray.includes(false)); // Output: true
console.log(mixedArray.includes(0)); // Output: false
console.log(mixedArray.includes("true")); // Output: false