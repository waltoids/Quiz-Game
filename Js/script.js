//assigning document ids to variables in order to minuplate in js
const quizQuestion = document.getElementById("questions");
const quizChoices = document.getElementById("answerList");
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
        "answer": 'alert("Hello World");'
    }
];
//assigning global variables for timer
let time = 75;
let timer;

//assigning global variables for highscore
let highscores = [];
//assigning global variable for questionNum, to increment for other functions
let questionNum = 0

//start screen function with function scope created elements and making sure it is called at the start
function startScreen(){
    [...quizChoices.childNodes].forEach(element => {
        element.remove();
    });
    let startingParagraph = document.createElement("p");
    let startButton = document.createElement("button")

    quizQuestion.textContent = "Coding Quiz Challange!!!";
    startingParagraph.textContent = "Try to answer the following questions as fast as you can. Your score will be the time remaining."
    startButton.textContent = "Start the Quiz";

    quizChoices.appendChild(startingParagraph);
    quizChoices.appendChild(startButton);

    startButton.addEventListener("click", function(){
        event.preventDefault()
        startTimer()
        quizStart()
    });

}

//starting the timer, when timer ends call endpage function
function startTimer() {
     timer = setInterval(function(){
        if (time !==0) {
            time --;
        }else {
            endPage();
        }
        timeLeft.textContent = time;
    }, 1000);
}

//function that appends quiz.question to quizQuestion and quiz.choices to quizChoices and removes previous elements
function quizStart() {
    [...quizChoices.childNodes].forEach(element => {
        element.remove();
    });
    quizQuestion.textContent = quiz[questionNum].question;

    quiz[questionNum].choices.forEach(text => {
       let btnChoice = buttonCreation(text, function() {
            if (this.textContent === quiz[questionNum].answer){
                alert("correct");
            } else {
                if (time !== 0)
                time = (time - 20)
                alert("incorrect")
            }
            questionNum++;
            if (quiz.length !== questionNum) {
                quizStart()
            }else{
                endPage()
            }
        })
        quizChoices.appendChild(btnChoice)
    })
}

//need to create a function that converts items into a button
function buttonCreation(text, func) {

    let btn = document.createElement('button');
    btn.textContent = text;
    btn.addEventListener("click", func);

    return btn;
}
//function for end page. need to stoptimer, need to create elements for endpage with input, needs to save score in storage
function endPage (){
    [...quizChoices.childNodes].forEach(element => {
        element.remove();
    });
    clearInterval(timer);
    questionNum = 0

    quizQuestion.textContent = "All Done!";

    let scoreParagraph = document.createElement("p");
    scoreParagraph.textContent = "Your score is " + time; 
    //need to create submit form for highscores
    let submitLabel = document.createElement("label");
    submitLabel.textContent = "Enter your initials."
    let submitInput = document.createElement("input")
    let submitBtn = buttonCreation("Submit", function(){
        let initals = submitInput.value;
        highscores.push({"name": initals, "score": time});
        localStorage.setItem("Highscores", JSON.stringify(highscores))
        highscorePage();
    });
    
    quizChoices.appendChild(scoreParagraph);
    quizChoices.appendChild(submitLabel);
    quizChoices.appendChild(submitInput);
    quizChoices.appendChild(submitBtn);
}
//function to hold highscores and access them and put them into an ordered list. Needs to be able to start the quiz again and clear the localstorage if wanted
function highscorePage (){
    [...quizChoices.childNodes].forEach(element => {
        element.remove();
    });
    quizQuestion.textContent = "Highscores";
    highscores = JSON.parse(localStorage.getItem("Highscores"));

    let scoreList = document.createElement("ol");
    
    highscores.forEach(element =>{
        let nameScore = document.createElement("li");
        nameScore.textContent = `${element.name} - ${element.score}`;
        scoreList.appendChild(nameScore);
    })
    
    let returnBtn = buttonCreation("Return", function(){
        time = 75;
        startScreen();
    });

    let clearBtn = buttonCreation("Clear Scores", function(){
        highscores = [];
        localStorage.clear;
        scoreList.remove();
    });


    quizChoices.appendChild(scoreList);
    quizChoices.appendChild(returnBtn);
    quizChoices.appendChild(clearBtn);
}
//default function called on page load with evenlistener for highscore page call
startScreen()
highscoreLink.addEventListener("click", highscorePage);