const startBtn = document.getElementById('start-btn');
const questionsDiv = document.getElementById('qs-div');
const form = document.querySelector('form')

startBtn.onclick = function() { 
    startBtn.disabled = true; 
    for(let i = 0; i < questions.length; i++) {
        showQuestion(i);
    }
    showSubmitBtn();
}

const questions = [ 
    {   text: 'Choose a singing voice',
        name: 'voice',
        opts: ['Male', 'Female', 'Either']
    },
    {   text: 'Choose a genre',
        name: 'genre',
        opts: ['Country', 'Pop', 'Disney']
    },
    {   text: 'Choose a mood',
        name: 'mood',
        opts: ['Happy', 'Sad', 'Any']
    }
]

function showQuestion(i) {
    const qDiv = document.createElement('div');
    qDiv.classList.add('q-div');
    const qText = document.createElement('h3');
    qText.innerText = questions[i].text;
    qDiv.appendChild(qText);
    for(let j = 0; j < questions[i].opts.length; j++) {
        var opt = document.createElement('input');
        opt.type = 'radio';
        opt.classList.add('opt-btn');
        opt.id = questions[i].opts[j];
        opt.value = questions[i].opts[j];
        opt.name = questions[i].name;
        opt.required = true;
        var optLabel = document.createElement('label');
        optLabel.innerText = questions[i].opts[j];
        optLabel.setAttribute('for', questions[i].opts[j]);
        qDiv.appendChild(opt);
        qDiv.appendChild(optLabel);
        qDiv.innerHTML += "<br>";
    }
    questionsDiv.appendChild(qDiv);
    
}

function showSubmitBtn() {
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.innerText = 'Submit!';
    submitBtn.id = 'submit-btn'
    questionsDiv.appendChild(submitBtn);
}
