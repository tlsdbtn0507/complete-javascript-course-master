'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const scrollBtn = document.querySelector('.btn--scroll-to');
const section1  = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const taps = document.querySelectorAll('.operations__tab');
const tapContainer = document.querySelector('.operations__tab-container');
const tapContent = document.querySelectorAll('.operations__content');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(e=>{
  e.addEventListener('click', openModal);
})

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

scrollBtn.addEventListener('click',function(e){
  //smooth Scroll(old fashion)
  // const s1coord = section1.getBoundingClientRect(); //=> position of element depending on view port

  // console.log(document.documentElement.clientHeight)//=>height of current view port
  // console.log(document.documentElement.clientWidth)//=>width of current view port

  // const winX = window.pageXOffset; //=>current scroll
  // const winY = window.pageYOffset; //=>current scroll

  // window.scrollTo(s1coord.left + winX ,s1coord.top + winY);

  // window.scrollTo({
  //   left: s1coord.left + winX ,
  //   top: s1coord.top + winY,
  //   behavior:'smooth'
  // });

  //smooth Scroll(new) 훨씬 간결하고 좋지만 최신 브라우저만 적용됨
  section1.scrollIntoView({behavior:'smooth'});
});


// document.querySelectorAll('.nav__link').forEach(
//   function (el) {
//     el.addEventListener('click',function(e){
//       e.preventDefault();
//       const hid = this.getAttribute('href');
//       document.querySelector(hid).scrollIntoView({behavior:'smooth'})
//     })
//   }
// ); 
//=> 이 방법은 요소의 수가 많을 때 비효율적이여서 부모 엘리먼트에 eventLisenter를 붙이고
//클릭 요소에 위임하는 것이 효율적

document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.classList.contains('nav__link')){
    const hid = e.target.getAttribute('href');
    document.querySelector(hid).scrollIntoView({behavior:'smooth'});
  } 
});
//=> 이벤트 위임


//querySelector와 closest는 서로 반대

//Tap
tapContainer.addEventListener('click',function(e){
  const id = e.target.closest('.operations__tab');

  if(!id) return;
  taps.forEach(e => e.classList.remove('operations__tab--active'));
  tapContent.forEach(e=>e.classList.remove('operations__content--active'));
  
  id.classList.add('operations__tab--active');
  document.querySelector(`.operations__content--${id.dataset.tab}`)
  .classList.add('operations__content--active');
});

//Fading
const fading = function(e,num){
  if(e.target.classList.contains('nav__link')){
    const clicked = e.target;
    const siblings = clicked.closest('.nav').querySelectorAll('.nav__link');
    const logo = clicked.closest('.nav').querySelector('img');

    siblings.forEach(e=>{
      if(e !== clicked)e.style.opacity = this;
    });
  logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', fading.bind(0.5));
nav.addEventListener('mouseout', fading.bind(1));
//addEventListener에 익명함수 하나가 필요해서 bind로 새 함수를 만듬


//sticky

// const section1Top = section1.getBoundingClientRect().top;
// window.addEventListener('scroll',function(){
//   if(this.window.scrollY > section1Top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// }) => scroll할때마다 함수 실행으로 효율이 매우매우매우매우 낮음

const navHeight = nav.getBoundingClientRect().height;

const stickyCall = function(entries){
  const [e] = entries;
    if(!e.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
};

const stickyOpt = {
  root:null,//뷰포트
  thresHold:[0, 0.2], // 뷰포트가 이동하고 타겟(section1)이 thresHold값 만큼 화면에 나오면 함수 실행
  //또한 thresHold값 만큼 화면에 나오지 않아도 실행 0은 완전히 나가면 실행
  rootMargin:`-${navHeight}px` // 타겟의 높이(90px, %이나 rem사용x)만 큼 빼서 공간을 활용함
};

const stickyApi = new IntersectionObserver(stickyCall,stickyOpt);
stickyApi.observe(header);

//Reveal section
const revealSec = function(entries,observer){
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);//이미 observe한 section을 다시 나타나지 않게 함
};

const sectionObs = new IntersectionObserver(revealSec,{ root:null, threshold:0.01,});

allSections.forEach(e=>{
  sectionObs.observe(e);
  e.classList.add('section--hidden');
});

//Lazy Loading
const imgTarget = document.querySelectorAll('img[data-src]');

const loadImg = function(es,obs){
  const [e] = es;
  if(!e.isIntersecting) return;
  e.target.src = e.target.dataset.src;
  
  e.target.addEventListener('load' , function(){
    e.target.classList.remove('lazy-img');
  });

  obs.unobserve(e.target);
}

const imgObser = new IntersectionObserver(loadImg,{ rood: null , threshold:0.1 ,rootMargin:`-100px` });

imgTarget.forEach(e=>{
  imgObser.observe(e)
});

//Img Slide
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const rBtn = document.querySelector('.slider__btn--right');
const lBtn = document.querySelector('.slider__btn--left');
const dotsContainer = document.querySelector('.dots');

let CurrentSlide = 0;
const maxSlide = slides.length;

const createDots = ()=>{
  slides.forEach((_,i)=>{
    dotsContainer.insertAdjacentHTML('beforeend',
    `<button class="dots__dot" data-slide="${i}"></button>`)
  });
};

const activeDot = function(e){
  document.querySelectorAll('.dots__dot')
  .forEach(e=>e.classList.remove('.dots__dot--active'));

  document.querySelector(`.dots__dot[data-slide="${e}"]`)
  .classList.add('dots__dot--active');
};

const gotoSlide = function(slide){
  slides.forEach((s,i)=> s.style.transform = `translateX(${100*(i-slide)}%)`);
};

const nextBtn = () => {
  CurrentSlide === maxSlide - 1 ? CurrentSlide = 0 : CurrentSlide++;
  gotoSlide(CurrentSlide);
  activeDot(CurrentSlide);
};

const prevBtn = () => {
  CurrentSlide === 0 ? CurrentSlide = maxSlide -1 : CurrentSlide--;
  gotoSlide(CurrentSlide);
  activeDot(CurrentSlide);
};


rBtn.addEventListener('click',nextBtn);
lBtn.addEventListener('click', prevBtn);

document.addEventListener('keydown',function(e){
  if(e.key === 'ArrowLeft') prevBtn();
  else if(e.key === 'ArrowRight') nextBtn();
});

dotsContainer.addEventListener('click',function(e){
  if(e.target.classList.contains('dots__dot')){
    const {slide} = e.target.dataset;
    gotoSlide(slide);
    activeDot(slide);
  };
});

const init  = () => {
  gotoSlide(0);
  createDots();
  activeDot(0);
}
init();



/////////////////////////////////////////////////////////////////
// const h1 = document.querySelector('h1');
// const enterH1 = (e) => {
//   alert('hi');
//   h1.removeEventListener('mouseenter',enterH1);
// };
// h1.addEventListener('mouseenter', enterH1); 참고로 mouseenter는 이벤트 버블x

//propagation
//e.currentValue ==== this이고
//이벤트 전파를 막으려면 e.stopPropagation()

console.log(document.documentElement)//=> 전체 HTML

console.log(header)//=> 전체 head
console.log(document.body)//=> 전체 body



const allBtns = document.getElementsByTagName('button'); //button이라는 태그를 가진 모든것+HTMLcollection
console.log(allBtns)

const allBtnss = document.getElementsByClassName('btn');//이 역시 HTMLcollection

//HTMLcollection와 nodelist는 서로 다르다
//nodelist는 HTML의 요소를 지우고 다시 호출 해도 변수로 선언했을 때 lists를 그대로 갖고 있음
//HTMLcollection는 반대로 요소를 지우고 다시 호출 하면 변경된 부분이 적용됨

// const createInsertAd = document.insertAdjacentHTML()

//element만들고 class추가하는법
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookied for improved functionality and analytics.'+ 
  '<button class="btn btn--close-cookie">Got it!</button>';

//버튼과 클래스 동시 생성

// header.prepend(message)
// header.append(message);

//deleting Dom
// message.remove();
message.addEventListener('click',function(){
  message.parentElement.removeChild(message);
})

//style
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message).width);//getComputedStyle() = element의 값을 가져옴

message.style.height = Number.parseInt(getComputedStyle(message).height) + 40 + 'px';
document.documentElement.style.setProperty('--color-primary','orange');

const logo = document.querySelector('.nav__logo');
console.log(logo);
console.log(logo.id);
console.log(logo.className);
//standard한 attribute는 잘 나오지만 non-standard한 attribute는 나오지 않음
//non-standard한 attribute는 getAttribute('non-standard한 attribute')하면 나옴

logo.setAttribute('wow','yeah'); //=> how to make attribute in js

//경로 (이미지)
console.log(logo.src); //=> 절대경로
console.log(logo.getAttribute('src')); //=> 상대경로

//경로(링크)
const link = document.querySelector('.nav__link--btn');

console.log(link.href);//=> 절대경로
console.log(link.getAttribute('href'));//=> 상대경로

//data attribute
console.log(logo.dataset.versionNumber);

//Class

logo.classList.add('a');
logo.classList.remove('a');
logo.classList.toggle('a');
logo.classList.contains('a');

// logo.className = 'b' => 이건 하면 안됨 클래스 전체를 재정의 하기 때문 차릴 위에 add()가 나음

//Dom lifeCycle
document.addEventListener('DOMContentLoaded',function(e){
  console.log(e);
}); //=>DOMContentLoaded은 브라우저가 html을 다 파싱 하고 나서 실행하도록함

window.addEventListener('load',function(e){
  console.log(e);
}); //=> 브라우저가 페이지를 불러낼 모든 작업을 마친 후 실행
