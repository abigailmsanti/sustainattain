const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

const questions = [
  {
    question:
      "If all the cattle in the world gathered and made their own country, where would they rank in global emissions? (Gatesnotes.com)",
    answers: {
      A: "11th",
      B: "42nd",
      C: "3rd",
      D: "60th"
    },
    correctAnswer: "C"
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
        "Correct! They would be third, right behind China and the U.S.";
      // answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      // answerContainers[questionNumber].style.color = 'red';
      resultsContainer.innerHTML =
        "Incorrect. They would be third, right behind China and the U.S.";
    }
  });

  // show number of correct answers out of total
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
//click next, go to next question
nextButton.addEventListener("click", function() {
  location.assign("/quiz/3");
});
prevButton.addEventListener("click", function() {
  location.assign("/quiz/1");
});
