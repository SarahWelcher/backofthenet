//  Declare questions and answers
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

// Declare current question and score area
let currentQuestion = 0;
let score = 0;

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