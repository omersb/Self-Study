// console.log("**********\nSession 3 - Conditionals\n**********");
// ! if statement example
//? check if the is positive

// const n1 = +prompt("Enter a number:");
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

//? suggest size for men as XS S M L XL XXL on chest size

// const size = +prompt("beden ölçünüz giriniz:");

// if (size < 32) {
//   console.log("Wrong size");
// } else if (size < 35) {
//   console.log("XS");
// } else if (size < 38) {
//   console.log("S");
// } else if (size < 41) {
//   console.log("M");
// } else if (size < 44) {
//   console.log("L");
// } else if (size < 47) {
//   console.log("XL");
// } else if (size < 50) {
//   console.log("XXL");
// } else {
//   console.log("Wrong Size");
// }

// ! example 2 three number comparison

//? Write a JavaScript program that accept three integers and display the greatest.

// n1 is the greatest among n2 and n3
// 8 is the g     among 3 and 5
// const n1 = prompt("Enter a number:");
// const n2 = prompt("Enter a number:");
// const n3 = prompt("Enter a number:");

// if (n1 > n2 && n1 > n3) {
//   console.log(`${n1} is the greatest among ${n2} and ${n3}`);
// } else if (n2 > n1 && n2 > n3) {
//   console.log(`${n2} is the greatest among ${n1} and ${n3}`);
// } else console.log(`${n3} is the greatest among ${n2} and ${n1}`);

// ! ternary examples
console.log("----------\nternary if statements\n----------");

//* program to check pass or fail
// let grade = prompt("Enter your score :");
//* check the condition
// let result = grade >= 50 ? "pass" : "fail";
// console.log(`You ${result} the exam.`);

//*example-1
// const age = 18;

// if (age >= 18) {
//   result = "You are eligible to vote.";
// } else {
//   result = "You are not eligible to vote yet.";
// }

// result =
//   age >= 18 ? "You are eligible to vote." : "You are not eligible to vote yet";
// console.log(result);

//*example-2
// if (n1 > 0) {
//   console.log(`${n1} is positive`);
// } else if (n1 < 0) {
//   console.log(`${n1} is negative`);
// } else {
//   console.log(`the number is  0`);
// }

// ! evde denemeyiniz !! okunaklı kod olmadığından yapmıyoruz
// const n1 = -3;
// const result = n1 >= 0 ? (n1 == 0 ? "zero" : `${n1} is positive`) : "negative";
// console.log(result);

// ! example-4 canDrive

//? evaluate if a human can drive a car or not

let canDrive = false;
const hasDriversLicense = true; //* Sürücü belgesi
const hasGoodVision = true; //* Görüşü iyi
const isHandicapped = true; //* Engelli
const usingRegularCar = true; //* Normal araç kullanabilir
// //const usingDisabledCar = true;

result =
  hasDriversLicense && hasGoodVision
    ? !isHandicapped
      ? "can drive"
      : !usingRegularCar
      ? "cannot driver"
      : "can drive"
    : "cannot drive";

console.log(result);
