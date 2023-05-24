// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// if (x === 23) console.log(23);

// const calAge = birthYear => 2037 - birthYear;

// console.log(1997);

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// //일교차 구하기
// //sensor error 는 무엇이고 무엇을 하는가?

// //에러를 무시하는 법은?
// //온도 배열에서 최고 값찾기
// //온도 배열에서 최저 값찾기
// //최고-최저기온(일교차)구해서 return

// const calTempAlit = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (temps[i] > max) max = curTemp;
//     if (temps[i] < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calTempAlit(temperatures);
// console.log(amplitude);

// //problum 2
// //함수는 2개의 온도배열을 받아 와야함
// //배열 2개를 합치는법
// const calTempAlitNew = function (t1, t2) {
//   const array1 = ['a', 'b', 'c'];
//   const array2 = ['d', 'e', 'f'];
//   const array3 = array1.concat(array2);

//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (temps[i] > max) max = curTemp;
//     if (temps[i] < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calTempAlitNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius:')),
//   };

//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());
