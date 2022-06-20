//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//? Eger nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! Encapsulation OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sornasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenler dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disirasindan da eriselemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebiler.

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year} `;
  }
}

//? instance
const book1 = new Book("Kasagi", "Omer Seyfettin", 1920);
const book2 = new Book("Sinekli Bakkal", "H.Edip Adıvar", 1910);
console.log(book1);

//? Sub-Class tanimlamasi
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

const mag1 = new Magazine("Kasagi", "Omer Seyfettin", 1940, "Nov");
console.log(mag1);
console.log(mag1.getSummary());
// mag1.setPrice(100, 1.2);
mag1.setPriceParent(100);

console.log(mag1);
