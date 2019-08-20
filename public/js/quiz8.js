const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const prevButton = document.getElementById("prevButton");

const questions = [
  {
    question:
      "Which of these actions would have the most gigaton carbon reduction?",
    answers: {
      A: "LED light bulbs",
      B: "Indigenous Land Management",
      C: "Household Recycling",
      D: "Composting"
    },
    correctAnswer: "B"
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
        "B is Correct! According to Project Drawdown, Indigenous land makes up for 18% of all land area containing 37.7 billion tons of carbon stock. “Indigenous land management conserves biodiversity, maintains a range of ecosystems services, safeguards rich cultures and traditional ways of life, and responds to the needs of the most vulnerable” This solution would amount to 6.19 gigatons of carbon reduction.";

      // answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      // answerContainers[questionNumber].style.color = 'red';
      resultsContainer.innerHTML =
      "Incorrect, the answer is B. According to Project Drawdown, Indigenous land makes up for 18% of all land area containing 37.7 billion tons of carbon stock. “Indigenous land management conserves biodiversity, maintains a range of ecosystems services, safeguards rich cultures and traditional ways of life, and responds to the needs of the most vulnerable” This solution would amount to 6.19 gigatons of carbon reduction.";
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
  location.assign("/quiz/7");
});
