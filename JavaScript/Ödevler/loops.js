console.log('****** LOOPS *******');

// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************
// Math.floor() =>aşağıya yuvarlar
// Math.ceil() =>sürekli yukarıya yuvarlar
// Math.round() => değerine göre yuvarlar.
// Math.trunc() => kesirli sayının tam kısmı alır.

// for (let i = 1; i <= 10; i++) {
//   const randomSayi = Math.floor(Math.random() * 100 + 1);
//   console.log(randomSayi);
// }

// console.log('Program bitti');

//? Ornek: 1 den n kadar sayıları toplayan kodu yazınız.

// const n = prompt('n sayisini girinz:');
// let toplam = 0;
// for (let i = 1; i <= n; i++) {
//   toplam += i;
// }

// console.log('Toplam:', toplam);

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

//******************** WHILE ******************

// let i = 1;
// while (i <= 5) {
//   console.log('Merhaba-', i);
//   i++;
// }

// console.log('Bitti');

// let not = prompt('Lütfen notunuzu giriniz (0-100):');

// while (not < 0 || not > 100) {
//   alert('Girdiğiniz not 0-100 arasında olmalıdır');
//   not = prompt('Lütfen notunuzu giriniz (0-100):');
// }
// console.log('Girdiğiniz not', not);

//* Ornek

//******************** DO-WHILE ******************
// let i = 1;

// do {
//   console.log('Merhaba-', i);
//   i++;
// } while (i <= 5);

let not;

do {
  not = prompt('Lütfen notunuzu giriniz (0-100):');
  if (not < 0 || not > 100) {
    alert('Girdiğiniz not 0-100 arasında olmalıdır');
  }
} while (not < 0 || not > 100);

console.log('Girdiğiniz not', not);

//? ODEV1: klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.
