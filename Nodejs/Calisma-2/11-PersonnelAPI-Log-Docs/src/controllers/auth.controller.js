"use strict"
/* ------------------------------------------------------
    Express - Personel API
------------------------------------------------------ */
// JWT
// npm i jsonwebtoken

const jwt = require('jsonwebtoken');
const checkUserAndSetToken = require('../helpers/checkUserAndSetToken');

module.exports = {
    login: async (req, res) => {
        const checkUser = await checkUserAndSetToken(req.body);
        if (checkUser.error) {
            res.errorStatusCode = 401;
            throw new Error(checkUser.message);
        } else {
            res.send(checkUser)
        }
    }, refresh: async (req, res) => {

        const refreshToken = req.body?.token?.refresh || null

        if (refreshToken) {
            const jwtData = jwt.verify(refreshToken, process.env.REFRESH_KEY);

            if (jwtData) {
                const checkUser = await checkUserAndSetToken(jwtData, false);
                if (checkUser.error) {
                    res.errorStatusCode = 401;
                    throw new Error(checkUser.message);
                } else {
                    res.send(checkUser)
                }
            } else {
                res.errorStatusCode = 401;
                throw new Error('Wroong JWT Token.')
            }
        } else {
            res.errorStatusCode = 401;
            throw new Error('Please entry token.refresh.')
        }
    }, logout: async (req, res) => {
        res.send({
            error: false, message: 'Logout success'
        })
    },
}
