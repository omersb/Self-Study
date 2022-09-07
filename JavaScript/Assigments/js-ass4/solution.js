//*************** JS-ASS4 SOLUTION *********************/

//! maaslar dizisi icin maasi ortalamanin altinda olanlara
//! %20 zam yaparak zamli maaslari ayrı bir diziye atalım.

const maaslar = [3000, 5000, 4000, 6000, 6500];

const ortMaas = maaslar.reduce((t, m) => t + m, 0) / maaslar.length;
const zamliMaaslar = maaslar.filter((m) => m < ortMaas).map((m) => m * 1.2);
console.log('Zamli Maaşlar', zamliMaaslar);
console.log('ORT MAAŞ:', ortMaas);

const kisiler = [
  {
    name: 'Ahmet',
    surname: 'Can',
    job: 'developer',
    age: 30,
  },
  {
    name: 'Mehmet',
    surname: 'Baki',
    job: 'tester',
    age: 35,
  },
  {
    name: 'Nur',
    surname: 'Ersan',
    job: 'team lead',
    age: 40,
  },
  {
    name: 'Merve',
    surname: 'Veli',
    job: 'developer',
    age: 26,
  },

  {
    name: 'Ruzgar',
    surname: 'Kuzey',
    job: 'tester',
    age: 24,
  },
];

//!  Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeyiniz.
kisiler.filter((k) => k.age < 33).forEach((k) => console.log(k.name));

//! 33 yasindan kücüklerin isimlerini diziye saklayiniz.
const namesUnder33 = kisiler.filter((k) => k.age < 33).map((k) => k.name);
console.log(namesUnder33);

//! Meslegi developer olanlarin isim ve yaslarini yeni bir Obje olarak yeni diziye saklayiniz.
const developers = kisiler
  .filter((k) => k.job == 'developer')
  .map((k) => {
    return { devName: k.name, age: k.age };
  });
console.log(developers);
