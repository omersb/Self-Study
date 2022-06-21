//* ======================================================
//*        OOP -  Polymorphism(ES6)
//* ======================================================

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar
//* ile bilinir.

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year} `;
  }
  setPrice(price) {
    const taxRate = 1.1;
    this.price = (price * taxRate).toFixed(2);
  }
}

//? instance
const book1 = new Book('Kasagi', 'Omer Seyfettin', 1920);
const book2 = new Book('Sinekli Bakkal', 'H.Edip Adıvar', 1910);
console.log(book1);

//? Sub-Class tanimlamasi
class Magazine extends Book {
  constructor(title, author, year, month) {
    //! Book'un constructor'i cagrildi
    super(title, author, year); //! Book'un prototpye kopyalnmis oldu
    this.month = month;
  }

  //! Overrided Metot (Parent class'daki bir metodun farkli
  //! fonksiyonellikle fakat ayni isimle tanimlanmasi)
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year} in ${this.month} `;
  }

  //! Overloaded Metot (Ayni metodun farkli parametreler ile kullanilmasi)
  setPrice(price, taxRate) {
    this.price = (price * taxRate).toFixed(2);
  }

  //!Override edilmis bir parent fonksiyonunu kullanmak icin super keyword'u kullanilabilr.
  setPriceParent(price) {
    super.setPrice(price);
  }
}

const mag1 = new Magazine('Kasagi', 'Omer Seyfettin', 1940, 'Nov');
console.log(mag1);
console.log(mag1.getSummary());
mag1.setPrice(100, 1.2);


console.log(mag1);
