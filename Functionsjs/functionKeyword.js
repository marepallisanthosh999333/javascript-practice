function greet(){
    console.log("Hello, World!");
}

greet(); // Output: Hello, World!

function greet2(name = "Guest"){
    console.log(`Hello ${name}!`);
}

greet2("Alice"); // Output: Hello Alice!
greet2(); // Output: Hello Guest!

function add(A, B){
    return A + B;
}

let sum = add(5, 10);
console.log(sum); // Output: 15

function UndefinedOutput(){
    console.log("This function does not return anything.");
}

let result = UndefinedOutput();
console.log(result); // Output: undefined

const unnamedFunction = function (A, B){
    return A + B;
};

let sum2 = unnamedFunction(3, 7);
console.log(sum2); // Output: 10