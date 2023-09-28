const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';


//TODO: Variables for Part 2
let questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', `Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? `, 'What is the minimum crew size for the ISS? '];
let correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question('What is your name?');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(let i = 0; i < questions.length; i++){
  candidateAnswers.push(input.question(questions[i]));
  };
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log(`\nQuestion 1: ${questions[0]}\nYour answer: ${candidateAnswers[0]}\nCorrect answer: ${correctAnswers[0]}\nQuestion 2: ${questions[1]}\nYour answer: ${candidateAnswers[1]}\nCorrect answer: ${correctAnswers[1]}\nQuestion 3: ${questions[2]}\nYour answer: ${candidateAnswers[2]}\nCorrect answer: ${correctAnswers[2]}\nQuestion 4: ${questions[3]}\nYour answer: ${candidateAnswers[3]}\nCorrect answer: ${correctAnswers[3]}\nQuestion 5: ${questions[4]}\nYour answer: ${candidateAnswers[4]}\nCorrect answer: ${correctAnswers[4]}`)
  
  let correctCandidateAnswers = [];
  for(let i = 0; i < candidateAnswers.length; i++){
    let currentlyGrading = candidateAnswers[i];
    let currentCorrectAnswer = correctAnswers[i];
    if(currentlyGrading.toLowerCase() === currentCorrectAnswer.toLowerCase()){
      correctCandidateAnswers.push(currentlyGrading);
    }
  }

  let grade = correctCandidateAnswers.length/questions.length*100;  //TODO 3.2 use this variable to calculate the candidates score.

  if(grade >= 80){
    console.log(`Congrats! You met the passing score of 80%. You scored ${grade}%.`);
  }
  else{
    console.log(`Too Bad... You failed to meet the passing score of 80%. You scored ${grade}%.`);
  }

  return grade;
  
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log('Greetings, ' + candidateName );
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
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