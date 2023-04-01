//? Interface

interface Product {
  id: number;
  name: string;
  unitPrice: number;
}

class Product2 {
  id: number;
  name: string;
  unitPrice: number;
}

function save(product: Product) {
  console.log(product.name + " kaydedildi.");
}

function save2(product2: Product2) {
  console.log(product2.name + " kaydedildi.");
}

save({ id: 1, name: "Laptop", unitPrice: 1000 });  //! Bütün değerleri vermek zorundaysak İnterface kullanmak mantıklıdır.

let mouse = new Product2();     //! Bütün değerleri vermek zorunda değilsek class kullanmak mantıklıdır.
mouse.name = "ATech";

save2(mouse);


//! Interfaceler de tamamlanmamış operasyonlar olabilir.

interface PersonService {
  save();
}

class CustomerService implements PersonService {
  save() {
    
  }
}