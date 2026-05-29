import data from './introToJSON.json' with { type: 'json' };

console.log(data);
console.log(data.example);
console.log(data.example.hobbies[0]);
console.log(data.example.address.street);
console.log(data['example']['address']['city']);
console.log(data["example"]["hobbies"][1]);
console.log(data["example"]["hobbies"]);