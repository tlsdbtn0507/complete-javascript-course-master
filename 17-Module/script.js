// import { addToCart, ec, exportText as et } from "./shoppingCart.js";
// // 명령 순서를 바꿔도 import가 먼저 실행
// //import 나 export를 할때 as를 통해 네이밍을 바꿀 수 있음 
// console.log('original');

// addToCart('ball',2);

// console.log(ec,et);

// import * as ShoppingCart from "./shoppingCart.js";
// //import해올 곳의 모든 import를 shoppingCart라 지정하고 import해옴

// ShoppingCart.addToCart('ball',2);
// ShoppingCart.addToCart('bread',5);
// ShoppingCart.addToCart('pc',10);

// console.log(ShoppingCart.cart);
//cart는 오기전에 빈 배열이였지만 함수에 의해 값이 변경 되며 함수 이전에 확인하면 당연히 빈배열

// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();

// console.log(data);원래 async 함수 안에서 await를 써야 쓸 수 있지만 script.js의 글로벌 블록문을
// async에 넣기 때문에 의도치 않게 모든 기능들을 비동기 처리한다

// const getPostData = async function(){
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const data = await res.json();
//     return { title:data.at(-1).title, text:data.at(-1).body }  
// }

// //비동기 데이터를 변수에 넣는법
// const lastPostData = await getPostData();
// console.log(lastPostData);

//lodash로 deep객체복사
// import  cloneDeep  from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep  from "./node_modules/lodash-es/cloneDeep.js";

const state = {
    cart:[
        { prod:'bread', qount:5},
        { prod:'pizza', qount:5}
    ],
    user:{ isLoggedin : true}
};

const stateClone = Object.assign({},state);
const stateDeepClone = cloneDeep(state);

state.user.isLoggedin = false;

console.log(stateClone);
console.log(stateDeepClone);//deepClone으로 인해 state의 변경으로도 stateDeepClone값 변경x
//참고로 node폴더를 삭제하거나 다른 프로젝트를 클론해와도 npm i하면 설치가능

//일부 메서드들을 폴리핑함
import 'core-js/stable';
//아래는 비동기 함수들 폴리핑
import 'regenerator-runtime/runtime'