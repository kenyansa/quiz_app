//define array of questions
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
        question: "Which is the deepest fresh water lake in the world?",
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
            {text: "Joseph Murumbi", correct: false},
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
const questionElement = document.getElementById("question"); //holds ref to html element h1 with id 'question' where the current question will be displayed
const answerButtons = document.querySelector(".answer-buttons"); //holds ref where answer buttons will be displayed
const nextButton = document.getElementById("next-btn"); //holds ref for next button for moving to the next question
const timerElement = document.getElementById('timer');

//initializing q-index and score for tracking
let questionIndex =  0;
let score = 0;
let timer;

//function for starting the quiz
function startQuiz(){
    questionIndex = 0; //initialize q-index and score to 0
    score = 0;
    nextButton.innerHTML = "Next"; //set inner HTMLM for nextButton to 'next then display first question
    nextButton.style.display = "none"; //hide the button initially
    showQuestion();
    nextButton.addEventListener('click', handleNextButton); // add event listener to the next button.
}

//function for displaying current question
function showQuestion(){
    resetState(); //clears any previous question and answer buttons
    let currentQuestion = questions[questionIndex]; //retrieve current question based on q-index
    let questionNo = questionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question; //display iterated question

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); //create a new button element for each answer and append it to answerButtons
        
        if(answer.correct){
            button.dataset.correct = answer.correct; //If the answer is correct, it also sets a custom attribute data-correct on the button and sets its value to true.
        }
        button.addEventListener("click", selectAnswer);
    });
    startTimer(10); //start timer for each question
}

function resetState(){
    nextButton.style.display = "none"; //this function hides nextButton and removes any child elements from answerButtons using while loop
    timerElement.textContent = ""; //Clear the timer display
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function startTimer(seconds){
    let timeLeft = seconds;
    updateTimerDisplay(timeLeft);

    timer = setInterval(()=>{
        timeLeft--;
        updateTimerDisplay(timeLeft);

        if(timeLeft<=0){
            clearInterval(timer);
            handleTimeUp();
        }
    }, 1000);
}
function updateTimerDisplay(timeLeft){
    timerElement.textContent = `Time Left: ${timeLeft}s`;
}

function selectAnswer(e){ //function called upon clicking on answer button and checks if the button has 'true' data-correct
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){ //if answerbe correct, add correct class to the button and increment the score
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect"); //if answer incorrect, add incorrect answer to the button
    }
    Array.from(answerButtons.children).forEach(button =>{ //disable all answer buttons after the selection
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"; //display nextButton
}

function showScore(){ //show final score after answering all questions, resetting all questions and answers
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; //in he place of question element/current question, display the innerHTML
    nextButton.style.display = "block";
    nextButton.removeEventListener('click', handleNextButton);
    nextButton.addEventListener('click', startQuiz);
}
function handleNextButton(){ //increment question index and check if there are more quiz to be answered.
    questionIndex++;
    if(questionIndex<questions.length){
        showQuestion();
    }else{
        showScore(); //show score if all quiz are answered
        nextButton.innerHTML = "Play Again!" // Change the text of the button
        nextButton.removeEventListener('click', handleNextButton); // remove the repvious event listener
        nextButton.addEventListener("click", startQuiz) // Add a new event listener to start the quiz again
    }
}
// nextButton.addEventListener('click', ()=>{
//     if(questionIndex < questions.length){
//         handleNextButton(); //check if there are quiz to be answered upon clicking the button
//     }
// })
startQuiz(); 