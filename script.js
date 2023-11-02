'use strict';

//TODO:
//BUGS🐞:
//FIX AGAIN BUTTON: 1.SCORE DOES NOT RESET 2.SECRET NUMBER DOES NOT RESET

//FEATURES:
// IMPLEMENT HIGHCORE FEATURE

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let number;

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.again').addEventListener('click', function () {
  score = document.querySelector('.score').textContent;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.message').textContent = 'Start guessing...';
  number = Number((document.querySelector('.guess').value = undefined));
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  number = Number(document.querySelector('.guess').value);

  //If No Score is entered
  if (!number) {
    document.querySelector('.message').textContent = 'Guess a number😐❗️';
  }
  //If Score Is Right
  else if (number === secretNumber) {
    document.querySelector('.message').textContent = 'You won the guess❗️🥳';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }
  //If Score Is Higher
  else if (number > secretNumber) {
    //You Failed!
    if (score < 1) {
      document.querySelector('.message').textContent = 'You lost😪';
    } else {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  //If Score Is Less
  else if (number < secretNumber) {
    //You Failed!
    if (score < 1) {
      document.querySelector('.message').textContent = 'You lost😪';
    } else {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
