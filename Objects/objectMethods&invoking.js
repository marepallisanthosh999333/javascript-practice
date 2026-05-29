/**
 * in this program we will learn about object methods and invoking them
 * we will also learn about the this keyword and how it works in object methods
 */

const person = {
    name : "Jhoen",
    age : 30,
    sayHello : function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

console.log(person.sayHello());


const person2 = (name, age) => {
    return `Hello, my name is ${name} and I am ${age} years old.`;
};

console.log(person2("khangaru", 21));

/**
 * we have seen the difference between fucntion calling and object method calling
 * in function calling, we call the function directly and it does not have access to the properties of the object
 * in object method calling, we call the method using the object and it has access to the properties of the object using the this keyword
 */