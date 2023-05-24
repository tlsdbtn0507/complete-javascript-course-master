// 'use strict';
const Person = function(name,age,gender,num){
    this.name = name; 
    this.age = age; 
    this.gender = gender; 
    this.num = num; 
};

const yusu = new Person('yusu',27,'male',010);
const babo = new Person('babo', 1 , 'male' , 000);

Person.prototype.getBirthYear = function(){
    const thisYear = new Date().getFullYear();
    return thisYear - this.age + 1;
};
Person.prototype.national = 'korean'

console.log(yusu.getBirthYear(),'///////' , yusu, '/////', yusu.__proto__);
console.log(babo , babo.getBirthYear());

console.log(yusu.__proto__  ===  Person.prototype);
console.log(yusu.constructor === Person);

const obj = {name:'obj'};
console.log(obj.hasOwnProperty('name'));

const arr = [1,3,2,1,124,2,3,14,1234,23,6,4,1,];


//원래 하면 안되는 것들
// Array.prototype.unique = function(){
//     return [...new Set(this)];
// };
// console.log(arr.unique().sort((a,b)=> a-b > 0 ? 1 : -1));//=> unique라는 array전용 함수 생성

// Array.prototype.val = function(){
//     console.log(this.filter(e=>e<10))
// };

// arr.val();

//coding Challenge
const Car = function(name,speed){
    this.name =  name;
    this.speed = speed;
};

const bmw = new Car('bmw',0);
const mercedes = new Car('mercedes',0);

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(this.speed);
}

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(this.speed);
}

for(let i =  0; i < 12; i++){
    bmw.accelerate();
}

for(let i = 0; i < 10; i++){
    mercedes.accelerate();
}
mercedes.brake();

console.log(bmw);
console.log(mercedes);

//class declaration
class PersonCl {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //아래 메소드는 해당 클래스의 .prototype속성으로 소속됨
    getBirthYear(){
        const year = new Date().getFullYear();
        return year - this.age + 1;
    }

    get birthYear(){
        return this.getBirthYear();
    }

    set makeFullName(firstName){
        const capitalCheck = firstName[0];
        if(capitalCheck !== firstName[0].toUpperCase()){
            alert('asdf');
        } 
        else  this.fullName = this.name +' '+ firstName;
    }
    //get과 set을 쓸때 이름 설정을 겹치지 않게 해줘야함
};

//class expression
// const PersonCL = class{};

const hyunsu = new PersonCl('hyunsu',26);
// hyunsu.makeFullName = prompt('what is your FirstName?');
console.log(hyunsu);

const account = {
    owner:'yusu',
    movements:[10,20,30,100],
    get latest(){
        return this.movements.slice(-1).pop();
    },
    set deposit(m){
        this.movements.push(m)
    }
}
console.log(account.latest);
account.deposit = 10000;
console.log(account);

const numArr = [1,2,3,4,5];

//codingChallenge2
class CarCl {
    constructor(make,speed){
        this.make = make;
        this.speed = speed;
    }

    get speedUS(){
        return this.speed/1.6
    }

    set speedUS(speed){
        this.speed =  speed * 1.6
    }

    accelerate(){
        this.speed +=10;
    }

    brake(){
        this.speed -= 5;
    }
}

const ford = new CarCl('Ford',120);
ford.accelerate();
ford.brake();
ford.brake();
ford.speedUS = 10;
console.log(ford);
//codingChallenge2


//class inheritance
const PersonIn = function(name,age){
    this.name = name;
    this.age = age;
}

PersonIn.prototype.getBirthYear = function(){
    return 2023 - this.age + 1
}

const Worker = function(name,age,job){
    PersonIn.call(this , name, age);
    this.job = job
}

Worker.prototype  = Object.create(PersonIn.prototype);

Worker.prototype.intro = function(){
    console.log(`i was born at ${this.getBirthYear()} i work as ${this.job}`)
}

const serena = new Worker('eunsu',22,'hotelier');
console.log(serena);
serena.intro();
console.log(serena.__proto__ ===  PersonIn.prototype); // false 왜냐 serena는 PersonIn클래스에서 
//상속 받은 Worker이기 때문에 __proto__또한 부모 클래스와 같을 수 없다
console.log(serena.getBirthYear());//=> PersonIn의 프로토 타입을 상속 받아서 worker클래스인 serena에서
//PersonIn의 프로토타입인 getBirthYear호출 가능

//codingChallenge3

const Ev = function(make,speed,charge){
    Car.call(this, make , speed );
    this.batteryCharge = charge;
}

Ev.prototype = Object.create(Car.prototype);
Ev.prototype.ChargeBattery = function(chargeTo){
    this.batteryCharge = chargeTo;
}
Ev.prototype.accelerate = function(){
    this.speed += 20;
    this.batteryCharge -= this.batteryCharge*0.01;
    console.log(`${this.name} is going at ${this.speed} km/h, with a charge of ${this.batteryCharge}%`)
}

// console.log(Ev.prototype)

const tesla = new Ev('Tesla', 120, 90);
tesla.accelerate();
tesla.brake();
tesla.ChargeBattery(90);
console.log(tesla)

//codingChallenge3

//es6 class inheritance
class Student extends PersonCl {
    constructor(name,age,major){
        super(name,age);
        this.major = major
    }
    //만약 상속 받을 자식클래스(Student)에서 속성을 추가하지 않을 거라면 constructor를 굳이 안해도됨
    intro(){
        console.log(`${this.name} is ${this.age} years old, ${this.name} major in ${this.major}`)
    }
    getBirthYear(){
        return 0 - this.age
    }//부모 클래스의 프로토타입 함수를 재정의(overwrite)해도 자식은 재정의 한대로 남고 부모는 본래 함수가 남음
}

const ho = new Student('ryung', 2000000, 'politics');
ho.intro();
console.log(ho.getBirthYear());
console.log(hyunsu.getBirthYear());

class Account {

    //public Field(=instance)
    //ex) position = navigator.language; ;있어야함

    //private Field
    //ex) #movements = []; 
    //ex) #pw; 
    //=>이렇게 하면 #movements은 private화 하여 밖에서 콘솔로도 찍을 수 없음

    #position = navigator.language;
    constructor(owner,pw,age,balance){
        this.owner = owner;
        this.pw = pw;
        // this.#pw = pw; => pw private화
        // this._pw = pw; => pw 캡슐화
        this.age = age;
        this.balance = [];
        // this.position = navigator.language;
    }
    get totalBalance(){
        return this.balance.reduce((e,i)=>e+i,0)
    }
    //아래 함수들은 공용 인터페이스
    deposit(amount){
        this.balance.push(amount)
    }
    widrawl(amount){
        this.deposit(-amount)
    }
    approveLoan(val){
        return val > this.totalBalance ? false : true
    }
    getLoan(val){
        if(this.approveLoan(val)){
            this.balance.push(val);
            // alert('check the loan you took out')
            console.log('check the loan you took out')
        }else{
            // alert('you should take out loan with some guerrenty')
            console.log('you should take out loan with some guerrenty')
        }
    }

    //private Method
    #privateFunction(){
        console.log('private!')
    }
    //=>field와 마찬가지로 외부에서 호출 불가
}

const chocoHip = new Account('yusu','123',27);
chocoHip.deposit(100);
chocoHip.widrawl(50);
chocoHip.getLoan(1000);
//class의 메소드가 반환(return)값이 있다면 chaining가능
console.log(chocoHip);

//codingChallenge4

class EvCl extends CarCl{
    
    #charge
    constructor(make,speed,charge){
        super(make,speed)
        this.#charge = charge
    }

    accelerate(){
        this.speed += 20;
        this.#charge -= this.#charge*0.01;
        return this;
    }

    brake(){
        this.speed -= 5;
        return this;
    }

    chargeTo(val){
        this.#charge = val;
        return this
    }

    get getCharge(){
        return this.#charge;
    }

}

const genesis = new EvCl('Genesis',120,90);
genesis.accelerate().brake().chargeTo(100);
console.log(`${genesis.make} is going at ${genesis.speed}km/h with a charge of ${genesis.getCharge}%`);
//codingChallenge4