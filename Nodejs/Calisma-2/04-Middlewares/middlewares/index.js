"use strict"
/* ------------------------------------------------------
    ExpressJS - Middlewares
------------------------------------------------------ */

const middleFunction1 = (req, res, next) => {

    // console.log(req.query)
    const skip = req.query.skip ?? false;

    req.customData = 'Custom Data'
    res.customDataInResponse = 'Custom Data In Response'

    if (skip) {
        // bir sonraki bağımsız fonksiyona git
        next('route');
    } else {
        // bir sonraki callback fonksiyonuna git
        next();
    }
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

module.exports = [middleFunction1, middleFunction2]