const questions = [
  {
    question:
      "What company developed the first commercially available microprocessor?",
    answers: [
      {
        text: "IBM",
        correct: false,
      },
      {
        text: "Apple",
        correct: false,
      },
      {
        text: "Intel",
        correct: true,
      },
      {
        text: "Microsoft",
        correct: false,
      },
    ],
  },
  {
    question: 'What does "WWW" stand for in the context of the internet?',
    answers: [
      {
        text: "Web World Wizard",
        correct: false,
      },
      {
        text: "World Wide Web",
        correct: true,
      },
      {
        text: "Wide Width Web",
        correct: false,
      },
      {
        text: "World Widget Web",
        correct: false,
      },
    ],
  },
  {
    question: "Who is the co-founder of Apple Inc. alongside Steve Jobs?",
    answers: [
      {
        text: "Steve Wozniak",
        correct: true,
      },
      {
        text: "Bill Gates",
        correct: false,
      },
      {
        text: "Larry Page",
        correct: false,
      },
      {
        text: "Mark Zuckerberg",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which programming language is often used for building web applications and dynamic websites?",
    answers: [
      {
        text: "Java",
        correct: false,
      },
      {
        text: "C++",
        correct: false,
      },
      {
        text: "Python",
        correct: false,
      },
      {
        text: "JavaScript",
        correct: true,
      },
    ],
  },
  {
    question: 'What do the letters "USB" stand for in computing?',
    answers: [
      {
        text: "Universal Serial Bus",
        correct: true,
      },
      {
        text: "United States of Britain",
        correct: false,
      },
      {
        text: "Ultra Speed Bandwidth",
        correct: false,
      },
      {
        text: "Universal Software Buffer",
        correct: false,
      },
    ],
  },
  {
    question: "Who is the CEO of Tesla, Inc., SpaceX, and X?",
    answers: [
      {
        text: "Mark Zuckerberg",
        correct: false,
      },
      {
        text: "Elon Musk",
        correct: true,
      },
      {
        text: "Tim Cook",
        correct: false,
      },
      {
        text: "Jeff Bezos",
        correct: false,
      },
    ],
  },
  {
    question: "What is the name of Amazon's virtual assistant AI technology?",
    answers: [
      {
        text: "Siri",
        correct: false,
      },
      {
        text: "Cortana",
        correct: false,
      },
      {
        text: "Google Assistant",
        correct: false,
      },
      {
        text: "Alexa",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which social media platform was founded by Mark Zuckerberg in 2004?",
    answers: [
      {
        text: "X",
        correct: false,
      },
      {
        text: "Instagram",
        correct: false,
      },
      {
        text: "Facebook",
        correct: true,
      },
      {
        text: "Snapchat",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the term for a computer program that replicates itself and spreads to other computers or networks?",
    answers: [
      {
        text: "Spyware",
        correct: false,
      },
      {
        text: "Worm",
        correct: true,
      },
      {
        text: "Malware",
        correct: false,
      },
      {
        text: "Virus",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the name of the first video game console released by Sony?",
    answers: [
      {
        text: "PlayStation",
        correct: true,
      },
      {
        text: "Xbox",
        correct: false,
      },
      {
        text: "Nintendo Entertainment System (NES)",
        correct: false,
      },
      {
        text: "Sega Genesis",
        correct: false,
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

startQuiz(questions, questionElement, answerButtons, nextButton);
