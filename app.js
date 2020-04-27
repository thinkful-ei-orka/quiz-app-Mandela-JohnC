'use strict';

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question:
        'The shift() method removes the first element from an array and does what next?',
      answers: [
        'returns the next element in the array',
        'returns a shrug emoji in Unicode Hex',
        'returns the removed element',
        'returns a copy of the array',
      ],
      correctAnswer: 'returns the removed element',
    },
    {
      question:
        'The which method calls a function once for each element in an array?',
      answers: ['forTheWin()', 'forEach()', 'forCamelot()', 'forEvery()'],
      correctAnswer: 'forEach()',
    },
    {
      question: 'The filter() method returns an array of what?',
      answers: [
        'all elements that fail the test function',
        'index numbers of all elements that pass the test function',
        'all elements that pass the test function',
        'all elements that are the specified data type',
      ],
      correctAnswer: 'all elements that pass the test function',
    },
    {
      question:
        'The map() method does what with a provided function as an argument?',
      answers: [
        'returns a map to El Dorado',
        'returns an object with the function name as the key and the original array as the value',
        'returns the orginal array with the results of the funcion called on each element',
        'returns a new array with the results of the funcion called on each element in the orginal array',
      ],
      correctAnswer:
        'returns a new array with the results of the funcion called on each element in the orginal array',
    },
    {
      question: 'The every() method does what for each element in an array?',
      answers: [
        'checks if elements pass a test as provided as a fucntion',
        'converts the elements to true or false depending the provided function',
        'creates a new array with each element being identical to the first element in the array',
        "creates a new array with converting each element to 'every'",
      ],
      correctAnswer: 'checks if elements pass a test as provided as a fucntion',
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
};

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
/**
 * Generate HTML Start Screen
 */
function startPageTemplate() {
  $('main').html(`
            <section class="question-section">

                <h2>Are you ready?</h2>

            </section>
            <section class="start-buttons">

                <button class="go-button" type="button">Let's Go</button>

            </section>
        `);
}

const currentQuestion = store.questions[store.questionNumber];
const currentAnswer = currentQuestion.answers;
function questionsTemplate() {
  $('main').html(`
            <section class="question-section">
                <div class="question-div">
                    <h2>${store.questions[store.questionNumber].question}</h2>
                </div>
                <div class="question-count">
                    <span id="count">Question: ${store.questionNumber + 1}/${
    store.questions.length
  }</span>
                    <span id="score">Score: ${store.score}/${
    store.questions.length
  }</span>
                </div>
            </section>
            <section class="question-area">
                <div class="question-div">
                    <form class="question-list">
                        <input type="submit" value="${
                          store.questions[store.questionNumber].answers[0]
                        }">
                        <input type="submit" value="${
                          store.questions[store.questionNumber].answers[1]
                        }">
                        <input type="submit" value="${
                          store.questions[store.questionNumber].answers[2]
                        }">
                        <input type="submit" value="${
                          store.questions[store.questionNumber].answers[3]
                        }">


                    </form>
                </div>

            </section>
        `);

  answerQuestion();
}

function finishTemplate() {
  $('main').html(`
  <section class="question-section">

      <h2 id="finish-text">Nice!</h2>

  </section>
  <section class="final-score">
      <h3>You got: <span id="final-score-num">${store.score}/${store.questions.length}</span> correct!</h3>

  </section>
  <section class="restart-buttons">

      <button class="restart-button" type="submit">Restart</button>

  </section>
`);
  restartGame();
}
/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function render() {
  if (store.quizStarted === false) {
    $('main').html(startPageTemplate());
    startGame();
  } else if (
    store.quizStarted === true &&
    store.questionNumber < store.questions.length
  ) {
    $('main').html(questionsTemplate());
  } else {
    $('main').html(finishTemplate());
  }
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
/**
 * Renders the main area of the game
 * Sets quizstarted to true on click
 */
function startGame() {
  $('.go-button').click(function () {
    store.quizStarted = true;

    render();
  });
}
/**
 * First checks if person has answered the question
 * When clicked if they haven't answered it will check their answer to the correctAnswer
 * If right, highlights green
 * If wrong, highlights red and highlights the correct in green
 */
function answerQuestion() {
  store.hasAnswered = false;
  $('input').click(function (event) {
    event.preventDefault();
    if (store.hasAnswered === true) {
      return;
    }
    store.hasAnswered = true;
    const guessedAnswer = event.currentTarget.value;
    const correctAnswer = store.questions[store.questionNumber].correctAnswer;
    if (guessedAnswer === correctAnswer) {
      store.score++;
      store.questionNumber++;

      $(event.currentTarget).addClass('correct');

      setTimeout(function () {
        render();
      }, 2000);
    } else {
      $(event.currentTarget).addClass('incorrect');
      $(`.question-list input[value='${correctAnswer}']`).addClass('correct');
      store.questionNumber++;

      setTimeout(function () {
        render();
      }, 2000);
    }
  });
}

/**
 * Re-renders the page to show how many answers correct
 * Asks if you want to play again
 * If the button is clicked, it resets quizStarted to false
 */
function restartGame() {
  $('.restart-button').click(function () {
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    render();
  });
}
function goQuiz() {
  render();
  startGame();
  restartGame();
}

$(goQuiz());
