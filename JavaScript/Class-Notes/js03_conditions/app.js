console.log("**********\nSession 3 - Conditionals\n**********");
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
const n1 = prompt("Enter a number:");
const n2 = prompt("Enter a number:");
const n3 = prompt("Enter a number:");

if (n1 > n2 && n1 > n3) {
  console.log(`${n1} is the greatest among ${n2} and ${n3}`);
} else if (n2 > n1 && n2 > n3) {
  console.log(`${n2} is the greatest among ${n1} and ${n3}`);
} else console.log(`${n3} is the greatest among ${n2} and ${n1}`);
