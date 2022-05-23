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

console.log('************************');

//! Arrow function kullanılarak çözüm
fiyatlar.forEach((value) => console.log(value));

//** fiyatlar dizisindekilerin toplamini konsola yazdırıınız */
let toplam = 0;
fiyatlar.forEach((fiyat) => (toplam += fiyat));
console.log('Toplam: ', toplam);