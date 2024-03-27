const questions = [
  {
    question:
      'Who is often referred to as "The Greatest of All Time" in basketball?',
    answers: [
      {
        text: "Michael Jordan",
        correct: true,
      },
      {
        text: "LeBron James",
        correct: false,
      },
      {
        text: "Kobe Bryant",
        correct: false,
      },
      {
        text: "Magic Johnson",
        correct: false,
      },
    ],
  },
  {
    question:
      'In which sport is the "green jacket" awarded to the winner of a prestigious annual tournament?',
    answers: [
      {
        text: "Tennis",
        correct: false,
      },
      {
        text: "Soccer",
        correct: false,
      },
      {
        text: "Golf",
        correct: true,
      },
      {
        text: "Formula 1 Racing",
        correct: false,
      },
    ],
  },
  {
    question: "Which country won the FIFA World Cup in 2018?",
    answers: [
      {
        text: "Argentina",
        correct: false,
      },
      {
        text: "France",
        correct: true,
      },
      {
        text: "Brazil",
        correct: false,
      },
      {
        text: "Germany",
        correct: false,
      },
    ],
  },
  {
    question:
      "Who holds the record for the most Olympic gold medals in history?",
    answers: [
      {
        text: "Usain Bolt",
        correct: false,
      },
      {
        text: "Simone Biles",
        correct: false,
      },
      {
        text: "Serena Williams",
        correct: false,
      },
      {
        text: "Michael Phelps",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which tennis player has won the most Grand Slam titles in the Open Era?",
    answers: [
      {
        text: "Serena Williams",
        correct: false,
      },
      {
        text: "Rafael Nadal",
        correct: false,
      },
      {
        text: "Roger Federer",
        correct: true,
      },
      {
        text: "Novak Djokovic",
        correct: false,
      },
    ],
  },
  {
    question: "Which NFL team has won the most Super Bowl titles?",
    answers: [
      {
        text: "Pittsburgh Steelers",
        correct: true,
      },
      {
        text: "New England Patriots",
        correct: false,
      },
      {
        text: "Dallas Cowboys",
        correct: false,
      },
      {
        text: "San Francisco 49ers",
        correct: false,
      },
    ],
  },
  {
    question: 'Which athlete is known as "The Fastest Man Alive"?',
    answers: [
      {
        text: "Tyson Gay",
        correct: false,
      },
      {
        text: "Jesse Owens",
        correct: false,
      },
      {
        text: "Carl Lewis",
        correct: false,
      },
      {
        text: "Usain Bolt",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which country has won the most medals in the history of the Summer Olympics?",
    answers: [
      {
        text: "China",
        correct: false,
      },
      {
        text: "United States",
        correct: true,
      },
      {
        text: "Great Britain",
        correct: false,
      },
      {
        text: "Russia",
        correct: false,
      },
    ],
  },
  {
    question: "Who is the all-time leading scorer in NBA history?",
    answers: [
      {
        text: "LeBron James",
        correct: true,
      },
      {
        text: "Kareem Abdul-Jabbar",
        correct: false,
      },
      {
        text: "Michael Jordan",
        correct: false,
      },
      {
        text: "Kobe Bryant",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the term used in baseball when a pitcher throws three strikes to a batter?",
    answers: [
      {
        text: "Home Run",
        correct: false,
      },
      {
        text: "Foul Ball",
        correct: false,
      },
      {
        text: "Strikeout",
        correct: true,
      },
      {
        text: "Grand Slam",
        correct: false,
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

startQuiz(questions, questionElement, answerButtons, nextButton);
