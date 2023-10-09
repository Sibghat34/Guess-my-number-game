'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Answer...';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/

let secreatNo = Math.trunc(Math.random()*20) +1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click' , function(){
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent = 'No Number..!'
    }
    else if(guess === secreatNo){
        document.querySelector('.message').textContent = 'Correct Number.....'
        document.querySelector('.number').textContent = secreatNo;


        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '25rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    else if(guess !== secreatNo){
        if(score > 1){
            document.querySelector('.message').textContent = guess > secreatNo ? 'Heigher.....' : 'Lesser......';
        score--;
        document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = 'You Loose....'
        document.querySelector('.score').textContent = 0;
    }
    
    }
});

document.querySelector('.again').addEventListener('click' , function(){
    score = 20;
    secreatNo = Math.trunc(Math.random()*20) +1;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
})