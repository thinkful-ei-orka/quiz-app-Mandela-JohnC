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
let questionsTemplate = function () {
  $('main').html(`   <container>
            <section class="question-section">
                <div class="question-div">
                    <h2>${store.questions.question[0]}</h2>
                </div>
                <div class="question-count">
                    <span id="count">Question: 3/5</span>
                    <span id="score">Score: 1/5</span>
                </div>
            </section>
            <section class="question-area">
                <div class="question-div">
                    <form class="question-list" action="submit">
                        <input type="button" value="dfgsdga gsdg fg fsdg fgdfgdfg " onclick="alert('test')">
                        <input type="button" value="b" onclick="alert('test')">
                        <input type="button" value="c" onclick="alert('test')">
                        <input type="button" value="d" onclick="alert('test')">


                    </form>
                </div>

            </section>
        </container>`)
}

let  finishTemplate = function () {
  $('main').html(`<container>
  <section class="question-section">

      <h2 id="finish-text">Nice!</h2>

  </section>
  <section class="final-score">
      <h3>You got: <span id="final-score-num">5/5</span> correct!</h3>

  </section>
  <section class="restart-buttons">

      <button class="restart-button" type="button">Restart</button>

  </section>
</container>`)
}
/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function render() {
if (store.quizStarted === false) {
  $('main').html(startPageTemplate())

} else if (store.quizStarted === true && store.questionNumber < store.questions.length) {
  $('main').html(questionsTemplate())
} else {
  $('main').html(finishTemplate())
}
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)






$(render())