"use strict"

/* ------------------------------
    OBJECTS
--------------------------------*/

// const exampleObject = {
//     propertyName: 'value',
//     methodName: function() {
//         return 'This is Method'
//     }
// }
//
// console.log(exampleObject.propertyName)
// console.log(exampleObject.methodName())

/* ------------------------------ */

// const Car= {
//     brand: 'Ford',
//     model: 'Mustang',
//     year: 1967,
//     isAutoGear: true,
//     colors: ['white', 'red'],
//     details: {
//         color1: 'red',
//         color2: 'white',
//         engineSize: 4900
//     },
//     startEngine: function() {
//         return 'Motor çalıştı'
//     }
// }

// console.log(Car.brand)
// console.log(Car.colors)
// console.log(Car.colors[0])
// console.log(Car.details)
// console.log(Car.details.engineSize)
// console.log(Car.startEngine())

// console.log(Car['brand'])
// console.log(Car.details['engineSize'])
// console.log(Car['details']['engineSize'])
// console.log(Car['startEngine']())

/* ------------------------------ */

// //? 'this' keyword
//
// const Car = {
//     brand: 'Ford',
//     model: 'Mustang',
//     year: 1967,
//     isAutoGear: true,
//     colors: ['white', 'red'],
//     details: {
//         color1: 'red',
//         color2: 'white',
//         engineSize: 4900
//     },
//     startEngine: function () {
//         return 'Motor çalıştı'
//     },
//     getDetails: function () {
//
//         // return this
//         // return this.brand + ' ' + this.model + ' ' + this.year
//         return this.startEngine()
//     },
//     arrowFunc: () => {
//         //? Arrow function içinde 'this' keyword kullanılamaz
//         // return this
//         return this.brand
//     }
// }
//
// // console.log(Car.getDetails())
// console.log(Car.arrowFunc())

/* ------------------------------ */

// //? Array Destructuring
//
// const testArray = ['value0', 'value1', 'value2', 'value3']
//
// // const var0 = testArray[0]
// // const var1 = testArray[1]
//
// //? Sıralma önemli!
// // const [firstItem, secondItem] = testArray
// // console.log(firstItem, secondItem)
//
// //? SpreadOperator (En sonda olmak zorunda)
// // const [first, second, ...others] = testArray
// // console.log(first, second, others)
//
// //? SpreadOperator (Dağıtıcı)
// const newArr = [...testArray, 'new-value', 'new-value2']
// console.log(newArr)

/* ------------------------------ */

// //? Object Destructuring
//
// const Car = {
//     brand: 'Ford',
//     model: 'Mustang',
//     year: 1967,
//     isAutoGear: true,
//     colors: ['white', 'red'],
//     details: {
//         color1: 'red',
//         color2: 'white',
//         engineSize: 4900
//     },
//     startEngine: function () {
//         return 'Motor çalıştı'
//     }
// }
//
// //Rest:
// // const {year, model, brand} = Car
// // const {year, model, brand, ...otherItems} = Car
// // console.log(year, model, brand)
// // console.log(otherItems)
//
// // const {year: modelYear, model: newName, brand, ...otherItems} = Car
// // console.log(modelYear, newName, brand)
// // console.log(otherItems)
// // console.log(Car) // Car objesi değişmez
//
// //Spread:
// const newObj = {
//     ...Car,
//     newKey: 'new value'
// }
// // console.log(newObj)
//
// // Object to JSON
// const json = JSON.stringify(Car)
// // console.log(typeof json, json)
//
// // JSON to Object
// const newObj2 = JSON.parse(json)
// // console.log(typeof newObj2, newObj2)
//
// // Object to Array
// // const arr = [...Car]
// const arr = [ ...Object.entries(Car)]
// // console.log(arr)
// const arr2 = Object.values(Car)
// console.log(arr2)
// const arr3 = Object.keys(Car)
// console.log(arr3)

/* ------------------------------
    Object Constructor
--------------------------------*/

const PascalCaseNamed = function () {
    this.property = 'value'
}

/* ------------------------------ */
//? "new" keyword

const CarConstructor = function (brand, model, year = 2021) {
    this.brand = brand
    this.model = model
    this.year = year
    this.isRunning = false
    this.startEngine = function () {
        this.isRunning = true
        return `Motor çalıştı`
    }
}

const newCar = new CarConstructor('Ford', 'Mustang', 1967)
console.log(newCar)
const newCar2 = new CarConstructor('Toyota', 'Corolla')
console.log(newCar2)

console.log(newCar2.isRunning)
console.log(newCar2.startEngine())
console.log(newCar2.isRunning)

/* ------------------------------ */