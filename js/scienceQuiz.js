const questions = [
  {
    question: "What is the chemical symbol for water?",
    answers: [
      {
        text: "Wo",
        correct: false,
      },
      {
        text: "Wa",
        correct: false,
      },
      {
        text: "H2O",
        correct: true,
      },
      {
        text: "Hy",
        correct: false,
      },
    ],
  },
  {
    question: "What is the largest organ in the human body?",
    answers: [
      {
        text: "Heart",
        correct: false,
      },
      {
        text: "Brain",
        correct: false,
      },
      {
        text: "Liver",
        correct: false,
      },
      {
        text: "Skin",
        correct: true,
      },
    ],
  },
  {
    question:
      "What gas do plants absorb from the atmosphere during photosynthesis?",
    answers: [
      {
        text: "Carbon dioxide",
        correct: true,
      },
      {
        text: "Oxygen",
        correct: false,
      },
      {
        text: "Nitrogen",
        correct: false,
      },
      {
        text: "Hydrogen",
        correct: false,
      },
    ],
  },
  {
    question: 'Which planet is known as the "Red Planet"?',
    answers: [
      {
        text: "Venus",
        correct: false,
      },
      {
        text: "Jupiter",
        correct: false,
      },
      {
        text: "Mars",
        correct: true,
      },
      {
        text: "Saturn",
        correct: false,
      },
    ],
  },
  {
    question: "What is the chemical symbol for the element iron?",
    answers: [
      {
        text: "Fe",
        correct: true,
      },
      {
        text: "Ir",
        correct: false,
      },
      {
        text: "In",
        correct: false,
      },
      {
        text: "Io",
        correct: false,
      },
    ],
  },
  {
    question: "What is the process by which plants make their own food called?",
    answers: [
      {
        text: "Respiration",
        correct: false,
      },
      {
        text: "Fermentation",
        correct: false,
      },
      {
        text: "Photosynthesis",
        correct: true,
      },
      {
        text: "Transpiration",
        correct: false,
      },
    ],
  },
  {
    question: "What famous scientist developed the theory of relativity?",
    answers: [
      {
        text: "Isaac Newton",
        correct: false,
      },
      {
        text: "Albert Einstein",
        correct: true,
      },
      {
        text: "Galileo Galilei",
        correct: false,
      },
      {
        text: "Marie Curie",
        correct: false,
      },
    ],
  },
  {
    question: "What is the outermost layer of the Earth called?",
    answers: [
      {
        text: "Crust",
        correct: true,
      },
      {
        text: "Mantle",
        correct: false,
      },
      {
        text: "Core",
        correct: false,
      },
      {
        text: "Lithosphere",
        correct: false,
      },
    ],
  },
  {
    question: "What is the unit of measurement for force?",
    answers: [
      {
        text: "Newton",
        correct: true,
      },
      {
        text: "Joule",
        correct: false,
      },
      {
        text: "Watt",
        correct: false,
      },
      {
        text: "Volt",
        correct: false,
      },
    ],
  },
  {
    question: "What gas do humans exhale when they breathe?",
    answers: [
      {
        text: "Oxygen",
        correct: false,
      },
      {
        text: "Carbon dioxide",
        correct: true,
      },
      {
        text: "Nitrogen",
        correct: false,
      },
      {
        text: "Hydrogen",
        correct: false,
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

startQuiz(questions, questionElement, answerButtons, nextButton);
