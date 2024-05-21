const questions = [
    {
        question: 'Which HTML tag is used to define an inline style?',
        choice1: '<script>',
        choice2: '<css>',
        choice3: '<style>',
        choice4: '<span>',
        answer: 3,
    },
    {
        question: 'Which property is used to change the text color in CSS?',
        choice1: 'text-color',
        choice2: 'font-color',
        choice3: 'text-style',
        choice4: 'color',
        answer: 4,
    },
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
        answer: 1,
    },
    {
        question:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3,
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice'));
const questionNumberElement = document.getElementById('questionNumber');
const scoreElement = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html');
    }

    questionNumberElement.innerText = currentQuestionIndex + 1;
    questionElement.innerText = questions[currentQuestionIndex].question;
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = questions[currentQuestionIndex]['choice' + number];
    });
    progressBarFull.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == questions[currentQuestionIndex].answer ? 'correct' : 'incorrect';
        
        selectedChoice.classList.add(classToApply);
        
        if (classToApply === 'correct') {
            incrementScore();
        }

        setTimeout(() => {
            selectedChoice.classList.remove(classToApply);
            currentQuestionIndex++;
            loadQuestion();
        }, 1000);
    });
});

function incrementScore() {
    score = score+10;
    scoreElement.innerText = score;
}

startGame();
