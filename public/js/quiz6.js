const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

const questions = [
  {
    question:
      "Which of these combinations would have the most gigaton carbon reduction?",
    answers: {
      A: "Family Planning and Educating Girls",
      B: "Solar Farms and Fuel Efficient Airplanes",
      C: "Electric Vehicles and Forest Protection",
      D: "Recycled Paper and Plant Based Diet"
    },
    correctAnswer: "A"
  }
];


function buildQuiz() {
  const output = [];

  // for each question...
  questions.forEach((currentQuestion, questionNumber) => {
    // we'll want to store the list of answer choices
    const answers = [];

    // and for each available answer...
    for (letter in currentQuestion.answers) {
      // ...add an HTML radio button
      answers.push(
        `<label>
              
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                  
                </label>`
      );
    }

    // add this question and its answers to the output
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
              <div style="height:40px;"></div>
              <div class="answers"> ${answers.join("")} </div>
              <div style="height:25px;"></div>`
    );
  });

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll(".answers");

  // for each question...
  questions.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = "input[name=question" + questionNumber + "]:checked";
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // add to the number of correct answers
  
      resultsContainer.innerHTML =
        "Correct! These solutions would drastically slow down population growth leading to 102.96 gigatons of carbon reduction compared to 19.15 gigatons for B, 17 gigatons for C, and 67.01 gigatons for D.";
    
      // answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      // answerContainers[questionNumber].style.color = 'red';
      resultsContainer.innerHTML =
        "Incorrect, the correct answer is A. Solution A would drastically slow down population growth leading to 102.96 gigatons of carbon reduction compared to 19.15 gigatons for B, 17 gigatons for C, and 67.01 gigatons for D.";
    }
  });

  // show number of correct answers out of total
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
//click next, go to next question
prevButton.addEventListener("click", function() {
  location.assign("http://127.0.0.1:3333/quiz5");
});
nextButton.addEventListener("click", function() {
    location.assign("http://127.0.0.1:3333/quiz7");
  });
