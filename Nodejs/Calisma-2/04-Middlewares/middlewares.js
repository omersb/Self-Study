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

const middleFunction1 = (req, res, next) => {
    req.customData = 'Custom Data'
    res.customDataInResponse = 'Custom Data In Response'
    next();
};

const middleFunction2 = (req, res, next) => {
    next();
    res.send({
        customData: [
            req.customData,
            res.customDataInResponse
        ],
        message: "Here is func2, first next() function"
    });
};

app.get('/', middleFunction1, middleFunction2, (req, res) => {
    res.send({
        customData: [
            req.customData,
            res.customDataInResponse
        ],
        message: "Welcome to Home"
    });
});


/* ------------------------------------------------------ */
app.listen(PORT, () => console.log("Runnng: http://127.0.0.1:" + PORT));