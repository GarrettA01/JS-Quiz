var startButton = document.querySelector('.startbutton');
var introScreen = document.querySelector('.intro');
var answers = document.querySelectorAll(".answr-btn");
var questionArr = document.querySelectorAll("#question");
var correct = document.querySelectorAll('#correct');
var correctoMessage = document.querySelector('#rightMessage')
var incorrect = document.querySelectorAll('#incorrect')
var incorrectoMessage = document.querySelector('#wrongMessage')
var sec= 60;


//Goes to first question and starts timer
startButton.addEventListener('click', startQuiz)
startButton.addEventListener('click', startTimer)


//function to start timer
function startTimer(){
    console.log('timer suppose to go')
    var timer = setInterval(function(){
        sec--;
        document.querySelector('#timerDisplay').innerHTML=sec;
        if (sec < 1) {
            clearInterval(timer);
            alert("Time is up!")
        }
    }, 1000);
}

//for loop and correct Message display Correct! if you select the correct answer
for (var i = 0; i < correct.length; i++) {
correct[i].addEventListener("click", correctMessage)
}

function correctMessage(){
    correctoMessage.classList.remove("hidden");
    incorrectoMessage.classList.add("hidden");
}

//for loop and incorrect Message display Incorrect! if you select the incorrect answer
for (var i = 0; i < incorrect.length; i++) {
    incorrect[i].addEventListener("click", incorrectMessage)
    }

function incorrectMessage(){
        incorrectoMessage.classList.remove("hidden");
        correctoMessage.classList.add("hidden");
    }

for (var i = 0; i < incorrect.length; i++) {
    incorrect[i].addEventListener("click", function(){
        sec -=5;
        document.querySelector('#timerDisplay').innerHTML=sec;
    })
}


//Hides start screen, shows first question, adds link to next question on buttons
function startQuiz () {
    introScreen.classList.add("hidden");
    questionArr[0].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", secondQuestion,)
    
    }
}

//Hides first question, shows second question, adds link to next question on buttons
function secondQuestion() {
    questionArr[0].classList.add("hidden");
    questionArr[1].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", thirdQuestion)
}

//Hides second question, shows third question, adds link to next question on buttons
function thirdQuestion() {
    questionArr[1].classList.add("hidden");
    questionArr[2].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", fourthQuestion)
}
}

//Hides third question, shows fourth question, adds link to next question on buttons
function fourthQuestion() {
    questionArr[2].classList.add("hidden");
    questionArr[3].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", fifthQuestion)
}
}

//Hides fourth question, shows fifth question, adds link to next question on buttons
function fifthQuestion() {
    questionArr[3].classList.add("hidden");
    questionArr[4].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", sixthQuestion)
}
}

//Hides fifth question, shows sixth question, adds link to next question on buttons
function sixthQuestion() {
    questionArr[4].classList.add("hidden");
    questionArr[5].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", seventhQuestion)
}
}

//Hides sixth question, shows seventh question, adds link to next question on buttons
function seventhQuestion() {
    questionArr[5].classList.add("hidden");
    questionArr[6].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", eigthQuestion)
}
}

//Hides seventh question, shows eighth question, adds link to next question on buttons
function eigthQuestion() {
    questionArr[6].classList.add("hidden");
    questionArr[7].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", ninthQuestion)
}
}

//Hides eighth question, shows ninth question, adds link to next question on buttons
function ninthQuestion() {
    questionArr[7].classList.add("hidden");
    questionArr[8].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", tenthQuestion)
}
}

//Hides ninth question, shows tenth question, adds link to next question on buttons
function tenthQuestion() {
    questionArr[8].classList.add("hidden");
    questionArr[9].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", endHighscore)
}
}
}