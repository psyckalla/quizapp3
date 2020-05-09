'use strict'

const STORE = [{question: "How many wives did Henry VIII have?", 
options: ["A) 4", "B) 1", "C) 8", "D) 6"], 
correct: "D"}, 
{question: "Henry VIII was succeeded by:", 
options: ["A) Mary I of England", "B) Edward VI of England", "C) Elizabeth I of England", "D) Mary Queen of Scots"], 
correct: "B"},
{question: "Henry VIII annuled his marriage to:", 
options: ["A) Catherine of Aragorn", "B) Jane Seymour", "C) Anne Boleyn", "D) Anne of Cleves"], 
correct: "A"},
{question: "Which of Henry VIII's wives gave birth to his heir?",
options: ["A) Catherine of Aragorn", "B) Anne Boleyn", "C) Jane Seymour", "D) Anne of Cleves"],
correct: "C"},
{question: "Which wife did Henry VIII execute?",
options: ["A) Catherine of Aragorn", "B) Anne Boleyn", "C) Jane Seymour", "D) Anne of Cleves"],
correct: "B"}, {questionNumber: 0, correctScore: 0, incorrectScore: 0, inputVal: ''}];

// press start

function pressStart() {
    console.log('pressstart ran');
    $('.js-start-button').click(function() {
        $('.js-start-button').addClass('hidden');
        showQuestionAndOptions();
        whatQuestion();
    });

};

//show Next
function showNext() {
    pickThenLockOptions();
    $('.js-next-button').removeClass('hidden');

};

//press next
function pressNext() {
    $('.js-next-button').click(function() {
        whatQuestion();
        $('.js-next-button').addClass('hidden');
        showQuestionAndOptions();

    });
    
    console.log('pressnext ran');
};

//show question and options
function showQuestionAndOptions() {
    
    if (STORE[5].questionNumber < 5) {
        console.log(STORE[5].questionNumber);
        $('.main').html(`<p>${STORE[STORE[5].questionNumber].question}</p>
        <label for="test">Pick one option:</label><br>
        <input name="test" type="radio" value="A" />${STORE[STORE[5].questionNumber].options[0]}<br>
        <input name="test" type="radio" value="B" />${STORE[STORE[5].questionNumber].options[1]}<br>
        <input name="test" type="radio" value="C" />${STORE[STORE[5].questionNumber].options[2]}<br>
        <input name="test" type="radio" value="D" />${STORE[STORE[5].questionNumber].options[3]}`);
    } else {
        endQuiz();
    };
        console.log('showquestionandoptions ran');
    pickThenLockOptions();
    
};

//lock options
function pickThenLockOptions() {
    $('input[name="test"]').click(function() {
        $('input[name="test"]').prop('disabled', true);
        STORE[5].inputVal = $(this).val();
        correctOrIncorrect();
        
        
        showNext();
        console.log('true');
    });

};

function removeCorrection() {
   $('.js-next-button').click(function() {
    $('.js-answer').empty();
    

   });



};




//pick choice
function correctOrIncorrect() {
    const actualQuestion = STORE[5].questionNumber - 1 
        if ((STORE[5].inputVal) === STORE[actualQuestion].correct ) {
            $('.js-answer').html('You are correct!');
            STORE[5].correctScore += 1;
        }  else {
            $('.js-answer').html(`You are incorrect, the correct answer is ${STORE[actualQuestion].correct}`);
            STORE[5].incorrectScore += 1;

    console.log('pickchoice ran');
};
pressNext();
};



//update questionNumber
function whatQuestion() {
    
    
    let addedNumber = STORE[5].questionNumber += 1;
    $('.js-question-number').html(addedNumber);

};


//update correct incorrect choice
function updateCorrectOrIncorrectChoice() {
    console.log('updatecorrectorincorrectchoice ran');
};


//end quiz
function endQuiz() {
    const endOfQuizGrade = (STORE[5].correctScore/STORE[5].questionNumber) * 100
    $('.main').html(`Congratulations! You have finished the quiz. Your score is ${endOfQuizGrade}%`)
    restartQuiz();
    console.log('endquiz ran');
};



//restart quiz
function restartQuiz() {
    $('.js-reset').removeClass('hidden');
    $('.js-reset').click(function(){
        location.reload(true);
    })
    console.log('restartquiz');
};



function generateQuiz() {
    pressStart();
    removeCorrection();
    
    
};

$(generateQuiz());