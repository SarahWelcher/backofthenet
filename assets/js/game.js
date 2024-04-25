// Tutorial used to assist with writing javascript element of website (https://medium.com/@codepicker57/building-an-interactive-quiz-with-html-css-and-javascript-efe9bd8129e2)

// Declare questions and answers
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

// Declare current question and score
let score = document.getElementById("total-score");
let currentQuestion = 0;
score = 0;



// Questions and Answers
const quizData = [
    {
        question: "Which English club was the first to win the European Cup in 1968?",
        options: ["Manchester City", "Tottenham Hotspurs", "Manchester United", "Arsenal"],
        answer: "Manchester United"
    },
    {
        question: "What is the nickname of England women's national team?",
        options: ["Tigers", "Leapards", "Elephants", "Lionesses"],
        answer: "Lionesses"
    },
    {
        question: "Which club did Jurgen Klopp manage before joining Liverpool?",
        options: ["Borussia Dortmund", "Frankfurt Youth", "Chelsea", "Paris Saint Germain"],
        answer: "Borussia Dortmund"
    },
    {
        question: "Which female player won the Ballon d'Or in 2019?",
        options: ["Lucy Bronze", "Megan Rapinoe", "Sam Kerr", "Pernille Harder"],
        answer: "Megan Rapinoe"
    },
    {
        question: "Which player holds the record for the most goals scored in a single Premier League season?",
        options: ["Virgil Van Dijk", "Phil Foden", "Erling Haaland", "William Saliba"],
        answer: "Erling Haaland"
    },
    {
        question: "Who became the manager of England Women in September 2021?",
        options: ["Sarina Weigman", "Frank Lampard", "Mark Sampson", "Darren Ferguson"],
        answer: "Sarina Weigman"
    },
    {
        question: "Which country hosted the 1982 FIFA World Cup?",
        options: ["Australia", "USA", "Scotland", "Spain"],
        answer: "Spain"
    },
    {
        question: "As of 2023, which English football club have won a record six Women's Super League championships?",
        options: ["Liverpool", "Chelsea", "Brighton", "Aston Villa"],
        answer: "Chelsea"
    },
    {
        question: "Who scored the fastest hat-trick in Premier League history? ",
        options: ["Sadio Mané", "Eric Cantona", "Jermain Defoe", "Alan Shearer"],
        answer: "Sadio Mané"
    },
    {
        question: "What's the official nickname of Australia women's national team?",
        options: ["The Wallabies", "The Might Roos", "The Matilda's", "The Koalas"],
        answer: "The Matilda's"
    },
    {
        question: "Which stadium is known as 'The Theatre of Dreams'?",
        options: ["The Emirates", "Stamford Bridge", "Anfield", "Old Trafford"],
        answer: "Old Trafford"
    },
    {
        question: "Which club side won the 2022/23 UEFA Women's Champions League?",
        options: ["Real Madrid", "Barcelona", "Ayax", "Lyon"],
        answer: "Barcelona"
    },
    {
        question: "Which country won the first-ever FIFA World Cup in 1930?",
        options: ["Uruguay", "France", "Brazil", "Mexico"],
        correctAnswer: "Uruguay"
    },
    {
        question: "Who was the Golden Boot winner and Player of the Tournament at Euro 2022?",
        options: ["Ella Toone", "Alessia Russo", "Beth Mead", "Chloe Kelly"],
        answer: "Beth Mead"
    },
    {
        question: "What was the average home attendance per match in the 22/23 season for Arsenal Women in the Women's Super League",
        options: ["17,501", "3,501", "7,501", "12,501"],
        answer: "17,501"
    }
];

// Show question function - shows next question when answer is chosen for current question.
function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    // Creates a button for answer options and changes inner text to array option
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button")
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
        button.classList.add("btn");
    });
}
// Function to select an answer option and increase score by 1 if correct answer is chosen 
function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;

    if (selectedButton.innerText === answer) { // If selected answer is correct answer, increase score by 1
        score++;
    }
    currentQuestion++; // Increase current question by 1 until the end of the array of questions. At the end of the array, show the final score.

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Show final score
function showResult() {
    window.location.replace("https://8000-sarahwelche-backofthene-dv8gc4q51hg.ws-eu110.gitpod.io/results.html");
    score.innerHTML = `
    <h1>Quiz Completed!</h1>
    <p>Your score: ${score}/${quizData.length}</p>
    `;
};

showQuestion();