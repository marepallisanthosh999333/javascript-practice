const questions = [{category: "GK",
question: "Who is PM of India?",
choices: ["Modi", "Rahul", "Tillu"],
answer: "Modi"}, {category: "Gk",
question: "Who is president of india?",
choices: ["mukesh", "killu", "khan"],
answer: "khan"}, {category: "GK",
question: "Hero of DJTillu?",
choices: ["dhoni", "virat", "bhumrah"],
answer: "dhoni"}, {category: "Gk",
question: "RCb captain?",
choices: ["hardik", "rinku", "bolt"],
answer: "bolt"}, {category: "Gk",
question: "IPL 2025 winner?",
choices: ["rcb", "csk", "mi"],
answer: "rcb"}];

//console.log(questions);
//console.log(questions[0].question);
function getRandomQuestion(array) {
  let randomQuestion = array[Math.floor(Math.random() * array.length)];
  return randomQuestion; 
}

//console.log(getRandomQuestion(questions));

function getRandomComputerChoice( arrayOfChoices ) {
    let randomChoice = arrayOfChoices[Math.floor(Math.random() * arrayOfChoices.length)];
  
    return randomChoice; 
}

//console.log(getRandomComputerChoice(questions));

function getResults(questionObj, computerChoice) {
  // We use strict equality (===) to compare the string choice against the string answer
  if (computerChoice === questionObj.answer) {
      return "The computer's choice is correct!";
  } else {
      // We extract the specific answer property for the string interpolation
      return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}

// 1. Get a random question object
let currentQuestion = getRandomQuestion(questions);
console.log(currentQuestion);

// 2. Get a random choice from THAT specific question's choices array
let compChoice = getRandomComputerChoice(currentQuestion.choices);
console.log(compChoice);

// 3. Pass both specific pieces of data into your results function
console.log(getResults(currentQuestion, compChoice));