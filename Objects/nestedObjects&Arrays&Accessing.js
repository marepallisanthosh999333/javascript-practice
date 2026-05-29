/**
 * in this file we will learn about nested objects and arrays and how to access them
 * we will also learn about the dot notation and the bracket notation to access the properties of an object
 * we will also learn about the array indexing to access the elements of an array
 */

const basicNestedObject = {
    name: "khan",
    age: 21,
    job: "Liteuntant",
    contact: {
        email: "khan@example.com",
        phone: {
            home: "123-456-7890",
            work: "987-654-3210"
        }
    }
};

// accessing nested objects using dot notation
console.log(basicNestedObject.name); // Output: khan
console.log(basicNestedObject.contact.email); // Output: khan@example.com
console.log(basicNestedObject.contact.phone.home); // Output: 123-456-7890
console.log(basicNestedObject.contact.phone.work); // Output: 987-654-3210

// accessing nested objects using bracket notation
console.log(basicNestedObject["name"]); // Output: khan
console.log(basicNestedObject["contact"]["email"]); // Output: khan@example.com
console.log(basicNestedObject["contact"]["phone"]["home"]); // Output: 123-456-7890
console.log(basicNestedObject["contact"]["phone"]["work"]); // Output: 987-654-3210

const nestedObject = {
    name: "Salman",
    age: 30,
    job: "Software Engineer",
    addresses: [
        {
            street: "chikkadapally, Hyderabad",
            city: "Hyderabad",
            state: "Telangana",
            country: "India"
        },
        {
            street: "MG Road, Bangalore",
            city: "Bangalore",
            state: "Karnataka",
            country: "India"
        }
    ]
};

console.log(nestedObject.name);
console.log(nestedObject.job);
console.log(nestedObject.addresses[0].street);
console.log(nestedObject.addresses[0].city);
console.log(nestedObject.addresses[0].state);
console.log(nestedObject.addresses[0].country);
console.log(nestedObject.addresses[1].street);
console.log(nestedObject.addresses[1].city);
console.log(nestedObject.addresses[1].state);
console.log(nestedObject.addresses[1].country);

console.log(nestedObject["name"]);
console.log(nestedObject["job"]);
console.log(nestedObject["addresses"][0]["street"]);
console.log(nestedObject["addresses"][0]["city"]);
console.log(nestedObject["addresses"][0]["state"]);
console.log(nestedObject["addresses"][0]["country"]);
console.log(nestedObject["addresses"][1]["street"]);
console.log(nestedObject["addresses"][1]["city"]);
console.log(nestedObject["addresses"][1]["state"]);
console.log(nestedObject["addresses"][1]["country"]);
