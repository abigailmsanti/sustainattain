const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
let numCorrect = 0;
const questions = [
  {
    question: "Which personal action would reduce the most carbon emissions?",
    answers: {
      A: "Reducing food waste",
      B: "Composting",
      C: "Eating a plant-based diet",
      D: "Driving an electric car"
    },
    correctAnswer: "A",
    correctResponse:
      "Correct! Reducing food waste is equivalent to getting 495 million cars off of the road followed by eating a plant-based diet (464 million cars), driving an electric car (75.7 million cars), and composting (16 million cars).",
    incorrectResponse:
      "Incorrect. Reducing food waste is equivalent to getting 495 million cars off of the road followed by eating a plant-based diet (464 million cars), driving an electric car (75.7 million cars), and composting (16 million cars)."
  },
  {
    question:
      "If all the cattle in the world gathered and made their own country, where would they rank in global emissions? (Gatesnotes.com)",
    answers: {
      A: "11th",
      B: "42nd",
      C: "3rd",
      D: "60th"
    },
    correctAnswer: "C",
    correctResponse:
      "Correct! They would be third, right behind China and the U.S.",
    incorrectResponse:
      "Incorrect. They would be third, right behind China and the U.S."
  },
  {
    question:
      "According to the UN, in 2018 alone, there were ___ people displaced from 148 countries due to climate disasters.",
    answers: {
      A: "10.5k",
      B: "800",
      C: "17.2 million",
      D: "600k"
    },
    correctAnswer: "C",
    correctResponse:
      "Correct! There is projected to be 25 million to 1 billion climate migrants by 2050",
    incorrectResponse:
      "Incorrect. In 2018 there were 17.2 million people displaced. There is projected to be 25 million to 1 billion climate migrants by 2050"
  },
  {
    question:
      "According to the Intergovernmental Panel on Climate Change, Global net human-caused emissions of carbon dioxide (CO2) would need to fall by about 45 percent from 2010 levels by ____.",
    answers: {
      A: "2050",
      B: "2040",
      C: "2030",
      D: "2020"
    },
    correctAnswer: "C",
    correctResponse: "Correct!",
    incorrectResponse: "Incorrect. They would need to fall by 2030."
  },
  {
    question: "Climate change affects ___ percent of capital markets. (SASB)",
    answers: {
      A: "30%",
      B: "75%",
      C: "20%",
      D: "93%"
    },
    correctAnswer: "D",
    correctResponse:
      "Correct! Climate change affects about 72/79 industries, costing about $27.5 trillion.",
    incorrectResponse:
      "Incorrect. Climate change affects about 72/79 industries, or about 93%, costing about $27.5 trillion."
  },
  {
    question:
      "Which of these combinations would have the most gigaton carbon reduction?",
    answers: {
      A: "Family Planning and Educating Girls",
      B: "Solar Farms and Fuel Efficient Airplanes",
      C: "Electric Vehicles and Forest Protection",
      D: "Recycled Paper and Plant Based Diet"
    },
    correctAnswer: "A",
    correctResponse:
      "Correct! These solutions would drastically slow down population growth leading to 102.96 gigatons of carbon reduction compared to 19.15 gigatons for B, 17 gigatons for C, and 67.01 gigatons for D.",
    incorrectResponse:
      "Incorrect, the correct answer is A. Solution A would drastically slow down population growth leading to 102.96 gigatons of carbon reduction compared to 19.15 gigatons for B, 17 gigatons for C, and 67.01 gigatons for D."
  },
  {
    question:
      "Which of these actions would have the most gigaton carbon reduction?",
    answers: {
      A: "LED light bulbs",
      B: "Indigenous Land Management",
      C: "Household Recycling",
      D: "Composting"
    },
    correctAnswer: "B",
    correctResponse:
      "B is Correct! According to Project Drawdown, Indigenous land makes up for 18% of all land area containing 37.7 billion tons of carbon stock. “Indigenous land management conserves biodiversity, maintains a range of ecosystems services, safeguards rich cultures and traditional ways of life, and responds to the needs of the most vulnerable” This solution would amount to 6.19 gigatons of carbon reduction.",
    incorrectResponse:
      "Incorrect, the answer is B. According to Project Drawdown, Indigenous land makes up for 18% of all land area containing 37.7 billion tons of carbon stock. “Indigenous land management conserves biodiversity, maintains a range of ecosystems services, safeguards rich cultures and traditional ways of life, and responds to the needs of the most vulnerable” This solution would amount to 6.19 gigatons of carbon reduction."
  },
  {
    question:
      "In February 1994, Executive Order 12898 was created to “address environmental justice in minority and low-income populations.” Which of these are examples of environmental injustices? ",
    answers: {
      A: " Flint, Michigan: Water Crisis",
      B: "Louisiana and Florida: Hurricane Katrina",
      C: "North and South Dakota: Dakota Access Pipeline",
      D: "All of the above!"
    },

    correctAnswer: "D",
    correctResponse:
      'D is Correct! According to the NRDC, "Communities of color, which are often poor, are routinely targeted to host facilities that have negative environmental impacts -- say, a landfill, dirty industrial plant or truck depot."',
    incorrectResponse:
      "Incorrect, the correct answer is D. According to the NRDC, “Communities of color, which are often poor, are routinely targeted to host facilities that have negative environmental impacts -- say, a landfill, dirty industrial plant or truck depot.”"
  }
];

function buildQuiz(questionArray) {
  const output = [];

  // for each question...
  questionArray.forEach((currentQuestion, questionNumber) => {
    console.log(questionNumber);
    console.log("current question is " + currentQuestion);
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
  questionArray.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];

    const selector = "input[name=question" + questionNumber + "]:checked";
    console.log("selector is " + selector);
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    console.log("user answer is " + userAnswer);

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      //add to the number of correct answers
      numCorrect++;
      resultsContainer.innerHTML = currentQuestion.correctResponse;

      // answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      // answerContainers[questionNumber].style.color = 'red';
      resultsContainer.innerHTML = currentQuestion.incorrectResponse;
    }
  });

  // show number of correct answers out of total
}
// display quiz right away
let questionNum = 0;
questionArray = [questions[questionNum]];
buildQuiz(questionArray);
//   // on submit, show results
submitButton.addEventListener("click", showResults);
//   //take us to impact page
nextButton.addEventListener("click", function() {
  resultsContainer.innerHTML = "";
  questionNum += 1;
  
  if(questionNum === 8){
    alert(`${numCorrect}/8`)
    location.assign("/impact");
  }
  questionArray = [questions[questionNum]];
  console.log(questionNum);
  buildQuiz(questionArray);
});
//   //click next, go to next question
prevButton.addEventListener("click", function() {
  resultsContainer.innerHTML = "";
  questionNum = questionNum - 1;
  if (questionNum === -1) {
    location.assign("/");
  }
  questionArray = [questions[questionNum]];
  buildQuiz(questionArray);
});
