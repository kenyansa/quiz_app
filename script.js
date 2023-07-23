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
        question: "Qeustion Two",
        answers: [
            {text: "answer 1", correct: false},
            {text: "answer 2", correct: true},
            {text: "answer 3", correct: false},
            {text: "answer 4", correct: false}
        ]
    },
    {
        question: "Qeustion Three",
        answers: [
            {text: "answer 1", correct: false},
            {text: "answer 2", correct: true},
            {text: "answer 3", correct: false},
            {text: "answer 4", correct: false}
        ]
    },
    {
        question: "Qeustion Four",
        answers: [
            {text: "answer 1", correct: false},
            {text: "answer 2", correct: true},
            {text: "answer 3", correct: false},
            {text: "answer 4", correct: false}
        ]
    },
    {
        question: "Qeustion Five",
        answers: [
            {text: "answer 1", correct: false},
            {text: "answer 2", correct: true},
            {text: "answer 3", correct: false},
            {text: "answer 4", correct: false}
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let questionIndex =  0;
let score = 0;
