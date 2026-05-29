// using delete operator to remove properties from an object

const exampleObj = {
    name: 'John',
    age: 30,
    city: 'New York'
};

delete exampleObj.age; // removes the 'age' property from exampleObj

console.log(exampleObj); // Output: { name: 'John', city: 'New York' }

const removePropertiedUsingDestructuring = {
    name: 'Khan',
    age: 25,
    job: 'Engineer',
    city: 'Pune'
}

const {age, city, ...restProperties} = removePropertiedUsingDestructuring;

console.log(restProperties); // Output: { name: 'Khan', job: 'Engineer' }

/**
 * In the above code, we have two methods to remove properties from an object. The first method uses the delete operator to remove a specific property from the object. The second method uses destructuring assignment to extract the properties we want to keep and create a new object with the remaining properties. Both methods effectively remove the specified properties from the original object.
 */