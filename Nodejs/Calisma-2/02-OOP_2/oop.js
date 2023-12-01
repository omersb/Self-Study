"use strict"

/* -----------------------------------------------
    OOP & Classes
----------------------------------------------- */

//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılan şablon

// Class Declaration
// class PascalNamedClassName{...}

// Class Expression
// const PascalNamedClassName = class {
//
//     undefinedProperty // onle definition('undefined')
//     extraField = 'field-value'
//
//     //? "new Class" ile obje oluştururken veri göndermek için "constructor" methodu kullanılır
//     constructor(parameter1, parameter2 = 'default-value') {
//         this.parameter1 = parameter1
//         this.parameter2 = parameter2
//     }
//
//     methodName1() {
//         return this
//     }
//
//     methodName2() {
//         return this.extraField
//
//     }
// }
//
// //? INSTANCE: Bir classtan türetilen objedir
// const instance = new PascalNamedClassName('parameter-1-value', 'parameter-2-value')
// console.log(instance)
// console.log(instance.methodName2())
// instance.extraField = 'new-value'
// console.log(instance.extraField)

/* ----------------------------------------------- */
//
// class Car {
//     isRunning = false
//
//     constructor(brand, model, year) {
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }
//
//     runEngine() {
//         this.isRunning = true
//         console.log('Motor çalıştı')
//         return this.isRunning
//     }
// }
//
// const ford = new Car('Ford', 'Mustang', 1967)
// console.log(ford)
// console.log(ford.isRunning)
// ford.runEngine()
// console.log(ford.isRunning)
//
// const mercedes = new Car('Mercedes', 'CLK200', 2000)
// console.log(mercedes)

/* ----------------------------------------------- */

//? INHERITANCE: Miras alma. Basşka bir Class'ın tüm özellliklerini devralma (parent-child ilişkisi kurma)
//? THIS: Chil Class - SUPER: Parent Class
// class Vehicle {
//     vehicleIsActive = false
//
//     constructor(vehicleType) {
//         this.vehicleType = vehicleType
//     }
// }
//
// class Car extends Vehicle {
//     isRunning = false
//
//     constructor(brand, model, year, vehicleType = 'Car') {
//         //? super must be top
//         super(vehicleType)
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }
//
//     runEngine() {
//         this.isRunning = true
//         console.log('Motor çalıştı')
//         return this.isRunning
//     }
// }
//
// const ford = new Car('Ford', 'Mustang', 1967, 'SUV')
// console.log(ford)
//
// class Accessory extends Car {
//     constructor(accessoryName, brand, model, year, vehicleType = 'Car') {
//         super(brand, model, year, vehicleType)
//         this.accessoryName = accessoryName
//     }
// }
//
// // const fordCliamate = new Accessory('Bosh Climate', 'Ford', 'Mustang', 1967, 'SUV')
// const fordCliamate = new Accessory('Bosh Climate', ...Object.values(ford))
// console.log(fordCliamate)


/* ----------------------------------------------- */
//? Polymorphism: Miras aldiğımız sınıfın özellik/methodlarını yeniden yazabilme
//? Override: Üst metodla aynı isim ve yapıda yeni bir metod yazma. (ezma / iptal etme / önceliğini alma)
//? Overload: Üst metodla aynı isimde farklı yapıda (parametre adet/tip) yeni method oluşturma. (aynı anda ikiside aktif) (JS desteklemez)

// class Vehicle {
//     vehicleIsActive = false
//
//     constructor(vehicleType) {
//         this.vehicleType = vehicleType
//     }
//
//     getDetails() {
//         console.log('Car.getDetails()')
//         return this.vehicleType
//     }
// }
//
// class Car extends Vehicle {
//     isRunning = false
//
//     constructor(brand, model, year, vehicleType = 'Car') {
//         //? super must be top
//         super(vehicleType)
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }
//
//     runEngine() {
//         this.isRunning = true
//         console.log('Motor çalıştı')
//         return this.isRunning
//     }
//
//     //? Override: Üstteki method ile aynı isimde. Artık bu geçerli.
//     getDetails() {
//         console.log('Car.getDetails çalıştı')
//         return this
//     }
// }
//
// const ford = new Car('Ford', 'Mustang', 1967, 'SUV')
// console.log(ford)
// console.log(ford.getDetails())


/* ----------------------------------------------- */
//? JS PUBLIC: Genel erişiime açık
//? JS Protected: Genel erişime açık ama lütfen dokunmayın. setter/getter kullanınız.
//? JS Private: Sadece tanımlandığı sınıf içerisinde erişilebilir.setter/getter kullanınız.

// class Vehicle {
//
//     vehicleIsActive = false // public
//     _protectedProp = true // protected
//     #privateProp = true // private
//
//     constructor(vehicleType) {
//         this.vehicleType = vehicleType
//     }
//
//     _protectedMethod() {
//         console.log('Vehicle.protectedMethod')
//         return true
//     }
//
//     #privateMethod() {
//         console.log('Vehicle.privateMethod')
//         return true
//     }
//
//     getDetails() {
//         console.log('Vehicle.getDetails()')
//         console.log(this.#privateProp)
//         console.log(this.#privateMethod())
//         // return this.vehicleType + ' is ' + this.privateProp
//         // return this.vehicleType + ' is ' + this.#privateProp // undefined
//     }
// }
//
// class Car extends Vehicle {
//     isRunning = false
//
//     constructor(brand, model, year, vehicleType = 'Car') {
//         super(vehicleType)
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }
//
//     runEngine() {
//         this.isRunning = true
//         console.log('Motor çalıştı')
//         return this.isRunning
//     }
// }
//
// const ford = new Car('Ford', 'Mustang', 1967, 'SUV')
// console.log(ford)
// console.log(ford.getDetails())

/* ----------------------------------------------- */
//? JS GETTER & SETTER Methods: Görevi veri getirme ()getter) ve veri güncelleme (setter) olan methodlardır.
//? STATIC PROPERTIES § METHODS: Class'dan direkt erişim. (Instance erişemez)

class Car {
    isRunning = false
    #price

    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Motor çalıştı')
        return this.isRunning
    }

    set setPrice(newPrice) {
        this.#price = newPrice
        console.log('Fiyat alındı')
        return true
    }

    get getPrice() {
        return 'Fiyat: ' + (this.#price ?? 'Henüz Belirlenmedi')
    }

    //? Direkt class ile erişmek istediklerimiz static ile işaretleriz.
    //? Statik property ve methodlar instance ile erişilemez.
    static staticProp = 'static value'

    //? Statik methodlarda this ifadesi sadece statikleri çağırır.
    static staticMethod() {
        console.log('static method çalıştı')
        return this // static method içinde this sadece staticleri çağırır.
    }
}

const ford = new Car('Ford', 'Mustang', 1967)
console.log(ford)

console.log(ford.getPrice)
ford.setPrice = 1000
console.log(ford.getPrice)


//? STATIC PROPERTIES § METHODS
const abc = Math.round(1.56)
console.log(abc)

console.log(Car.staticProp)
Car.staticMethod()

//? Statikler instance'a aktarılmaz
// console.log(ford.staticMethod())

/* ----------------------------------------------- */
