// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

console.log('***** ARRAYS ******');

//* Dizi Tanımlama
//* ---------------------------------------------------------

// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem
const isimler = ['ahmet', 'mehmet', 'ismet', 'saffet'];
console.log(isimler);
console.log(isimler.length); //?4

// ! 2.Yöntem (Object Constructor)
const diller = new Array('Pyhton', 'Java', 'C++', 'JS', 'Go');
console.log(diller);

const numbers = new Array(3, 2, 1);
console.log(numbers);

const sayilar = new Array(10);
//! 10 elemanlık boş bir array oluşturdu
console.log(sayilar);

//* Diziden Veri Okuma-Yazma
//* ---------------------------------------------------------

//!Okuma
const java = diller[1];
console.log(java);

//!Diziye Yazma
isimler[2] = 'Canan';
console.log(isimler);

//! Hata,const keyword'u ile tanımlanmış bir diziye tamamıyla bir atama yapılmaz.

// isimler = ['Can', 'Canan', 'Cavidan'];
// console.log(isimler);
//!Uncaught TypeError: Assignment to constant variable.
const yaslar = [22, 18, 15];
const kisiler = ['Ahmet', 'Yilmaz', 2022, 2022 - 1970, true, 5.6, yaslar];
console.log(kisiler);

console.log(kisiler[6][1]);

const sonYas = ++kisiler[6][2];
console.log(sonYas, kisiler);

//? ===========================================================
//?  DİZİYİ DEĞİŞTİREN (MUTATOR) METOTLAR
//? ===========================================================
