const questions = [
    {
        question: "What is Kenya best known for?",
        answers: [
            {text: "Swimming", correct: false},
            {text: "Military power", correct: false},
            {text: "Safaris", correct: true},
            {text: "Scientific farming", correct: false}
        ]
    },
    {
        question: "Which is the deepst fresh water lake in the world?",
        answers: [
            {text: "Lake Baikal", correct: true},
            {text: "Lake Vostok", correct: false},
            {text: "Lake Tanganyika", correct: false},
            {text: "Lake O'Higgins ", correct: false}
        ]
    },
    {
        question: "Which country has the larget prison population in the world?",
        answers: [
            {text: "China", correct: false},
            {text: "Afghanistan", correct: false},
            {text: "The US", correct: true},
            {text: "India", correct: false}
        ]
    },
    {
        question: "Which of the following never served as a vice or deputy president in Kenya?",
        answers: [
            {text: "Mwai Kibaki", correct: false},
            {text: "Joseph Murumbi", correct: true},
            {text: "Josephat Karanja", correct: false},
            {text: "Charles Njonjo", correct: true}
        ]
    },
    {
        question: "Which of the following is not a psychologist?",
        answers: [
            {text: "Robert Sternberg", correct: false},
            {text: "Jordan Peterson", correct: false},
            {text: "Wu Jinglian", correct: true},
            {text: "Martin Seligman", correct: false}
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.querySelector(".answer-buttons");
const nextButton = document.getElementById("next-btn");

let questionIndex =  0;
let score = 0;

function startQuiz(){
    questionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
startQuiz();