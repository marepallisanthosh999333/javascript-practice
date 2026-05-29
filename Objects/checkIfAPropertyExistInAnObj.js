/**
 * in this example we will check if a property exist in an object or not
 * we will use the in operator to check if the property exist in the object
 * the in operator returns true if the property exist in the object and false if it does not exist
 * we can also use the hasOwnProperty() method to check if the property exist in the object
 * the hasOwnProperty() method returns true if the property exist in the object and false if it does not exist
 * the hasOwnProperty() method does not check for properties in the prototype chain
 * the in operator checks for properties in the prototype chain
 * we can also use the Object.hasOwn() method to check if the property exist in the object
 * the Object.hasOwn() method returns true if the property exist in the object and false if it does not exist
 * the Object.hasOwn() method does not check for properties in the prototype chain
 * the Object.hasOwn() method is a static method of the Object class
 * the Object.hasOwn() method is available in ES2022 and later versions
 * the Object.hasOwn() method is not supported in older browsers
 * the Object.hasOwn() method is a more concise way to check if a property exist in an object
 * the Object.hasOwn() method is a more efficient way to check if a property exist in an object
 * the Object.hasOwn() method is a more modern way to check if a property exist in an object
 * the Object.hasOwn() method is recommended to use over the hasOwnProperty() method
 * the Object.hasOwn() method is recommended to use over the in operator
 * the Object.hasOwn() method is recommended to use over the hasOwnProperty() method because it is more concise and efficient
 * the Object.hasOwn() method is recommended to use over the in operator because it does not check for properties in the prototype chain
 * the Object.hasOwn() method is recommended to use over the hasOwnProperty() method because it does not check for properties in the prototype chain
 */

const object1 = {
    name: "khan",
    age: 21,
    city: "jammalamadugu",
    phno: 1234567890
}

console.log(object1.hasOwnProperty("name")); // true
console.log(object1.hasOwnProperty("age")); // true
console.log(object1.hasOwnProperty("city")); // true
console.log(object1.hasOwnProperty("phno")); // true
console.log(object1.hasOwnProperty("country")); // false

console.log(Object.hasOwn(object1, "name")); // true
console.log(Object.hasOwn(object1, "age")); // true
console.log(Object.hasOwn(object1, "city")); // true
console.log(Object.hasOwn(object1, "phno")); // true
console.log(Object.hasOwn(object1, "country")); // false

console.log("name" in object1); // true
console.log("age" in object1); // true
console.log("city" in object1); // true
console.log("phno" in object1); // true
console.log("country" in object1); // false

console.log("name" !== undefined); // true
console.log("age" !== undefined); // true
console.log("city" !== undefined); // true
console.log("phno" !== undefined); // true
console.log("country" !== undefined); // false

console.log(object1.name !== undefined); // true
console.log(object1.age !== undefined); // true
console.log(object1.city !== undefined); // true
console.log(object1.phno !== undefined); // true
console.log(object1.country !== undefined); // false

console.log(object1);