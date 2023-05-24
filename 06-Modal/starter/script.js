'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden'); //modal의 hidden을 삭제해서 띄움
  overlay.classList.remove('hidden'); //css의 overlay(블러처리)실행
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

//그래서 e.key 가 Escape라면 closeModal함수를 실행하는 함수 생성
const escapeKey = function (e) {
  if (e.key === 'Escape') closeModal();
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//키보드 이벤트는 전역 이벤트
//그냥 keydown만 쓰면 모든 키가 적용되서 아무키나 눌러도 실행됨
//아래 이벤트 리스너에 e를 매개변수로 준 함수를 실행해서 e라는 오브잭트를 보여주면
//누른 키의 정보를 알수 있음
document.addEventListener('keydown', escapeKey);
