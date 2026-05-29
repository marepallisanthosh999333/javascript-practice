//syntax is array.splice(start, deleteCount, item1, item2, ...)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let removed1 = fruits.splice(2, 1); // removes 1 element at index 2
console.log(removed1); // Output: ["Apple"]
console.log(fruits); // Output: ["Banana", "Orange", "Mango"]

// add elements to middle of array
let added1 = fruits.splice(1, 0, "Lemon", "Kiwi"); // adds elements at index 2 without removing any
console.log(added1); // Output: []
console.log(fruits); // Output: ["Banana", "Lemon", "Kiwi", "Orange", "Mango"]

// creating copy of an array as splice modifies the original array
const original = ["Banana", "Orange", "Apple", "Mango"];
const copy = [...original]; // using spread operator to create a copy of the original array

// common use case of splice is when you know index of the element to be removed
let index = copy.indexOf("Apple"); // find index of "Apple"
if (index !== -1) {
  copy.splice(index, 1); // remove "Apple" from the copy array
}
console.log(copy); // Output: ["Banana", "Orange", "Mango"]

// using splice to replace elements
let replaced = copy.splice(1, 1, "Grapes"); // replaces 1 element at index 1 with "Grapes"
console.log(replaced); // Output: ["Orange"]
console.log(copy); // Output: ["Banana", "Grapes", "Mango"]

// using splice to remove elements from the end of the array
let removed2 = copy.splice(-1, 1); // removes 1 element from the end of the array
console.log(removed2); // Output: ["Mango"]
console.log(copy); // Output: ["Banana", "Grapes"]

//using splice to add elements to the end of the array
copy.splice(copy.length, 0, "Pineapple", "Strawberry"); // adds elements at the end of the array
console.log(copy); // Output: ["Banana", "Grapes", "Pineapple", "Strawberry"]   

//using splice to remove all elements from the array
copy.splice(0, copy.length); // removes all elements from the array
console.log(copy); // Output: []