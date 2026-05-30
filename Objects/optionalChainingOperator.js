/**
 * in this program we use optional chanining operator (?.) to access the properties of an object that may be null or undefined.
 * it allows us to safely access the properties of an object without having to check if the object is null or undefined.
 * if the object is null or undefined, the expression will return undefined instead of throwing an error.
 * this is useful when we are working with nested objects or when we are not sure if an object will be defined or not.
 * it helps to prevent runtime errors and makes our code more robust and easier to read.
 */

const person = {
    name : "Jhon Cena",
    age : 45,
    job : "Wrestler"
}

console.log(person?.name); // Output: Jhon Cena
console.log(person?.age); // Output: 45
console.log(person?.job); // Output: Wrestler
console.log(person?.address); // Output: undefined

// In the above code, we are using the optional chaining operator (?.) to access the properties of the person object. 
// If we try to access a property that does not exist (like address), it will return undefined instead of throwing an error.

const person2 = {
    name : "Roman Reigns",
    age : 36,
    job : "Wrestler",
    profile : {
        email : "roman.reigns@example.com",
        phone : {
            home : "123-456-7890",
            work : "098-765-4321"
        },
        address : {
            city : "Miami",
            state : "Florida",
            houseNo : null
        }
    }
}

console.log(person2?.profile?.email); // Output: roman.reigns@example.com
console.log(person2?.profile?.phone?.home); // Output: 123-456-7890
console.log(person2?.profile?.address?.city); // Output: Miami
console.log(person2?.profile?.address?.houseNo); // Output: null
console.log(person2?.profile?.address?.zipCode); // Output: undefined

// In the above code, we are using the optional chaining operator (?.) to access the nested properties of the person2 object. 
// If we try to access a property that does not exist (like zipCode), it will return undefined instead of throwing an error. 
// If we try to access a property that exists but has a value of null (like houseNo), it will return null.

// scenario if we do not use optional chaining operator (?.) and try to access a property that does not exist, it will throw an error.

// console.log(person2.profile.address.zipCode); // Output: TypeError: Cannot read property 'zipCode' of undefined