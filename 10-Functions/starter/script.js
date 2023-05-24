'use strict';

const orderArr = [];

const gettingOrder = function(food,orderNum = 1,price = 5000){
    orderArr.push({food,orderNum,price})
    console.log([...orderArr])
}

gettingOrder('burger',1,5000);
gettingOrder('frie');

const person = {
    name: '신은수',
    gender : 'female'
}

const putMrMrs = function(str){
    const name = str.slice(1);
    return name
}

const checkGender = function(person){
    return person.gender === 'male' ? 'Mr' : 'Mrs'
}

const greeting = function (person,fn){
    console.log(`Hi, ${checkGender(person)}${fn(person.name)}`)
    console.log(fn.name)
}
greeting(person,putMrMrs)

const badWords = ['fuck', 'bitch' , '새끼', '병신', '씨발', '좆', '애미' , '썅'];

const filter = function(str){
    let result
    for(const word of badWords){
        if(str.includes(word)){
            result = str.replace(word, '*'.repeat(word.length))
        } else result = str
    }
    return result
}

const filterWords = function(str , fn){
    console.log(fn(str))
}

// filterWords(prompt('아무 말이나 해보세요 say something'), filter);

// my Sollution
const greet = (greeting)=>{
    return (name) => {
        console.log(`${greeting} ${name}`)
    }
}

// short way
// const greet = greeting => name => console.log(`${greeting} ${name}`)

const greetHey = greet('hey')

greetHey('yusu')
greet('hi')('yusu')

const marriot = {
    hotelName : 'Ryse Autograph',
    hotelLevel : 4,
    location : 'hongdae',
    bookings:[],
    booking(roomNum, name, duration){
        const book = {roomNum, name, duration}
        this.bookings.push(book);
        const [start , end] = duration.split('~')
        const welcomeWord = `Hi ${name}, welcome to ${this.hotelName} have a good time during ${start} to ${end}`
        console.log(welcomeWord)
    }
}

marriot.booking(256,'shinyusu', '2023/4/12~2023/4/21');
marriot.booking(236,'leeyoungshin', '2023/4/12~2023/4/21');
console.log(marriot.bookings)

const Shilla = {
    hotelName : 'Shilla',
    hotelNum : 5,
    location : 'sogong',
    bookings:[]
};

const ShillaBook = marriot.booking;

//메서드를 빼내서 다른 객체에 포함시켜서 사용 하려면 원하는 메서드를 변수에 저장한 다음 변수.call()에 첫번째 인자로
//this로 쓸 객체를 쓴 다음 해당 메서드의 인자들을 넣으면 됨
ShillaBook.call(Shilla,1054,'shineunsu','2023/5/12~2023/6/12');

//apply 적용
//apply를 통해 좀 더 간단하게 해결 가능
const hotelBookData = [123,'kimMinSu' , '2023/5/5~2023/5/6'];
ShillaBook.apply(Shilla,hotelBookData)

//하지만 apply가 상대적으로 구식 문법이라 spread로 대처 가능
const hotelBookData2 = [234,'kokurye' , '2023/5/4~2023/5/7']
ShillaBook.call(Shilla,...hotelBookData2)


//Bind Method
//메서드를 변수에 담고 원하는 객체에 bind하면 해당 함수를 반환 하므로 변수에 저장하고 사용
const book = marriot.booking;
const bookSh = book.bind(Shilla);
bookSh(555, 'amugae' , '2023/5/12~2023/6/12')

//혹은 바인드 할때 인수를 추가해서 호출시 파라미터의 개수를 줄일 수 있음
const bookSh123 = book.bind(Shilla,123)
bookSh123('shinyusu','2023/5/7~2023/5/8')

console.log(Shilla)

//bind를 eventHandler와 같이 쓰기
const hanwha = {
    hotelName : 'plaza',
    hotelNum : 5,
    location : 'sogong',
    bookings:[]
}

hanwha.rooms = 300;
hanwha.lookAvailableRooms = function(){
    this.rooms--;
    console.log(this.rooms)
}

const bookHw = book.bind(hanwha);
document.querySelector('.buy').addEventListener('click',
//  function(){
//    const hotelBookData = [
//         prompt('which room number do you want?'),
//         prompt('what is your name?'),
//         prompt('how long do you want to stay?')
//     ];
//     bookHw(...hotelBookData)
// }
hanwha.lookAvailableRooms.bind(hanwha)
   
)

//small quiz
const addTax = value => vat => console.log(value + value * vat);
addTax(100)(0.1)

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer: function(){
        const answer = parseInt(prompt(
            this.question + '\n' +
            this.options.join().replace(/,/g,'\n') + '\n' +
            '(Write option number)'
        ))
        if(answer>this.answers.length && typeof answer !== 'number') return alert('please pick 0 to 3')
        this.answers[answer]++
        return this.displayResult(this.answers);
    },
    displayResult:function(input){
        console.log(`Poll Result is ${[...input]} /`,input)
    }
    };
    const data1 = [5, 2, 3];
    const data2 = [1, 5, 3, 9, 6, 1];

    const disR = poll.displayResult

    disR(data1)
    disR(data2)


document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));

//iife(immediately invoked function expression)
(function(){
    console.log('iife')
})();
(()=>{console.log('arrow iife')})();

//closure

let f;

const g = ()=>{
    const a  = 1;
    f = ()=> console.log(a+10)
}

const h = ()=>{
    const b = 10;
    f = ()=> console.log(b+10)
}

g();
f();

h();
f();
console.dir(f)

const boarding = (n,wait)=>{
    const group = n/3

    setTimeout(() => {
        console.log(`${n}passengers`);
        console.log(`${group}groups`);
    }, wait*1000);

    console.log(`in ${wait} seconds`);
};

const group = 300;

boarding(9,3);


(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    const a = 'a'
    document.querySelector('body').addEventListener('click',function(){
        header.style.color = 'blue';
        console.dir(a)
    })
})();  