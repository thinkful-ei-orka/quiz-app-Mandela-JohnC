'use strict';

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'The shift() method removes the first element from an array and does what next?',
      answers: [
        'returns the next element in the array',
        'returns a shrug emoji in Unicode Hex',
        'returns the removed element',
        'returns a copy of the array'
      ],
      correctAnswer: 'returns the removed element'
    },
    {
      question: 'The which method calls a function once for each element in an array?',
      answers: [
        'forTheWin()',
        'forEach()',
        'forCamelot()',
        'forEvery()'
      ],
      correctAnswer: 'forEach()'
    },
    {
      question: 'The filter() method returns an array of what?',
      answers: [
        'all elements that fail the test function',
        'index numbers of all elements that pass the test function',
        'all elements that pass the test function',
        'all elements that are the specified data type'
      ],
      correctAnswer: 'all elements that pass the test function'
    },
    {
      question: 'The map() method does what with a provided function as an argument?',
      answers: [
        'returns a map to El Dorado',
        'returns an object with the function name as the key and the original array as the value',
        'returns the orginal array with the results of the funcion called on each element',
        'returns a new array with the results of the funcion called on each element in the orginal array'
      ],
      correctAnswer: 'returns a new array with the results of the funcion called on each element in the orginal array'
    },
    {
      question: 'The every() method does what for each element in an array?',
      answers: [
        'checks if elements pass a test as provided as a fucntion',
        'converts the elements to true or false depending the provided function',
        'creates a new array with each element being identical to the first element in the array',
        'creates a new array with converting each element to \'every\''
      ],
      correctAnswer: 'checks if elements pass a test as provided as a fucntion'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
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
let startPageTemplate = function() {
  $('main').html(`<container>
            <section class="question-section">

                <h2>Are you ready?</h2>

            </section>
            <section class="start-buttons">

                <button class="go-button" type="button">Go</button>
                <button class="scared-button" type="button">No I'm scared</button>
            </section>
        </container>`)

}

let currentQuestion = store.questions[store.questionNumber]
let currentAnswer = currentQuestion.answers
let questionsTemplate = function () {
  $('main').html(`<container>
            <section class="question-section">
                <div class="question-div">
                    <h2>${store.questions[store.questionNumber].question}</h2>
                </div>
                <div class="question-count">
                    <span id="count">Question: ${store.questionNumber + 1}/${store.questions.length}</span>
                    <span id="score">Score: ${store.score}/${store.questions.length}</span>
                </div>
            </section>
            <section class="question-area">
                <div class="question-div">
                    <form class="question-list">
                        <input type="submit" value="${store.questions[store.questionNumber].answers[0]}">
                        <input type="submit" value="${store.questions[store.questionNumber].answers[1]}">
                        <input type="submit" value="${store.questions[store.questionNumber].answers[2]}">
                        <input type="submit" value="${store.questions[store.questionNumber].answers[3]}">


                    </form>
                </div>

            </section>
        </container>`)
  answerQuestion();
}

let  finishTemplate = function () {
  $('main').html(`<container>
  <section class="question-section">

      <h2 id="finish-text">Nice!</h2>

  </section>
  <section class="final-score">
      <h3>You got: <span id="final-score-num">${store.score}/${store.questions.length}</span> correct!</h3>

  </section>
  <section class="restart-buttons">

      <button class="restart-button" type="submit">Restart</button>

  </section>
</container>`)
  restartGame()
}
/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function render() {
if (store.quizStarted === false) {
  $('main').html(startPageTemplate())
  startGame();

} else if (store.quizStarted === true && store.questionNumber < store.questions.length) {
$('main').html(questionsTemplate());



} else {
  $('main').html(finishTemplate())
}
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

let startGame = function () {

  $('.go-button').click(function () {
    store.quizStarted = true;

    render()


  })

}

let answerQuestion = function() {
  $('form input').click(function (event) {
    event.preventDefault();
    let guessedAnswer = event.currentTarget.value;
    console.log(guessedAnswer)
  console.log(event)

  if (guessedAnswer === store.questions[store.questionNumber].correctAnswer) {
    console.log('yep')
    store.score++;
    store.questionNumber++;
    console.log(store.score + " " + store.questionNumber);
    render()

  } else {
    console.log('nope')

    store.questionNumber++;
    console.log(store.score + " " + store.questionNumber);
    render()
  }
  })


}

let restartGame = function() {

  $('.restart-button').click(function () {
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    console.log("test")
    render()

  })
}
function goQuiz() {
  render();
  startGame();
  restartGame();
}

$(render)