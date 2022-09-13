console.log("****** LOOPS *******");

// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

// for (let i = 1; i <= 100; i++) {
//   console.log(`${i}-Merhaba`);
// }

//? Math.floor() =>aşağıya yuvarlar
//? Math.ceil() =>sürekli yukarıya yuvarlar
//? Math.round() => değerine göre yuvarlar.
//? Math.trunc() => kesirli sayının tam kısmı alır.

// for (let i = 1; i <= 10; i++) {
//   const randomSayi = Math.floor(Math.random() * 100 + 1);
//   console.log(randomSayi);
// }
// console.log("Program bitti");

// //? Ornek-1: 1 den n kadar sayıları toplayan kodu yazınız.
// const n = prompt("n sayisini giriniz:");
// let toplam = 0;
// for (let i = 1; i <= n; i++) {
//   console.log(i);
//   toplam += i;  // toplam = toplam + i
// }
// console.log("Toplam:", toplam);

// //? ÖRNEK-2: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.
// const sayı = prompt("Pozitif bir sayı girin");
// const asalMı = (sayı) => {
//   let asal = true;
//   for (let i = 2; i < sayı; i++) {
//     if (sayı % i == 0) {
//       asal = false;
//       break;
//     }
//   }
//   return asal ? "Asal" : "Asal değil";
// };
// console.log(`${sayı} ${asalMı(sayı)}`);

// //******************** WHILE ******************

// let j = 1;
// while (j <= 5) {
//   console.log("Merhaba-", j);
//   j++;
// }
// console.log("Bitti");

// let i = 1;
// do {
//   console.log('Merhaba', i);
//   i++;
//   console.log(i);
// } while (i <= 5);

// let not1 = prompt('Lütfen notunuzu giriniz (0-100):');

// while (not1 < 0 || not1 > 100) {
//   alert('Girdiğiniz not 0-100 arasında olmalıdır');
//   not1 = prompt('Lütfen notunuzu giriniz (0-100):');
// }
// console.log('Girdiğiniz not', not1);

// //* Ornek

// //******************** DO-WHILE ******************

// let sayac = 1;
// do {
//   console.log("Merhaba-", sayac);
//   sayac++;
// } while (sayac <= 5);

// let not2;
// do {
//   not2 = prompt('Lütfen notunuzu giriniz (0-100):');
//   if (not2 < 0 || not2 > 100) {
//     alert('Girdiğiniz not 0-100 arasında olmalıdır');
//   }
// } while (not2 < 0 || not2 > 100);

// console.log('Girdiğiniz not', not2);

// //? ODEV1: klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.

// let not3;

// while (not3 != 'q') {
//   not3 = prompt('Lütfen not giriniz veya Q ya basarak çıkınız!').toLowerCase();
// }

// console.log('Q ya basarak çıkış yaptınız !!!');
