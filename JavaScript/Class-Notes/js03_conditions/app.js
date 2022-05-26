// console.log('**********\nSession 3 - Conditionals\n**********');
// ! if statement example
// check if the is positive

// const n1 = +prompt('Enter a number:');
// console.log(n1, typeof n1);
// if (n1 > 0) {
//   console.log(`${n1} is positive`);
// } else if (n1 < 0) {
//   console.log(`${n1} is negative`);
// } else {
//   console.log(`the number is  0`);
// }

// ! example 2 chest size

// https://www.perryellis.com/pages/size-chart

// suggest size for men as XS S M L XL XXL on chest size

// const chest = prompt('beden olcunuzu girin?');

// const size = +prompt('Enter your chest size');
// if (size < 32) {
//   console.log('Wrong Size');
// } else if (size < 35) {
//   console.log('XS');
// } else if (size < 38) {
//   console.log('S');
// } else if (size < 41) {
//   console.log('M');
// } else if (size < 44) {
//   console.log('L');
// } else if (size < 47) {
//   console.log('XL');
// } else if (size < 50) {
//   console.log('XXL');
// } else {
//   console.log('Wrong Size');
// }

// ! example 2 three number comparison

// Write a JavaScript program that accept three integers and display the greatest.

// n1 is the greatest among n2 and n3
// 8 is the g     among 3 and 5
// const n1 = prompt('Enter a number:');
// const n2 = prompt('Enter a number:');
// const n3 = prompt('Enter a number:');

// if (n1 > n2 && n1 > n3) {
//   console.log(`${n1} is the greatest among ${n2} and ${n3}`);
// } else if (n2 > n1 && n2 > n3) {
//   console.log(`${n2} is the greatest among ${n1} and ${n3}`);
// } else console.log(`${n3} is the greatest among ${n2} and ${n1}`);

// ! ternary examples
// console.log('----------\nternary if statements\n----------');

// program to check pass or fail
// let grade = prompt('Enter your score :');
// check the condition
// let result = grade >= 50 ? 'pass' : 'fail';
// console.log(`You ${result} the exam.`);

// const age = 18;
// let result;
// if (age >= 18) {
//   result = 'You are eligible to vote.';
// } else {
//   result = 'You are not eligible to vote yet.';
// }

// result =
//   age >= 18 ? 'You are eligible to vote.' : 'You are not eligible to vote yet';
// console.log(result);

// if (n1 > 0) {
//   console.log(`${n1} is positive`);
// } else if (n1 < 0) {
//   console.log(`${n1} is negative`);
// } else {
//   console.log(`the number is  0`);
// }

// const n1 = 0;
// const result = n1 >= 0 ? (n1 == 0 ? 'zero' : `${n1} is positive`) : 'negative';
// console.log(result);
// ! evde denemeyiniz !!

// ! example-4 canDrive

// evaluate if a human can drive a car or not

// let canDrive = false;
// const hasDriversLicense = false;
// const hasGoodVision = false;

// const isHandicapped = false;
// const usingRegularCar = false;
// // // const usingDisabledCar = true;

// let canDrive = false;
// const hasDriversLicense = true;
// const hasGoodVision = true;
// const isHandicapped = false;
// const usingRegularCar = true;

// result =
//   hasDriversLicense && hasGoodVision
//     ? !isHandicapped
//       ? 'can drive'
//       : !usingRegularCar
//       ? 'can drive'
//       : 'cannot drive'
//     : 'cannot drive';
// console.log(result);

console.log('----------\nswitch case statements\n----------');

let text;
// let fruit = prompt('type your favorite fruit');
// banana, lime, limon, orange, apple, default

// switch (fruit.toLowerCase()) {
//   case 'banana':
//     text = 'I like Banana!🍌';
//     break;
//   case 'lime':
//   case 'lemon':
//   case 'orange':
//     text = `I am not a fan of ${fruit}`;
//     break;
//   case 'apple':
//     text = `I like 🍎🍏`;
//     break;

//   default:
//     text = "I don't know that fruit";
// }

// console.log(text);

// ! example-5  cw weekly program ❗your turn 🧑‍💻
// pazartesi salı çarşamba perşembe in class
// cuma team work
// cumartesi inclass + workshop
// pazar self study
// default yanlış gün girildi.

// const day = prompt('enter a day: ').toLowerCase();

// switch (day) {
//   case 'monday':
//   case 'tuesday':
//   case 'wednesday':
//   case 'thursday':
//     console.log(`Inclass`);
//     break;
//   case 'friday':
//     console.log(`Teamwork`);
//     break;
//   case 'saturday':
//     console.log(`Inclass and workshop`);
//     break;
//   case 'sunday':
//     console.log(`Self study.`);
//     break;
//   default:
//     console.log(`${day} is not a day.`);
// }

// ! example 5
// output day count of a month of given year 2020 02 => 29
// 2022 02 => 28

//leap year
let year = 2020;
let month = 1;
let dayCount;
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCount = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayCount = 30;
    break;
  case 2:
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) dayCount = 29;
    else dayCount = 28;
    break;
  default:
    dayCount = -1; // invalid month
}

console.log(dayCount); // 29

// ! example-6 path selection

/*
path = "ad", "fs", "ds" // ad => aws-devops , fs u know, ds => data-science
pathInfo = ""; // provide some information about the selected path.
*/

// const pathSelected = prompt(
//   'Which path would you like to attend?\nad -> aws-devops\nfs -> full-stack\nds -> data-science'
// );
