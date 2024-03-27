function startQuiz(questions, questionElement, answerButtons, nextButton) {
  // initalize variables to keep track of the current question index and the score
  let currentQuestionIndex = 0;
  let score = 0;

  // set initial button texts
  nextButton.innerHTML = "Next";

  // display the first question
  showQuestion();

  // function to display the current question
  function showQuestion() {
    // reset the state of the quiz interface
    resetState();

    // get the current question object
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    // display the question number and text
    questionElement.innerHTML =
      questionNumber + ". " + currentQuestion.question;

    // display the answer options for the current question
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn-answer");
      answerButtons.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      // add event listener to handle answer selection
      button.addEventListener("click", selectAnswer);
    });
  }

  // function to reset the state of the quiz interface
  function resetState() {
    nextButton.style.display = "none";

    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }

  // function to handle answer selection
  function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    // add styling to the selected button based on correctness
    if (isCorrect) {
      selectedButton.classList.add("correct");
      score++;
    } else {
      selectedButton.classList.add("incorrect");
    }

    // disable all answer buttons after selection
    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }

      button.disabled = true;
    });

    // display the next button
    nextButton.style.display = "block";
  }

  // function to display the final score and options to restart or go to the homepage
  function showScore() {
    resetState();
    // display the final score
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Take the quiz again!";
    nextButton.style.display = "block";
  }

  // function to handle the "Next" button click
  function handleNextButton() {
    currentQuestionIndex++;

    // if there are more questions, display the next question
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      // if all questions have been answered, display the final score
      showScore();
      // remove the event listener for the "Next" button
      nextButton.removeEventListener("click", handleNextButton);
      // attach a new one to handle restarting the quiz
      nextButton.addEventListener("click", startQuizAgain);
    }
  }

  // function to restart the quiz
  function startQuizAgain() {
    // reset quiz state for next attempt
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
    // restore "Next" button text
    nextButton.innerHTML = "Next";
    // revert event listener to original behavior
    nextButton.removeEventListener("click", startQuizAgain);
    nextButton.addEventListener("click", handleNextButton);
  }

  // event listener for the "Next" button
  nextButton.addEventListener("click", handleNextButton);
}
