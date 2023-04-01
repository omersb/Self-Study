//? Interface
var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
function save(product) {
    console.log(product.name + " kaydedildi.");
}
function save2(product2) {
    console.log(product2.name + " kaydedildi.");
}
save({ id: 1, name: "Laptop", unitPrice: 1000 }); //! Bütün değerleri vermek zorundaysak İnterface kullanmak mantıklıdır.
var mouse = new Product2(); //! Bütün değerleri vermek zorunda değilsek class kullanmak mantıklıdır.
mouse.name = "ATech";
save2(mouse);
var CustomerService = /** @class */ (function () {
    function CustomerService() {
    }
    CustomerService.prototype.save = function () {
    };
    return CustomerService;
}());
