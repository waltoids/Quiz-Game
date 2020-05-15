//assigning document ids to variables in order to minuplate in js
const quizQuestion = $("#questions");
const quizAnswers = $("#answerList");
const timeLeft = $("#timer");
const highscoreLink = $("#highscores");
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