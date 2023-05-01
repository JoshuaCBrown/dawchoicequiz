const questions = [
    'which DAW do you like best?',
    'which DAW do you hate best?',
]

const answers = [
    ['ableton',
    'fl studio',
    'logic',],
    ['reason',
    'gig perfomer',
    'myDAW',
    'bitreason',],
]

const answerKey = [
    [
        [1,0,0],
        [0,1,0],
        [0,0,1],
    ],
    [
        [0,3,3,3],
        [3,0,3,3],
        [3,3,0,3],
        [3,3,3,0],
    ],
    
]

let quizPosition = 0;

const questionText = document.querySelector('.questionText');
const answerText = document.querySelector('.answerText');

questionText.textContent = questions[quizPosition];
answerText.innerHTML = buttonCreator(quizPosition);

function buttonCreator(qp) {
    let output = '';
    for (i = 0; i < answers[qp].length; ++i) {
        output += '<li><button id="' + i + '">' + answers[qp][i] + '</button>';
    }
    console.log(output);
    return output;
}


answerText.addEventListener('click', function(e) {
    if (e.target && e.target.matches('button')) {
        console.log(e.target.id);
    };
});

