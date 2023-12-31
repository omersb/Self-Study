"use strict"
/* ------------------------------------------------------
    Express - Personel API
------------------------------------------------------ */

const Personnel = require("../models/personnel.model");
const jwt = require("jsonwebtoken");

module.exports = async function (userData) {

    const {username, password} = userData;

    if (username && password) {

        const user = await Personnel.findOne({username, password});

        if (user) {
            if (user.isActive) {
                // Login Success
                const accessData = {
                    _id: user._id,
                    departmentId: user.departmentId,
                    firsName: user.firstName,
                    lastName: user.lastName,
                    isActive: user.isActive,
                    isAdmin: user.isAdmin,
                    isLead: user.isLead
                }
                const accessToken = jwt.sign(accessData, process.env.ACCESS_KEY, {expiresIn: '1h'});

                const refreshData = {
                    username: user.username, password: user.password
                }
                const refreshToken = jwt.sign(refreshData, process.env.REFRESH_KEY, {expiresIn: '1d'});

                return {
                    error: false, token: {
                        accessToken, refreshToken
                    }
                }
            } else {
                return {
                    error: true, message: 'This account is not active.'
                }
            }
        } else {
            return {
                error: true, message: 'Wrong username or password.'
            }
        }
    } else {
        return {
            error: true, message: 'Please enter username and password.'
        }
    }
}
