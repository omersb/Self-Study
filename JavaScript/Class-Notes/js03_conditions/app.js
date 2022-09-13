console.log('**********\nSession 3 - Conditionals\n**********');
// ! if statement example
//* check if the is positive

const n1 = +prompt("Enter a number:");
console.log(n1, typeof n1);
if (n1 > 0) {
  console.log(`${n1} is positive`);
} else if (n1 < 0) {
  console.log(`${n1} is negative`);
} else {
  console.log(`the number is  0`);
}
