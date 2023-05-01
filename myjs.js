//questions shown to user
const questions = [
    'which DAW do you like best?',
    'which DAW do you hate best?',
];

//answers shown to user for each question
const answers = [
    ['ableton',
    'fl studio',
    'logic',
    'ok'],
    ['reason',
    'gig perfomer',
    'myDAW',
    'bitreason',],
];

//values to update userScore with when the answer is chosen. If a given answer results in an option being disqualified, the 
//value is set to undefined to avoid possible reintroduction of previously disqualified answers in the final results
const answerKey = [
    [
        [undefined,0,0],
        [0,1,0],
        [0,0,1],
        [2,2,2],
    ],
    [
        [0,3,3,3],
        [3,0,3,3],
        [3,3,0,3],
        [3,3,3,0],
    ],
    
];
//array for running tally of user score
const userScore = [0,0,0,0];


const questionText = document.querySelector('.questionText');
const answerText = document.querySelector('.answerText');



//where user is in quiz
let quizPosition = 0;

//call function to update question and answers from the jump
buttonCreator(quizPosition);


//updates quiz position question and answers
// function updateQs(qp) {
//     questionText.textContent = questions[qp];
//     questionText.classList.add('new-text');
//     questionText.style = 'opacity: 1';
//     console.log(questionText.className);
//     // answerText.innerHTML = buttonCreator(qp);
//     buttonCreator(qp);
// }

//creates button with id 'i' for each possible response depending on how many available responses there are

function removeButtons() {
    const btns = document.querySelectorAll('.new-box');
    console.log(btns);
    for (i = 0; i < btns.length; ++i) {
        let thisBtn = document.getElementById(i);
        answerText.removeChild(thisBtn);
    }
    // questionText.classList.remove('new-text');
    const answr = document.querySelector('.new-text');
    questionText.removeChild(answr);

}

function buttonCreator(qp) {
    for (i = 0; i < answers[qp].length; ++i) {
        const newBtn = document.createElement('button');
        const t = document.createTextNode(answers[qp][i]);
        newBtn.appendChild(t);
        answerText.appendChild(newBtn);
        newBtn.classList.add('new-box');
        newBtn.id = i;
    }
    const newEl = document.createElement('div');
    const newQ = document.createTextNode(questions[qp]);
    newEl.appendChild(newQ);
    questionText.appendChild(newEl);
    newEl.classList.add('new-text');
}
// function buttonCreator(qp) {
//     let output = '';
//     for (i = 0; i < answers[qp].length; ++i) {
//         output += '<li><button id="' + i + '">' + answers[qp][i] + '</button>';
//     }
//     console.log(output);
//     buttonStyler();
//     return output;
// }

// function buttonStyler() {
//     let btns = document.querySelectorAll('button'), i;
//     for (i = 0; i < btns.length; ++i) {
//         btns[i].className = 'new-box';
//         console.log(btns[i].className);
//     }
// }

//creates event listener for each answer button created, calls logResponse(button id) when button clicked
answerText.addEventListener('click', function(e) {
    if (e.target && e.target.matches('button')) {
        logResponse(e.target.id);
    };
});

//called when answer button clicked, changes quizPosition and computes running score in userScore
function logResponse(num) {
    console.log(userScore);
    for (i = 0; i < answerKey[quizPosition][num].length; ++i) {
        userScore[i] += answerKey[quizPosition][num][i];
    }
    console.log(userScore);
    removeButtons();
    ++quizPosition;
    buttonCreator(quizPosition);
}
