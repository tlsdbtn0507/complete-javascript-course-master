//strict mode
'use strict';// strict모드를 키면 hasDriversLicense에서 오타를 확실하게 잡아줘서
//사용자가 버그를 쉽게 찾도록 도와줌
//----------------------------------------------------
// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;

// if(hasDriversLicense) console.log("I can drive")

// const interface = 'Audio';
// const private = 534; interface와 private는 변수로 선언 불가하여 
//use strict사용시 사용자체가 불가
//-----------------------------------------------------

//function

//-----------------------------------------------------
// function logger(){
//     console.log('My name is Jonas');
// }
// logger();
// logger();
// logger();
// function fruitProcessor(apples,oranges){
//     console.log(apples,oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5,0);//function의 return값이 
// //fruitProcessor에 저장
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// const num = Number('23');//문자 23을 숫자 23으로 전환
//-----------------------------------------------------

//function delcaration,expression

//-----------------------------------------------------
//여기는 function delcaration, 변수 선언이 위에 가도 실행 가능
// function calAge1(birthYear){
//     return 2037-birthYear;
// }
// const age1 = calAge1(1997);
// console.log(age1);
// //여기는 function expression으로 위에 만든 함수를 가져다 써서 변수가 
// //이 함수보다 위에 있으면 실행 불가
// const calAge2=function (birthYear){
//     return 2037-birthYear;
// }
// const age2 = calAge2(1991)
// console.log(age1,age2);
//-----------------------------------------------------

//Arrow function

//-----------------------------------------------------

// const calAge3 = birthYear => 2037-birthYear;
// const age3 = calAge3(1991)
// console.log(age3)
// const yearsUntilRetirement = (birthYear,firstName) => {
//     const age = 2037-birthYear;
//     const retirement = 65-age;
//     // return retirement;
//     return`${firstName} retires in ${retirement} years`
// }
// console.log(yearsUntilRetirement(1991,'jonas'));
// console.log(yearsUntilRetirement(1980,'bob'));
//-----------------------------------------------------

//function calls other function

//-----------------------------------------------------

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }
// function fruitProcessor(apples,oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and 
//     ${orangePieces} pieces of oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));

//-----------------------------------------------------

//function recap

//-----------------------------------------------------

// const calAge = function(birthYear){
//     return 2037-birthYear;
// }
// const yearsUntilRetirement = function(birthYear,firstName){
//     const age = calAge(birthYear)
//     const retirement = 65-age;

//     if(retirement>0){
//         console.log(`${firstName} retires in ${retirement} years`)
//         return retirement;
//     }else{
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }
// console.log(yearsUntilRetirement(1991,'jonas'))
// console.log(yearsUntilRetirement(1950,'mike'))

//-----------------------------------------------------

//array

//-----------------------------------------------------

// const friends=['Michael','Steve',"Peter"];

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length-1]);

// friends[2]='Jay';
// console.log(friends);

// const firstName ='jonas';
// const jonas =[firstName,'schm',2022-1991,'teacher',friends];
// console.log(jonas);
// console.log(jonas.length);

// //exercise
// const calAge = function(birthYear){
//     return 2037-birthYear;
// }
// const years =[1990,1967,2002,2010,2018];
    
// const age1 = calAge(years[0]);
// const age2 = calAge(years[1]);
// const age3 = calAge(years[years.length-1]);
// console.log(age1,age2,age3);
// const ages =[]

   //-----------------------------------------------------
    
//array operations
    
//-----------------------------------------------------
    
// const friends=['Michael','Steve',"Peter"];
// //add elements
// const newLength = friends.push('jay');
// console.log(friends);
// console.log(newLength);//4

// friends.unshift('John');//John을 맨 앞으로 추가

// //remove elements
// friends.pop();//아무것도 안쓰면 맨 마지막거가 나감
// console.log(friends)
// friends.shift();//맨앞에거 삭제
// console.log(friends.indexOf('Steven'));//배열에 없는 걸 부르면 -1

// console.log(friends.includes('Steve'));//있으면 트루
// console.log(friends.includes('Bob'));//없으면 false
// friends.push(23)
// console.log(friends.includes('23'));//찾는게 숫자 23이 아니라 문자 '23'
// //이기 때문에 false
//-----------------------------------------------------
    
//objects,dots and bracket notation
    
//-----------------------------------------------------
// const jonas ={
//     firstName:'Jonas',
//     lastName:'schmed',
//     age: 2037-1991,
//     job:'teacher',
//     friends:['Michael','Peter','Steven']
// };

// console.log(jonas);
// console.log(jonas.lastName);//schmed = dotsnotation
// console.log(jonas['lastName']);//schmed = bracketnotation

// const nameKey = 'Name';
// console.log(jonas['first'+nameKey]);
// console.log(jonas['last'+nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstN,lastN,age,job,friends')
// console.log(jonas[interestedIn]);//jonas.interestedIn하면 안나옴

// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// }else{
//     console.log('Wrong request!Choose between firstN,lastN,age,job,friends')
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and
// his best friend is called ${jonas.friends[0]}.`)
//-----------------------------------------------------

//object method

//-----------------------------------------------------
// const jonas ={
//     firstName:'Jonas',
//     lastName:'schmed',
//     birthYear:1997,
//     job:'teacher',
//     friends:['Michael','Peter','Steven'],
//     hasDriverLicense: true,
//     calAge: function(){
//         this.age = 2022 - this.birthYear
//         return this.age;
//     },
//     getSummary: function(){
//         return `${this.firstName} is a ${this.calAge()}-year old ${this.job}, 
//         and he has ${this.hasDriverLicense ? "a":"no"} driver's license`
//     }
// };
// console.log(jonas.calAge())
// console.log(jonas.age);//위에 문구가 있어야 .age가 출력가능

// console.log(jonas.getSummary())
//-----------------------------------------------------

//loop

//-----------------------------------------------------
// for keeps running while condition is true
// for(let rep = 1; rep <=10; rep++){
//     console.log(`Lifting weights repetition ${rep}.`)
// }
//-----------------------------------------------------

//loop array

//-----------------------------------------------------

// const jonas =['Jonas','schmed',
// 2037-1991,'teacher',['Michael','Peter','Steven'],true]
// ;
// const types =[];//types라는 속이 빈 새 배열을 만들고

// for(let i =0; i<jonas.length ;i++){
//     //Reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);
//     //Filling types array
//     //1) types[i] = typeof jonas[i];//반복문을 통해 jonas의 내용의 타입을 
//     //2) types.push(typeof jonas[i]);
// }
// console.log(types)//types배열 안에 새로이 넣을수 있음

// const years = [1991,1997,1998,2002];
// const ages=[];

// for(let i=0; i<years.length;i++){
//     ages[i] =2037-years[i];
// }
// console.log(ages);

// //continue break
// console.log('--only strings---')
// for(let i =0; i<jonas.length ;i++){
//     if(typeof jonas[i]!=='string') continue;//string이 아닌게 있으면 건너뛰기

//     console.log(jonas[i], typeof jonas[i]);
// }


// //-----------------------------------------------------
// console.log('--break with number---')
// for(let i =0; i<jonas.length ;i++){
//     if(typeof jonas[i]==='number') break;

//     console.log(jonas[i], typeof jonas[i]);//jonas shned 다음이 num이므로 break
// }
//--------------------------

//loop backword and loop in loop

//---------------------------

// const jonas =[
// 'Jonas',
// 'schmed',
// 2037-1991,
// 'teacher',
// ['Michael','Peter','Steven']
// ];

// for(let i = jonas.length-1; i>=0;i--){//반복문으로 배열을 역순으로 출력
//     console.log(jonas[i]);
// }

// for(let exercise =1;exercise<=3;exercise++){
//     console.log(`---starting exercise${exercise}--`);
//     for(let rep = 1; rep <6; rep++){
//         console.log(`Exercise ${exercise}:lifting weight rep ${rep}`);
//     }
// }

//-------------------------------

//while

//-------------------------------

// for(let rep = 1; rep <=10; rep++){
//     console.log(`Lifting weights repetition ${rep}.`)
// }

// let rep = 1;
// while(rep<=10){
//     console.log(`While : Lifting weights repetition ${rep}.`)
//     rep++
// }

let diceNum = Math.trunc(Math.random()*6)+1;

while(diceNum!==6){
    console.log(`You rolled a ${diceNum}`);
    diceNum = Math.trunc(Math.random()*6)+1;
    if(diceNum===6) console.log('Loop is about to end')
}

