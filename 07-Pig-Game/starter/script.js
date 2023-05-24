'use strict';
const diceEL = document.querySelector('.dice');
const diceNew = document.querySelector('.btn--new');
const diceBtn = document.querySelector('.btn--roll');
const diceHold = document.querySelector('.btn--hold');

const currentScore0 = document.getElementById(`current--0`);
const currentScore1 = document.getElementById(`current--1`);
const score0 = document.getElementById(`score--0`);
const score1 = document.getElementById(`score--1`);
const player0 = document.querySelector(`.player--0`);
const player1 = document.querySelector(`.player--1`);

let scores, current, activePlayer, playing;

const reset = function () {
  scores = [0, 0];
  curScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  diceEL.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
reset();

const switchPlayer = function () {
  //방금까지 플레이한 플레이어의 점수 초기화
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //점수가 다른 플레이어에게 넘어갈때 0부터 시작하게함
  curScore = 0;
  //현재 플레이어가 0인가? 아니면 1 참이면 0
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

const rollDice = function () {
  if (playing) {
    let gameNum = Math.floor(Math.random() * 6) + 1;
    const img = document.querySelector('.dice');
    img.src = `dice-${gameNum}.png`;
    diceEL.classList.remove('hidden');
    //주사위를 계속 돌려서 값을 더하고 1이 나오면
    if (gameNum !== 1) {
      curScore += gameNum;
      //현재점수 부분을 현재 플레이어에게만 적용
      document.getElementById(`current--${activePlayer}`).textContent =
        curScore;
    } else {
      switchPlayer();
    }
  }
};

const holdScore = function () {
  if (playing) {
    scores[activePlayer] += curScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //총 점수가 10 넘으면 겜 끝
    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEL.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
};

diceBtn.addEventListener('click', rollDice);
diceHold.addEventListener('click', holdScore);
diceNew.addEventListener('click', reset);
