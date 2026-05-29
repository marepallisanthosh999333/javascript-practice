/**
 * objectSyntax.js
 * @description - This file contains the syntax for creating objects in JavaScript.
 * It includes examples of object literals, constructors, and classes.
 * The syntax is explained with comments for better understanding.
 */
// Object Literal Syntax
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Accessing object properties and methods
console.log(person.name); // Output: John
person.greet(); // Output: Hello, my name is John