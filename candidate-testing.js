const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = [];
let correctAnswer = 0;
let candidateAnswer = "";
let questions = ["Who was the First American Woman in space? ", "True Or false: 5 kilometers == 5000 meters? ", "(5+3)/2*10=? ", "Given the array: [8, 'orbit', 'trojectory', 45] What entry is at index 2? ", "What is the minimum crew size for ISS? "];
let correctAnswers = ["sally ride", "true", "40", "trojectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name

let candidateName = input.question("What is your Name? "); // getting the customers input for their name
console.log("Welcome " + candidateName); 
}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer
for(let i = 0; i < questions.length; i++){
   candidateAnswer = input.question(questions[i]); //loop that calls the array to ask every question on the quiz and preserving their answers in an answer array.
   candidateAnswers.push(candidateAnswer);
  }
  return candidateAnswers;
}
function gradeQuiz(candidateAnswers) {
//   // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
for(let i = 0; i < correctAnswers.length; i ++){
if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){ //comparing customers answers to actual answers to determine if they are correct or wrong.
 correctAnswer +=1;
  console.log("This is correct!");
}
else{
  console.log("This is not correct " + candidateAnswers[i]);
  console.log(" The correct answer is " + correctAnswers[i]);
}
}
let grade = (correctAnswer/ questions.length) * 100;
 //Number(correctAnswers/ questions) * 100
if(grade >= Number(80)){
  console.log(">>> Overall Grade: " + grade + " Number of correct Answers: " + correctAnswer + " >>> Passed <<<");
}
  else{
    console.log(">>>Overall Grade: "+ grade + " Number of correct Answers: " + correctAnswer + " >>> Status: FAILED <<<");
  }
}
function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  
  gradeQuiz(this.candidateAnswers);
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};