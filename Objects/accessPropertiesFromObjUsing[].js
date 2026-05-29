const bracketNotation = {
    name: "Salman",
    age: 21,
    city: "Switzerland"
}

// Accessing properties using bracket notation
console.log(bracketNotation["name"]);
console.log(bracketNotation["age"]);
console.log(bracketNotation["city"]);

// Accessing properties using dot notation
console.log(bracketNotation.name);
console.log(bracketNotation.age);
console.log(bracketNotation.city);

const oddObject = {
    "1stname": "accurrssedPrince",
    "2ndname": "Loki",
    "property with space": `This is a property with space`
}

console.log(oddObject["1stname"]);
console.log(oddObject["2ndname"]);
console.log(oddObject["property with space"]);

// The following will cause syntax errors because of invalid identifiers
// console.log(oddObject.1stname);
// console.log(oddObject.2ndname);
// console.log(oddObject.property with space);

const dynamicObject = {
    name: "Dynamic Object",
    age: 5
}

const propertyName = "name";
console.log(dynamicObject[propertyName]); // Output: Dynamic Object

const anotherProperty = "age";
console.log(dynamicObject[anotherProperty]); // Output: 5