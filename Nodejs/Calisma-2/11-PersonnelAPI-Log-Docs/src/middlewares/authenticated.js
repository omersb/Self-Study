"use strict"
/* ------------------------------------------------------
    Express - Personel API
------------------------------------------------------ */
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const auth = req.headers?.authorization || null;
    const accessToken = auth ? auth.split(' ')[1] : null;

    req.isLogin = false;

    jwt.verify(accessToken, process.env.ACCESS_KEY, (err, user) => {
        if (err) {
            req.user = null;
            // console.log('JWT Login: NO')
        } else {
            req.isLogin = true;
            req.user = user
            // console.log('JWT Login: Yes')
        }
    })
    next()
}
