"use strict"

/* -----------------------------------------------
    Modules
----------------------------------------------- */

// console.log('Index.js çalıştı')

//? Export
// const test = function () {
//     console.log('Index.js çalıştı')
// }
//
// module.exports = test

//? Export
// module.exports = function () {
//     console.log('Index.js çalıştı')
// }


/* ----------------------------------------------- */
// const test1 = function () {
//     console.log('test1 çalıştı')
// }
// const test2 = function () {
//     console.log('test2 çalıştı')
// }
// const test3 = function () {
//     console.log('test3 çalıştı')
// }
//
// // module.exports = [
// //     test1,
// //     test2,
// //     test3
// // ]
//
//
// // module.exports = {
// //     test1: test1,
// //     test2: test2,
// //     test3: test3
// // }
//
// module.exports = {
//     test1,
//     test2,
//     test3
// }


/* ----------------------------------------------- */

module.exports.test1 = function () {
    console.log('test1 çalıştı')
}
module.exports.test2 = function () {
    console.log('test2 çalıştı')
}
module.exports.test3 = function () {
    console.log('test3 çalıştı')
}


/* ----------------------------------------------- */
