/**
 * in this program we use json.parse() and json.stringify() methods to convert a JavaScript object into a JSON string and vice versa.
 * JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
 * The JSON.stringify() method converts a JavaScript object or value to a JSON string, while the JSON.parse() method parses a JSON string and returns the corresponding JavaScript object.
 */

const user = {
    name : "Khan",
    age : 21,
    job : "Software Engineer"
}

const userObjToJSONString = JSON.stringify(user);
console.log(userObjToJSONString); // Output: {"name":"Khan","age":21,"job":"Software Engineer"}

const jsonStringToUserObj = JSON.parse(userObjToJSONString);
console.log(jsonStringToUserObj); // Output: { name: 'Khan', age: 21, job: 'Software Engineer' }

/**
 * the json.stringify() method can also take a second argument, which is a replacer function that can be used to filter or modify the properties of the object being stringified.
 * the json.parse() method can also take a second argument, which is a reviver function that can be used to transform the values of the parsed object.
 * the JSON.stringify() method can also take a third argument, which is a space value that can be used to add indentation and line breaks to the resulting JSON string for better readability.
 */

const user2 = {
    name : "Alice",
    age : 30,
    job : "Data Scientist"
}

const user2JSONString = JSON.stringify(user2, ["name", "age"], 2); // Only include the "name" and "age" properties
console.log(user2JSONString); // Output: {"name":"Alice","age":30}
console.log(JSON.stringify(user2, null, 2)); // Output: {
                                                //   "name": "Alice",
                                                //   "age": 30,
                                                //   "job": "Data Scientist"
                                                // }
console.log(user2JSONString); // Output: {
                                                        //   "name": "Alice",           
                                                        //   "age": 30
                                                        // }
