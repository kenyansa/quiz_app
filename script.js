const questions = [
    {
        question: "Qeustion one",
        answers: [
            {text: "answer 1", correct: false},
            {text: "answer 2", correct: true},
            {text: "answer 3", correct: false},
            {text: "answer 4", correct: false}
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
const answerButton = document.getElementById("answer-buttons");
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
    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
}