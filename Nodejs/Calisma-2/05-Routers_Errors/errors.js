"use strict"
/* ------------------------------------------------------
    ExpressJS - error management
------------------------------------------------------ */

/*
* npm init -y
* npm i express dotenv
* npm i express-async-handler
*/

const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------ */

// app.get('/user/:id', (req, res) => {
//
//     const id = req.params.id ?? 0;
//     if (isNaN(id)) {
//         res.statusCode = 400;
//         throw new Error('ID is Not A Number', {cause: 'params.id=' + id});
//     } else {
//         res.send({
//             error: false,
//             id: id
//         });
//     }
// });

/* ------------------------------------------------------ */
// Try-Catch

// app.get('/user/:id', (req, res, next) => {
//
//     try {
//         const id = req.params.id ?? 0;
//         if (isNaN(id)) {
//             throw new Error('ID is Not A Number', {cause: 'params.id=' + id});
//         } else {
//             res.send({
//                 error: false,
//                 id: id
//             });
//         }
//     } catch (err) {
//         console.log('catch çalıştı')
//         next(err); // go to errorHandler
//
//         // res.send({
//         //     error: true,
//         //     message: err.message,
//         //     cause: err.cause
//         // })
//     }
// });


/* ------------------------------------------------------ */
// Async

// const asyncFunction = async () => {
//     throw new Error('Created error in async-func')
// }
//
// app.get('/async', async (req, res, next) => {
//     await asyncFunction().catch(next)
// })

/* ------------------------------------------------------ */
// express-async-handler
// npm i express-async-handler

const asyncHandler = require('express-async-handler')

app.get('/async', asyncHandler(async (req, res, next) => {
    res.errorStatusCode = 400;
    throw new Error('Created error in async-func')
}))


/* ------------------------------------------------------ */
//? ErrorHandler kodlamanın en sonunda yer almalıdır.

const errorHandler = (err, req, res, next) => {

    const statusCode = res.errorStatusCode ?? 500;

    console.log('errorHandler Çalıştı')

    res.status(statusCode).send({
        error: true,
        message: err.message,
        cause: err.cause
        // stack: err.stack // error details
    })

}

app.use(errorHandler);


/* ------------------------------------------------------ */
app.listen(PORT, () => console.log("Runnng: http://127.0.0.1:" + PORT));