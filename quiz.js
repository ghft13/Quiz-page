const quizdata = [
  "What is the chemical symbol for gold?",
  "Which river is the longest in the world?",
  "Who was the first President of the United States?",
  "What is the capital city of Japan?",
];

const options = [
  ["ag", "au", "fe", "kg"],
  [
    "Amazon River",
    "Nile River",
    "Yangtze River",
    "Mississippi-Missouri River System",
  ],
  ["Thomas Jefferson", "John Adams", "George Washington", "James Madison"],
  ["Seoul", "Beijing", "Tokyo", "Bangkok"],
];

let question = document.querySelector(".question h2");
let btn = document.querySelector("#btn");
let num = 0;
let questionnum = 1;
let score = 0;
let checked = false;

function showQuestion() {
  question.innerText = `${questionnum}. ${quizdata[num]}`;
}

function popOptions(questionIndex) {
  const optionTags = document.querySelectorAll(".option");
  optionTags.forEach((ele, ind) => {
    if (ind < options[questionIndex].length) {
      ele.innerHTML = options[questionIndex][ind];
    } else {
      console.error("Index out of bounds");
    }
  });
}

function checkAnswer() {
  let radio = document.querySelectorAll("input[name='ans1']");
  for (let radiobtn of radio) {
    if (radiobtn.checked) {
      checked = true;

      console.log("Selected Answer:", radiobtn.value);
      if (radiobtn.value == answers[num]) {
        score += 10;

        console.log("Score:", score);
      } else {
        console.log("Wrong answer");
      }
      radiobtn.checked = false;
      break;
    }
  }
}

function nextQuestion() {
  if (num < quizdata.length - 1) {
    num++;
    questionnum++;
    showQuestion();
    popOptions(num);
  } else {
    let main = document.getElementsByTagName("main")[0];
    console.log(main);
    main.innerHTML = "";
    let creatediv = document.createElement("div");
    let createh2 = document.createElement("h2");
    createh2.textContent = `Your Score is ${score}`;
    creatediv.appendChild(createh2);
    creatediv.classList.add("cent");
    main.appendChild(creatediv);
  }
}

btn.addEventListener("click", function () {
  checkAnswer();
  if (checked == true) {
    nextQuestion();
    checked = false;
  }
});

// Initial display
showQuestion();
popOptions(num);

// Correct answers  array
const answers = [1, 1, 2, 2];
