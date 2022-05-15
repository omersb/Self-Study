/*****Convert a String to a Number!*****/
// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

const stringToNumber = function(str){
  return parseInt(str);
}

console.log(stringToNumber("1234"));
console.log(typeof stringToNumber("1234"));