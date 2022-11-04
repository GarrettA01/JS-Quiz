var startButton = document.querySelector('.startbutton');
var introScreen = document.querySelector('.intro');
var answers = document.querySelectorAll(".answr-btn");
var questionArr = document.querySelectorAll("#question");
var correct = document.querySelectorAll('#correct');
var correctoMessage = document.querySelector('#rightMessage')
var sec= 60;

startButton.addEventListener('click', startQuiz)
startButton.addEventListener('click', startTimer)

function startTimer(){
    console.log('timer suppose to go')
    var timer = setInterval(function(){
        sec--;
        document.querySelector('#timerDisplay').innerHTML='00:'+sec;
        if (sec < 0) {
            clearInterval(timer);
            alert("Time is up!")
        }
    }, 1000);
}

for (var i = 0; i < correct.length; i++) {
correct[i].addEventListener("click", correctMessage)
}

function correctMessage(){
    correctoMessage.classList.remove("hidden");
    correctoMessage.classList.add("hidden");
}


function startQuiz () {
    introScreen.classList.add("hidden");
    questionArr[0].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", secondQuestion,)
    
    }
}

function secondQuestion() {
    questionArr[0].classList.add("hidden");
    questionArr[1].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", thirdQuestion)
}

function thirdQuestion() {
    questionArr[1].classList.add("hidden");
    questionArr[2].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", fourthQuestion)
}
}
function fourthQuestion() {
    questionArr[2].classList.add("hidden");
    questionArr[3].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", fifthQuestion)
}
}
function fifthQuestion() {
    questionArr[3].classList.add("hidden");
    questionArr[4].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", sixthQuestion)
}
}
function sixthQuestion() {
    questionArr[4].classList.add("hidden");
    questionArr[5].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", seventhQuestion)
}
}
function seventhQuestion() {
    questionArr[5].classList.add("hidden");
    questionArr[6].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", eigthQuestion)
}
}
function eigthQuestion() {
    questionArr[6].classList.add("hidden");
    questionArr[7].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", ninthQuestion)
}
}
function ninthQuestion() {
    questionArr[7].classList.add("hidden");
    questionArr[8].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", tenthQuestion)
}
}
function tenthQuestion() {
    questionArr[8].classList.add("hidden");
    questionArr[9].classList.remove("hidden");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", endHighscore)
}
}
}