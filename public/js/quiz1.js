const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("nextButton");

const questions = [
  {
    question: "Which personal action would reduce the most carbon emissions?",
    answers: {
      A:
        "Reducing food waste (1st equivalent to getting 495 million cars off the road)",
      B: "Composting (4th equivalent to getting 16 million cars off the road)",
      C:
        "Eating a plant-based diet (2nd equivalent to getting 464 million cars)",
      D: "Driving an electric car (3rd equivalent to getting 75.7 million cars)"
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
        "Correct! Reducing food waste is equivalent to getting 495 million cars off of the road followed by eating a plant-based diet (464 million cars), driving an electric car (75.7 million cars), and composting (16 million cars).";

      // answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      // answerContainers[questionNumber].style.color = 'red';
      resultsContainer.innerHTML =
        "Incorrect. Reducing food waste is equivalent to getting 495 million cars off of the road followed by eating a plant-based diet (464 million cars), driving an electric car (75.7 million cars), and composting (16 million cars).";
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
  location.assign("http://127.0.0.1:3333/quiz2");
});
