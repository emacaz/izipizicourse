var startTestButton = document.getElementById('start-test-btn');
startTestButton.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('test-section').style.display = "block";
    document.getElementById('hero-section').style.display = "none";
    loadQuestion()
})

// Preguntas y respuestas del test
var questions = [
    {
      question: "¿Cuál es la capital de Francia?",
      answers: [
        { text: "París", correct: true },
        { text: "Londres", correct: false },
        { text: "Madrid", correct: false },
        { text: "Roma", correct: false }
      ]
    },
    {
      question: "¿Cuál es el río más largo del mundo?",
      answers: [
        { text: "Amazonas", correct: true },
        { text: "Nilo", correct: false },
        { text: "Yangtsé", correct: false },
        { text: "Misisipi", correct: false }
      ]
    },
    {
    question: "¿Quién es el fundador de MyLearny?",
    answers: [
        { text: "Emanuel", correct: true },
        { text: "Walesca", correct: false },
        { text: "Yesenia", correct: false },
        { text: "Soledad", correct: false }
    ]
    },
    // Agrega más preguntas aquí...
];
  
var currentQuestionIndex = 0;
var score = 0;

var questionContainer = document.getElementById('question-container');

// Función para cargar la pregunta actual
function loadQuestion() {
    var currentQuestion = questions[currentQuestionIndex];

    questionContainer.innerHTML = '';
    var questionElement = document.createElement('h2');
    questionElement.innerText = currentQuestion.question;
    questionContainer.appendChild(questionElement);

    for (var i = 0; i < currentQuestion.answers.length; i++) {
        var answer = currentQuestion.answers[i];
        var answerElement = document.createElement('button');
        answerElement.innerText = answer.text;
        answerElement.addEventListener('click', handleAnswerClick);
        questionContainer.appendChild(answerElement);
    }
}

// Función para manejar el clic en una respuesta
function handleAnswerClick(event) {
    var selectedAnswer = event.target;
    var currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer.textContent === currentQuestion.answers.find(a => a.correct).text) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Función para mostrar el resultado final
function showResult() {
    questionContainer.innerHTML = '';
    var resultElement = document.createElement('h2');
    resultElement.innerText = '¡Has terminado el test!';
    questionContainer.appendChild(resultElement);

    var scoreElement = document.createElement('p');
    scoreElement.innerText = 'Puntuación: ' + score + '/' + questions.length;
    questionContainer.appendChild(scoreElement);
}


// FUNCTIONS
// startTest
// cancelarTest (en medio del test, poder salirse)
// 