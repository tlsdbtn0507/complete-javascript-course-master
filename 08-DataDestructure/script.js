'use strict';

// Data needed for a later exercise

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto','Pizza', 'Pasta', 'Risotto','ragu','kimchi'],

  openingHours: {
    mon: {
      open: 12,
      close: 22,
    },
    tue: {
      // open: 12,
      // close: 22,
    },
    wed: {
      // open: 12,
      // close: 22,
    },
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
    sun: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  //es6로 인해 :function을 생략해도됨
  order(firstIndex, secondIndex){
    return [this.starterMenu(firstIndex),this.mainMenu(secondIndex)];
  },
  // order: function(firstIndex, secondIndex){
  //   return [this.starterMenu(firstIndex),this.mainMenu(secondIndex)];
  // },
  whatOrdered: function (ind1,ind2,ind3,ind4){
    return `you have ordered ${ind1},${ind2},${ind3},and${ind4}`
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const {name, openingHours, categories} = restaurant
console.log(name, openingHours, categories);

const {name:restaurantName, openingHours:hours, categories:tag} = restaurant
console.log( 'rename Destructure', 'restaurantName:',restaurantName, 'hours:',hours, 'tag:',tag);

//미리 구조분해 할 객체의 이름에 디폴트값 선언 가능
const { menu = {}} = restaurant
console.log(menu)

//변수 변경 하는 법
let a = 111;
let b = 222;

const obj = {a:1,b:2};

({a,b} = obj);
console.log(a,b)

//중첩객체 구조분헤
const {fri:{open,close}} = restaurant.openingHours;
const {fri} = restaurant.openingHours;
console.log(fri)
console.log(open,close);

//spread operator
const arr = [4,5,6];
const newArr = [1,2,...arr]

console.log(newArr)

//copying array (swallow copy)
const menus = [...restaurant.mainMenu];
const allMenus = [...restaurant.starterMenu,...restaurant.mainMenu]

console.log(...allMenus)

//얇은 복사는 배열, 문자열, 맵, set이 가능하지만 객체는 안됨
const str = 'starbucks';
console.log(...str)
console.log(str.length)
for(let i = 0; i < str.length; i++){
  console.log(`all letters :${str[i]}`)
}

// const orders = [
//   prompt('order1'),
//   prompt('order2'),
//   prompt('order3'),
//   prompt('order4'),
// ]

// console.log(restaurant.whatOrdered(...orders))

// 객체 복사
const newRes = {...restaurant, founder:'shin', foundedIn:1997};
newRes.name = 'wow';

console.log(newRes.name === restaurant.name)
//name은 다른 str을 지정 해서 다르지만
console.log(newRes.location === restaurant.location)
//location은 따로 지정을 안했기에 true

//rest parameter(보통 함수의 parameter로 사용)
//rest는 spread와 다르게 ...을 =의 오른쪽에 써서 새로운 객체 나 배열에 담는 것
const { sat, sun, ...weekdays} = restaurant.openingHours;
console.log(weekdays, sat,sun)

//rest와 spread의 함수 사용 예제
const add =  function(...numbers){
  let sum = 0;
  for(let i = 0; i<numbers.length; i++) sum += numbers[i];
  console.log(sum);
}

const xArr = [1,2,3,4,5,6,7,8,9]
add(...xArr);

const gettingOrder = function(){
  // const temps = prompt('welcome to my restaurant. how can i help you?');
  if(temps === null){
    alert('okay, bye');
    return
  } else if(temps === ''){
    gettingOrder();
  } else if(temps !=='') {
    getStarterOrder(restaurant.starterMenu)
  }
}

const getStarterOrder = function(...menus){
  const check = confirm(`we have startmenus like ${menus}. which one would you like?`)
  if(check){
    // const orders = prompt('order1');
    getMainOrder(orders,restaurant.mainMenu)
  } else{
    alert('okay bye')
  }
}

const getMainOrder = function(prevOrder, ...menus){
  const check = confirm(`okay, you have ordered ${prevOrder} as starter, how about main?`);
  if(check){
    // const order = [prompt(`we have ${menus} as main dish, what would you like?`)];
    lastCheck(order,prevOrder)
  }
}

const lastCheck = function(order,prevOrder){
  // const total = [......order,...prevOrder]
  console.log(order,prevOrder)
  // alert(`okay, you have ordered ${total}. have a nice time`)
}
// gettingOrder()

// js에서 ||는 모든 데이터 타입에 쓸 수 있고 모든 데이터 타입을 반환하는데
// 먼저 ||의 왼쪽 값을 판별하고 거짓이면 그 다음으로 넘어가는데 가는 도중 true값이 걸리면 도중에 멈추고 
// true값을 반환함 또한 계속 왼쪽으로 넘어가다 끝까지 false일 경우 마지막 값을 return

// 반대로 &&은 왼쪽 값이 거짓으로 판별 되면 그 값을 반환하고
// 참일 경우 계속 넘어가다가 마지막 역시 true라면 마지막 값을 return

console.log(`---------OR-----------`)
console.log(true||0)
console.log(''||0)
console.log(undefined||null)
console.log(undefined||null||''||0||false)
console.log(undefined||null|| 'hi' ||''||0||false)

console.log(`---------AND-----------`)
console.log(true&&0)
console.log(''&&0)
console.log(undefined&&null)
console.log(undefined&&null&&''&&0&&false)
console.log(undefined&&null&& 'hi' &&''&&0&&false)
console.log('hi' && 1 && 100 && true && 'shin')

//삼항 연산자를 쓰는 것 보다 ||를 써서 코드를 간결하게 할 수 있음
const guest1 = restaurant.guests ? restaurant.guests : 10;
const guset2 = restaurant.guests || 10;
console.log(guest1,guset2)

//if를 쓰는 것 보다 &&를 써서 코드를 좀 더 간결하게 쓸 수 있음
if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms','spinach')
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');

// &&와 || 둘다 간결하게 짤 수는 있어도 가독성은 떨어 트릴 수 있으니 적당히 쓰자
// ||과 비슷하게 ??가 있는데 차이점은 ||은 거짓값 전체를 체크하지만 
// ??은 nullish(null or undefined)를 체크함
// ??와 비슷 하게 

// for of loop using entries
const allOfMenus = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const [i,el] of allOfMenus.entries()){
  console.log(`${i+1} : ${el}`)
}

// optional chaining
// optional chaining은 ?의 왼쪽 값의 존재유무 판별 후 실행
// 배열, 객체, 메소드 사용 가능

// optional chaining obj
// console.log(restaurant.openingHours.mun.open) //err
console.log(restaurant.openingHours.mun?.open) // optional chaining으로 undefined

// 객체의 키 값을 찾아서 배열
const days = Object.keys(restaurant.openingHours)

for(const day of days){
  const openingTime = restaurant.openingHours[day]?.open 
  openingTime && console.log(`we open in ${day}day ${openingTime}`);
  // openingTime || console.log(`we open 24hours in ${day}!`)
  if(openingTime === 0) console.log(`we open 24hours in ${day}!`)
  openingTime ?? console.log(`we don't open ${day}`);
} 

// 객체의 value 만 찾기
const value = Object.values(restaurant.openingHours)
console.log(value)

// 객체의 entries
const entries = Object.entries(restaurant.openingHours);
console.log(...entries);

// entries를 구조 분해도 가능
for(const [key, {open,close}] of entries){
  console.log(key, open, close)
}

// Set
const strs = new Set('abcdefghijklmn');
console.log(strs)
console.log(typeof strs)

const menuSet = new Set(restaurant.mainMenu)
console.log(menuSet.size)// array와 다르게 겹치는 요소는 제거 함 size역시 length와 달리 중복 요소 감안
console.log(menuSet.has('Pizza'))
console.log(menuSet.has('bread')) // .has는 말그대로 요소의 유무 판별
menuSet.add('Garlic Bread')
menuSet.add('Garlic Bread') // add를 두번 해도 중복되므로 하나만
menuSet.delete('Risotto')
// menuSet.clear() delete all
console.log(menuSet)

//set은 배열 처럼 [0]을 넣어서 특정 값을 조회 할 수 없음
//그래서 [...]로 배열을 만듦
const menuArr = [...new Set(restaurant.mainMenu)];
console.log(menuArr);
console.log(new Set('shinyusu').size);

//map

const macBurgers = new Map();
macBurgers.set(1,'Bicmac')
macBurgers.set(2,'cheeseBurger')
macBurgers.set(3,'chickenSandWich');
macBurgers.set(true,"opened");
macBurgers.set('burgers',['Bicmac','cheeseBurger','chickenSandWich'])
macBurgers.set('location', 'gasan');
// macBurgers.set([1,2,3],test)

console.log(macBurgers.get('location'), macBurgers.get('burgers'))

const index = 4
const burgerCheck = macBurgers.get('burgers')
// .has(macBurgers.get(index))

console.log(new Set(burgerCheck).has(macBurgers.get(index)))
// console.log(macBurgers.get([1,2,3])) // err 왜냐하면 위에 key로 지정된 배열[1,2,3]이 서로 다르기 때문
//그를 해결 하기 위해선 [1,2,3]을 변수에 저장해야함

macBurgers.set(document.querySelector('h1'),'h1');//객체에도 저장이 되기 때문에 dom에 접근이 가능함
console.log(macBurgers)

//map은 위에처럼 set으로 작성해도 되지만 아예 new Map(['1',123],['2',234])처럼 배열을 넣어서 할수 있고
//아래 처럼 원래 있던 객체(혹은 배열)를 new Map으로 아래처럼 만들 수 있음
const hoursMap = new Map(Object.entries(restaurant.openingHours))
console.log(hoursMap)

//simple Quiz
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question.get('question'))
for(const [key,value] of question){
  if(typeof key === 'number')console.log(`Answer${key} : ${value}`)
}

// const answer = Number(prompt('Your Answer?'))
const answer = 3

if(answer !== 3){
  console.log(question.get(false))
} else console.log(question.get(true))

// console.log(question.get(question.get('correct') === answer))

//map => Array
console.log([...question])

//데이터 분류
// if(데이터 needs only value as list) 데이터 = set or array
//  if(데이터 needs to be manipulate or contain duplicate) 데이터 =  array
//  if(데이터 needs unique value to work or to worl high perfomance such as search,delete etc 
//  and need to delete duplicate) 데이터 = set
// if (데이터 needs key and value) 데이터 = object or map
//  object = easy to use such as (. or []) and traditional
//  map = better performance and key of map can have any data type and easy to compute and
//  iterate
//  if(데이터 needs to include function and be worked with json) 데이터 = object
//  if(데이터 simply need key and value or needs key is not string) 데이터 = map

//String
const maker = 'porsche'
const productName = 'panamera'

console.log(maker.indexOf('r')); // parameter가 있는 위치 같은 글자의 마지막은 lastindexof
                                 // parameter로 단어 전체를 줄 수 있는데 대소문자를 따짐
console.log(maker.slice(2)); //2 다음부터 글자들 출력 2 전까지 글자들 삭제 기존의 maker단어는 변함 x 
console.log(maker.slice(2,4)); // 2개의 parameter가 오면 그 두 parameter사이의 글자만 (substr) 출력
console.log(maker.slice(-1)); // e가 나옴으로 음수를 하면 음수의 숫자 만큼 뒤에서 숫자를 추출

// const fullName = [prompt('firstName?'),prompt('lastName?')];

// const [firstName,lastName] = fullName;


// const makeFirstUpper = function(str){
//   const originalStr = str.toLocaleLowerCase();
//   const first = str.slice(0,1)
//   const result = first.toUpperCase() + originalStr.slice(1)
//   return result
// }
// console.log(makeFirstUpper(firstName),makeFirstUpper(lastName));

const announcement = 'All passangers come to boarding door 23. Repeat door 23'
console.log(announcement.replace(/door/g, 'gate'));
// console.log(announcement);
//replace를 그냥 'door'라고만 쓰면 Repeat 뒤에 door를 바꾸지 못함 그래서 정규표현식을 사용

const phoneNum = ['010','1234','1234'].join('-');
console.log(phoneNum);
//join에 ' '이나 -을 쓰면 split의 반대처럼 해당 문자열들을 하나로 묶어줌

const makeCreditNum = function(nums){
  const str = nums+'';
  const last = str.slice(-4);
  return last.padStart(str.length,'*')
}
console.log(makeCreditNum(12341234));
console.log(makeCreditNum(1241234125123));
console.log(makeCreditNum('123124232353121'));

const flights =
  `_Delayed_Departure;fao93766109;txl2133758440;11:25
  +_Arrival;bru0943384722;fao93766109;11:45
  +_Delayed_Arrival;hel7439299980;fao93766109;12:05
  +_Departure;fao93766109;lis2323639855;12:30`;

const flightsArr = flights.split('+');
// console.log(flightsArr)
for(const arr of flightsArr){
  const before = arr.replace('\n','');
  // const status = before.split(';')[0].replace(/_/g, ' ')
  // const aboard = before.split(';')[1].slice(0,3).toUpperCase()
  // const destination = before.split(';')[2].slice(0,3).toUpperCase() 
  // const time = before.split(';')[3].replace(":","h").trim()

  let [ status ,aboard, destination, time] = before.split(';')

  status = status.replace(/_/g,' ');
  aboard = aboard.slice(0,3).toUpperCase();
  destination = destination.slice(0,3).toUpperCase();
  time = time.replace(":","h").trim();

  const result = 
  `${status.startsWith(' Delayed') ? 
  '🔴' : ''}${status} from ${aboard} to ${destination} (${time})`
  console.log(result.padStart(44))
}
console.log('avv'.padStart(10))