//assigning document ids to variables in order to minuplate in js
const quizQuestion = document.getElementById("questions");
const quizAnswers = document.getElementById("answerList");
const timeLeft = document.getElementById("timer");
const highscoreLink = document.getElementById("highscores");
//create complex quiz object with key value pairs
const quiz = [
    {
        "question": "Commonly used data types DO NOT include",
        "choices":["strings", "booleans","alerts", "numbers"],
        "answer": "alerts"
    },
    {
        "question": "The condition in an if/else statement is enlcosed with ____",
        "choices": ["quotes", "curly brackets","parentheses","square brackets"],
        "answer": "parentheses"
    },
    {
        "question": "Arrays in javascript can be used to store ____",
        "choices": ["numbers and strings","booleans","other arrays","all the above"],
        "answer": "all the above"
    },
    {
        "question": "Inside which HTML element do we put the JavaScript?",
        "choices": ["<scripting>","<javascript>","<js>","<script>"],
        "answer": "<script>"
    },
    {
        "question": 'How do you write "Hello World" in an alert box?',
        "choices": ['alertBox("Hello World");','msg("Hello World");','alert("Hello World");','msgBox("Hello World");'],
        "answer": 'alert("Hellow World);'
    }
];
//assigning global variables for timer
let time = 75;

//assigning global variables for highscore
let highscores = [];

//start screen function with function scope created elements and making sure it is called at the start
function startScreen(){
    let startingParagraph = document.createElement("p");
    let startButton = document.createElement("button")

    quizQuestion.textContent = "Coding Quiz Challange!!!";
    startingParagraph.textContent = "Try to answer the following questions as fast as you can. Your score will be the time remaining."
    startButton.textContent = "Start the Quiz";

    quizAnswers.appendChild(startingParagraph);
    quizAnswers.appendChild(startButton);

    startButton.addEventListener("click", function(){
        event.preventDefault()
        startTimer()
    })
}
//default function called on page load
startScreen()

//starting the timer, when timer ends call endpage function
function startTimer() {
    let timer = setInterval(function(){
        if (time !==0) {
            time --;
        }else {
            endpage();
            clearInterval(timer);
        }
        timeLeft.textContent = time;
    }, 1000);
}

//function that appends quiz.question to quizQuestion and quiz.choices to answerList and removes previous assignments
function quizScreen() {

}