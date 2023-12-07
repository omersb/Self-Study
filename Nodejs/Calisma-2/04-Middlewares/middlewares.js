const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------ */
//? Middlewares functions has must be had three parameters
//? Last parameter is next()

// app.get('/', (req, res, next) => {
//     // Request/Response parametresi ile next() methıduna veri gönderebilirim.
//     req.customData = 'Custom Data'
//     res.customDataInResponse = 'Custom Data In Response'
//
//     next(); //? Go to next function
//
//     res.send({
//         message: "Middleware running",
//     });
// });
//
// app.get('/', (req, res) => {
//     res.send({
//         customData: [
//             req.customData,
//             res.customDataInResponse
//         ],
//         message: "Home Page"
//     });
// });
/* ------------------------------------------------------ */
//! next() for next callBackFunction

// const middleFunction1 = (req, res, next) => {
//
//     // console.log(req.query)
//     const skip = req.query.skip ?? false;
//
//     req.customData = 'Custom Data'
//     res.customDataInResponse = 'Custom Data In Response'
//
//     if (skip) {
//         // bir sonraki bağımsız fonksiyona git
//         next('route');
//     } else {
//         // bir sonraki callback fonksiyonuna git
//         next();
//     }
// };
//
// const middleFunction2 = (req, res, next) => {
//     next();
//     res.send({
//         customData: [
//             req.customData,
//             res.customDataInResponse
//         ],
//         message: "Here is func2, first next() function"
//     });
// };
//
// app.get('/', middleFunction1, middleFunction2, (req, res) => {
//     res.send({
//         customData: [
//             req.customData,
//             res.customDataInResponse
//         ],
//         message: "Welcome to Home"
//     });
// });
//
// // next('route') ile çalıştı.
// app.get('/', (req, res) => {
//     res.send({
//         message: "Next Route"
//     });
// });

/* ------------------------------------------------------ */
// Middlewares & Use
const middleFunction1 = (req, res, next) => {

    // console.log(req.query)
    const skip = req.query.skip ?? false;

    req.customData = 'Custom Data'
    res.customDataInResponse = 'Custom Data In Response'

    if (skip) {
        // bir sonraki bağımsız fonksiyona git
        console.log("next-route çalıştı")
        next('route');
    } else {
        // bir sonraki callback fonksiyonuna git
        console.log("next çalıştı")
        next();
    }
};

// app.use(middleFunction1);  // defult-ulr = *
app.use('/path', middleFunction1 )  //  /path == /path/*
app.get('*', (req, res) => {
    res.send({
        message: "first Route"
    });
});


/* ------------------------------------------------------ */
app.listen(PORT, () => console.log("Runnng: http://127.0.0.1:" + PORT));