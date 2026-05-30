/**
 * in this program we learn about object destructuring and short hand notation that helps a lot when we try to access mutliple values from an object at a single time and assign them to variables.
 */

const person1 = {
	name : "Salman Khan",
	age : "21",
	job : "Software Engineer",
	eduction : "Graduation"
}

let { name , age } = person1; //accessing multiple objects using object destructuring and assiging them to same variable names the key name from person object
console.log(name);
console.log(age);

// another feature of object destructuring is we can assign different names if out code has same variable names else where or you simply assign another name different from key names from the object we are referring

const person2 = {
	name : "Roman Reigns",
	age : 33,
	job : "Fighter",
	education : "Post Graduatuation in fking university"
}

let { name : person2Name, age : person2Age } = person2;

console.log(person2Name);
console.log(person2Age);

// also another feature of object destructuring is we can assign default values if a property does not exist preventing errors and make our code much more robust & clean.

const person3 = {...person2};

let { name : person3Name, age : person3Age, person3Country = "Unknown"} = person3;
console.log(person3Country);

// now we look how to destructure and access nested objects and assign them to variables

const person4 = {
	name : "Rock",
	age : 70,
	job : "Software Engineer",
	profile : {
		emain : "rock@gmail.com",
		phoneNo : {
			home : "123",
			work : "456"
		},
		address : {
			street : "Dwyane street",
			hNo : "3-116",
			city : "New York",
			zipCode : 521189,
			country : "Africa"
		}
	}
}

let { profile : { address : { country : person4Country}}} = person4;
console.log(person4Country);

// now let's know about shortHand Notation in object notation where we can create objects especially if the variable names and object property names are matched we can use the shorthand notation

let person5Name = "kali";
let person5Age = 28;

const person5 = {person5Name, person5Age};

console.log(person5);
console.log(JSON.stringify(person5, null, 2));

// shortHand Notation is useful especially when we are returning functions when called and when we want to pass multiple properties dynamically

const shortHandNotation = (name, age, job) => {
	return JSON.stringify({name, age, job}, null, 2);
}

console.log(shortHandNotation("Charlie", 30, "Software Engineer"));
