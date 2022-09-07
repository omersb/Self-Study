// console.log('app.js is running');

// let ad = prompt('Adinizi girin');

// // let sonuc = confirm("Emin misiniz");

// // console.log(sonuc);

// console.log('adiniz : ' + ad + ' dir');
// console.log(`adiniz : ${ad} dir`);

// ----------------------

var myNumber1 = 5;
console.log(myNumber1)
/*




*/

var myNumber1 = 'merhaba';
console.log(myNumber1);

let var1 = 55;
console.log(var1);

var1 = 99;
console.log(var1);

{
  let localVar1 = 'local variable';
  var myName = 'matthw';
  console.log(localVar1);
}
// console.log(localVar1);
console.log(myName);

// ! const konusu

const student = {
  firstName: 'Can',
  number: 'F1234',
};

const otherStudent = student;
console.log(otherStudent);

otherStudent.number1 = 'F9876';

console.log(student);

// ! this gives error
otherStudent = {
  firstName: 'Sinan',
  number: 'F3456',
};

console.log(otherStudent);
