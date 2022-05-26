// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");
let sayi1 = 5; //! Global Scope
console.log(sayi1); //!5
const fonk1 = function () {
  sayi1 = 22;
  console.log(sayi1); //!22
};
fonk1();
console.log(++sayi1); //!23
console.log("***********************");

let sayi2 = 7; //!Global-scope
console.log(sayi2); //!7
const fonk2 = function () {
  let sayi2 = 11; //! function-scope
  console.log(sayi2); //!11
};
fonk2();
console.log(++sayi2); //!8
