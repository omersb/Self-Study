//* ======================================================
//*                   FOREACH METHOD
//* ======================================================

console.log('****** ITERATION **********');
//*Dizideki herbir fiyati konsola bastiriniz.

const fiyatlar = [100, 250, 50, 89];

//*Dizideki herbir fiyati konsola bastiriniz.

fiyatlar.forEach(yazdir);

function yazdir(v) {
  console.log(v);
}

console.log('***************************');

//! Arraw function kullanılarak çözüm
fiyatlar.forEach((value) => console.log(value));

//** Fiyatlar dizisindekilerin toplamini konsola yazdiriniz */
let toplam = 0;
fiyatlar.forEach((fiyat) => (toplam += fiyat));
console.log('Toplam:', toplam);

//! NOT: forEach metodu void bir metottur.
//! (Yani herhangi bir değer döndürmez.)
console.log(fiyatlar.forEach((fiyat) => (toplam += fiyat))); //!undefined

//*-------------- ÖRNEK -------------------

let toplam1 = 0;

fiyatlar.forEach((deger, indis, dizi) => {
  toplam1 += deger;
  console.log(`${indis}.iterasyon toplami:${toplam1}`);
  dizi[indis] = deger + 10;
});
console.log(fiyatlar);

//*-------------- ÖDEV -------------------
//* fiyatlar dizisinde her bir fiyata %10 zam yapalım.


//* ======================================================
//*                       MAP METHOD
//* ======================================================

//*-------------- ÖRNEK -------------------
//* names dizisin içerisindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.

const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];
