// let Js = "amazing";
// console.log(61);

// console.log("Jonas");
// console.log(23);

// let firstName="Jonas"
// let first = "Jonas1"


// console.log(first);
// console.log(firstName);

//null의 타입은 object

//제곱은 영어로 power js에선 **

// const firstName = 'Jonas';
// const job ='teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " +firstName+ ", a "
// +(year-birthYear)+"years old " + job + "!";

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`;

// console.log(jonasNew);

// console.log(`Just a simple string`);

// console.log('String with \n\
// multiple\n\
// lines');

// console.log(`String
// multiple
// lines`);

// const age = 11;

// if(age>=19){
//     console.log('Sarah can start driving license');
// } else{
//     const yearsLeft = 18-age;
//     console.log(`Sarah is too young. Wait ${yearsLeft} more years.`)
// }

// const birthYear = 1991;

// let century;
// if(birthYear <= 2000){
//      century = 20;
// }else{
//      century = 21;
// }
// console.log(century);

//타입변환
// const inputYear = '1991';
// console.log(inputYear+18)//199118
// console.log(Number(inputYear)+18);//2009

// console.log(Number('jonas'));//NaN
// console.log(typeof(NaN));//NaN은 사실 number

// console.log(String(23),23);

//type coercion
// console.log('I am '+23+ 'years old');
// console.log('23'-'10'-3);//-, *는 스트링이여도 감안 하고 계산
// console.log('23'/'2');

// console.log('23'+'10'+3);

// let n = '1'+1;//string '11'
// n=n-1;// '11'-1
// console.log(n)

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));//false
// console.log(Boolean(undefined));//false
// console.log(Boolean('Jonas'));//true
// console.log(Boolean({}));//true
// console.log(Boolean(''));//false

// const money = 0;

// if(money){//money는 0이고 0은 거짓 값이라 else문 실행
//     console.log("Don't spend it all");
// }else{
//     console.log('You should get a job')
// }

// let height;
// if(height){//height가 undefined여서 else구문 실행
//     console.log('YAY! Height is defined');
// }else{
//     console.log("Height is not defined");
// }

// const age = '18';

// if(age===18)console.log('You just became an adult(strict)');//숫자 18이
// //여야만 실행
// if(age==18)console.log('You just became an adult(loose)');//숫자던 문자던
// //일단 18이면 실행

// const favorite = Number(prompt("What is your favorite num?"))
// console.log(favorite)
// console.log(typeof(favorite))//911이라고 치면 string이라고 뜸

// if (favorite===911){//===은 타입이 달라서 사용 불가 ===을 쓰려면 prompt밖에
//     //Number씌워야함
//     console.log('911 is amazing')
// } else if(favorite===7){
//     console.log('7 is also a cool number')
// } else if(favorite===9){
//     console.log('9 is also a cool number')
// } else {
//     console.log('Number is not 911 or 7')
// }

// if(favorite!== 911) console.log('Why not 911?')

//boolean logic
// a and b = true => a와b둘 다 모두 트루, 둘중 하나라도 거짓이면 거짓
// a or b = true => a와b 중 하나라도 트루면 트루, 둘 다 거짓이면 거짓

// !a(false) = true
// !a and b = true

// const hasDriversLicense = true;//A
// const hasGoodVision = true;//B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense&&hasDriversLicense;

// if(hasDriversLicense && hasGoodVision){
//     console.log('Sarah is able to drive')
// }else{
//     console.log('Someone else should drive')
// }

//switch
// const day= 'monday';
// switch(day){
//     case 'monday':// day==='monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;// break없으면 다음 break가 나올때까지 계속 실행
//     case'tuesday':
//         console.log('Prepare theory video');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the Weekend');
//         break;
//     default:
//         console.log('Not a valid day!');
// }



// 3+4
// 1991
// true&&false&&!false

// if(23>18){
//     const str ='23 is bigger';
// }
// const me = "Jonas";
// console.log(`I'm ${2037-1991} years old and My name is ${me}`);

// 조건문 ? a : b
const age = 17;

age >= 18 ? console.log('I like to drink wine') :
console.log('I like to drink water')  
// 조건문 ? a:b => a가 트루면 a실행, 아니면 b실행

const drink = age >= 18 ? 'wine' : 'water';// 아래 문구를 1줄로 요약가능
console.log(drink);

let drink2;
if(age >= 18){
    drink2 = 'wine';
}else {
    drink2 = 'water';
}
console.log(drink2)

console.log(`I'd lke to drink ${drink}`)
