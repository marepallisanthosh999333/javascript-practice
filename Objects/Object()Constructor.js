/**
 * in this program we use Object() constructor to create an empty object and then we add properties to it.
 * The Object() constructor is a built-in function in JavaScript that creates an object wrapper for the given value. If no value is provided, it creates an empty object. In this example, we create an empty object and then add properties to it using dot notation.
 * we use new keyword and without new keyword both to create an object using Object() constructor. Both ways will create an empty object, but using new keyword is the recommended way to create an object in JavaScript.
 * the difference between using new keyword and without new keyword is that when we use new keyword, it creates a new instance of the Object constructor, while without new keyword, it simply calls the Object function and returns an object. However, in this case, both ways will create an empty object and we can add properties to it as needed.
 * as the Object() constructor is merely used nowadays which is replace by literal syntax, it is still important to understand how it works and how to use it when necessary. The Object() constructor can be useful in certain situations, such as when you need to create an object with a specific prototype or when you want to create an object that inherits from another object.
 */

// Using Object() constructor with new keyword
const person1 = new Object();
person1.name = "Alice";
person1.age = 30;
console.log(person1); // Output: { name: 'Alice', age: 30 }

// Using Object() constructor without new keyword
const person2 = Object();
person2.name = "Bob";
person2.age = 25;
console.log(person2); // Output: { name: 'Bob', age: 25 }

const num = 42;
const numObject = Object(num);
console.log(numObject); // Output: [Number: 42]
console.log(typeof numObject); // Output: 'object'

const newObject = new Object(undefined);
console.log(newObject); // Output: {}
console.log(typeof newObject); // Output: 'object'

const nullObject = Object(null);
console.log(nullObject); // Output: {}
console.log(typeof nullObject); // Output: 'object'

// another use case of using Object() constructor is that when to don't know the type of data but you want to ensure that the data should be in object form, you can use Object() constructor to convert the data into an object. For example, if you have a variable that can be either a string or an object, you can use Object() constructor to ensure that it is always treated as an object.

const toObject = (data) => {
    if(data === null || data === undefined) {
        return {};
    }

    if (typeof data === 'object') {
        return data;
    }

    return Object(data);
}

console.log(toObject(null)); // Output: {}
console.log(toObject(undefined)); // Output: {}
console.log(toObject("Hello")); // Output: [String: 'Hello']
console.log(toObject({ name: "Alice" })); // Output: { name: 'Alice' }
console.log(toObject(42)); // Output: [Number: 42]
console.log(toObject([1, 2, 3])); // Output: [1, 2, 3]