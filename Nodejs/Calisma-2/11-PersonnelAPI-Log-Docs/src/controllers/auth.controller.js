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
        /*
            #swagger.tags = ['Auth']
            #swagger.summary = 'Login'
            #swagger.description = 'Login with username and password.'
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $username: "osb",
                    $password: "123456"
                }
            }
        */
        const checkUser = await checkUserAndSetToken(req.body);
        if (checkUser.error) {
            res.errorStatusCode = 401;
            throw new Error(checkUser.message);
        } else {
            res.send(checkUser)
        }
    }, refresh: async (req, res) => {
        /*
            #swagger.tags = ['Auth']
            #swagger.summary = 'Refresh'
            #swagger.description = 'Refresh token.'
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $token: {
                        $refresh: "...Refresh Token..."
                    }
                }
            }
        */
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
        /*
            #swagger.tags = ['Auth']
            #swagger.summary = 'Logout'
            #swagger.description = 'No need to do anything'
        */
        res.send({
            error: false, message: 'Logout success'
        })
    },
}
