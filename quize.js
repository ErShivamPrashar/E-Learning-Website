const questions = [
    {
        question: "1. What is the capital of France?",
        answers: {
            a: "Berlin",
            b: "Madrid",
            c: "Paris",
            d: "Rome"
        },
        correct: "c"
    },
    {
        question: "2. What is 2 + 2?",
        answers: {
            a: "3",
            b: "4",
            c: "5",
            d: "6"
        },
        correct: "b"
    },
    {
        question: "3. Which language runs in a web browser?",
        answers: {
            a: "Python",
            b: "Java",
            c: "JavaScript",
            d: "C#"
        },
        correct: "c"
    },

   { question: "4. What is the capital of France?",
        answers: {
            a: "Berlin",
            b: "Madrid",
            c: "Paris",
            d: "Rome"
        },
        correct: "c"
   },

   {
    question: "5. What is the capital of France?",
    answers: {
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome"
    },
    correct: "c"
},
{
    question: "6. What is 2 + 2?",
    answers: {
        a: "3",
        b: "4",
        c: "5",
        d: "6"
    },
    correct: "b"
},
{
    question: "7. Which language runs in a web browser?",
    answers: {
        a: "Python",
        b: "Java",
        c: "JavaScript",
        d: "C#"
    },
    correct: "c"
},

{
    question: "8. What is the capital of France?",
    answers: {
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome"
    },
    correct: "c"
},
{
    question: "9. What is 2 + 2?",
    answers: {
        a: "3",
        b: "4",
        c: "5",
        d: "6"
    },
    correct: "b"
},
{
    question: "10. Which language runs in a web browser?",
    answers: {
        a: "Python",
        b: "Java",
        c: "JavaScript",
        d: "C#"
    },
    correct: "c"
},

];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;

    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach((button, index) => {
        const answerKey = ['a', 'b', 'c', 'd'][index];
        button.textContent = question.answers[answerKey];
        button.dataset.answer = answerKey;
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    document.getElementById('score').textContent = `You scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    displayQuestion();
}

window.onload = () => {
    displayQuestion();
};
