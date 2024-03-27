const questions = [
  {
    question: "What is the name of the fictional city where Batman operates?",
    answers: [
      {
        text: "Gotham City",
        correct: true,
      },
      {
        text: "Metropolis",
        correct: false,
      },
      {
        text: "Star City",
        correct: false,
      },
      {
        text: "Central City",
        correct: false,
      },
    ],
  },
  {
    question: 'Who is known as the "Queen Bee" in the TV show "Gossip Girl"?',
    answers: [
      {
        text: "Serena van der Woodsen",
        correct: false,
      },
      {
        text: "Blair Waldorf",
        correct: true,
      },
      {
        text: "Jenny Humphrey",
        correct: false,
      },
      {
        text: "Georgina Sparks",
        correct: false,
      },
    ],
  },
  {
    question: "Which singer's real name is Stefani Joanne Angelina Germanotta?",
    answers: [
      {
        text: "Beyoncé",
        correct: false,
      },
      {
        text: "Lady Gaga",
        correct: true,
      },
      {
        text: "Rihanna",
        correct: false,
      },
      {
        text: "Katy Perry",
        correct: false,
      },
    ],
  },
  {
    question:
      'In the movie "The Matrix," what is the name of the main character played by Keanu Reeves?',
    answers: [
      {
        text: "Agent Smith",
        correct: false,
      },
      {
        text: "Morpheus",
        correct: false,
      },
      {
        text: "Trinity",
        correct: false,
      },
      {
        text: "Neo",
        correct: true,
      },
    ],
  },
  {
    question: 'Who is the creator of the animated TV series "The Simpsons"?',
    answers: [
      {
        text: "Seth MacFarlane",
        correct: false,
      },
      {
        text: "Mike Judge",
        correct: false,
      },
      {
        text: "Matt Groening",
        correct: true,
      },
      {
        text: "Trey Parker",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which actor played the role of Tony Stark/Iron Man in the Marvel Cinematic Universe?",
    answers: [
      {
        text: "Robert Downey Jr.",
        correct: true,
      },
      {
        text: "Chris Evans",
        correct: false,
      },
      {
        text: "Chris Hemsworth",
        correct: false,
      },
      {
        text: "Mark Ruffalo",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the name of the fictional school attended by Harry Potter and his friends?",
    answers: [
      {
        text: "Beauxbatons Academy of Magic",
        correct: false,
      },
      {
        text: "Hogwarts School of Witchcraft and Wizardry",
        correct: true,
      },
      {
        text: "Durmstrang Institute",
        correct: false,
      },
      {
        text: "Ilvermorny School of Witchcraft and Wizardry",
        correct: false,
      },
    ],
  },
  {
    question: 'Who is the lead vocalist of the band "Coldplay"?',
    answers: [
      {
        text: "Thom Yorke",
        correct: false,
      },
      {
        text: "Dave Grohl",
        correct: false,
      },
      {
        text: "Brandon Flowers",
        correct: false,
      },
      {
        text: "Chris Martin",
        correct: true,
      },
    ],
  },
  {
    question: 'In the TV show "Friends," which character is a chef?',
    answers: [
      {
        text: "Chandler Bing",
        correct: false,
      },
      {
        text: "Joey Tribbiani",
        correct: false,
      },
      {
        text: "Monica Geller",
        correct: true,
      },
      {
        text: "Ross Geller",
        correct: false,
      },
    ],
  },
  {
    question: 'Who wrote the "Harry Potter" book series?',
    answers: [
      {
        text: "J.K. Rowling",
        correct: true,
      },
      {
        text: "Stephanie Meyer",
        correct: false,
      },
      {
        text: "Suzanne Collins",
        correct: false,
      },
      {
        text: "George R.R. Martin",
        correct: false,
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

startQuiz(questions, questionElement, answerButtons, nextButton);
