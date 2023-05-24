'use strict';

// const mescheck = document.querySelector('.message'); //when class call .

// //Correct Number을 출력
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13; // 중앙 네모칸의 ? 부분
// document.querySelector('.score').textContent = 20; //화면의 스코어를 20으로정함

// document.querySelector('.guess').value; //guess에 들어올 값 칸

const message = document.querySelector('.message');
const scroeInput = document.querySelector('.score');
const check = document.querySelector('.check');
const replay = document.querySelector('.again');
const gameNumber = document.querySelector('.number');
const body = document.querySelector('body');
const playGuess = document.querySelector('.guess');
const highScore = document.querySelector('.highscore');

let number = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let gameScore = 20;

const replayFunc = function () {
  gameScore = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  scroeInput.textContent = 20;
  message.textContent = 'Start guessing...';
  gameNumber.textContent = '?';
  body.style.backgroundColor = '#222';
  playGuess.value = '';
  gameNumber.style.width = '15rem';
};

const resultFunc = function () {
  const guess = Number(playGuess.value);

  // when no inputs
  if (!guess) {
    message.textContent = 'not correct';

    // player wins
  } else if (guess === number) {
    message.textContent = 'Correct Number';
    gameNumber.textContent = number;
    body.style.backgroundColor = '#60b347';
    gameNumber.style.width = '30rem';
    //css를 js에서 손볼 때 무조건 스트링으로 써야함
    if (gameScore > highscore) {
      highscore = gameScore;
      highScore.textContent = highscore;
    }
    // guess is wrong
  } else if (guess !== number) {
    if (gameScore > 1) {
      message.textContent = guess > number ? 'Too high' : 'Too low';
      gameScore--;
      scroeInput.textContent = gameScore;
    } else {
      message.textContent = 'You lost the game';
    }
  }
};

replay.addEventListener('click', replayFunc);
check.addEventListener('click', resultFunc);
// guess is too high
//   } else if (guess > number) {
//     if (gameScore > 1) {
//       message.textContent = 'Too high';
//       //   gameScore = 20;
//       gameScore--;
//       scroeInput.textContent = gameScore;
//     } else {
//       message.textContent = 'You lost the game';
//     }

//     //guess is too low
//   } else if (guess < number) {
//     if (gameScore > 0) {
//       message.textContent = 'Too low';
//       //   gameScore = 20;
//       gameScore--;
//       scroeInput.textContent = gameScore;
//     } else {
//       message.textContent = 'You lost the game';
//     }
