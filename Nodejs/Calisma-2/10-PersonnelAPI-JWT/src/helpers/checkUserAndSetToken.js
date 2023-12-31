"use strict"
/* ------------------------------------------------------
    Express - Personel API
------------------------------------------------------ */

const Personnel = require("../models/personnel.model");
const jwt = require("jsonwebtoken");

module.exports = async function (userData, withRefresh = true) {

    const {username, password} = userData;

    if (username && password) {

        const user = await Personnel.findOne({username});

        if (user && user.password === password) {

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
                const refreshToken = withRefresh ? jwt.sign(refreshData, process.env.REFRESH_KEY, {expiresIn: '1d'}) : null;

                return {
                    error: false, token: {
                        access: accessToken, refresh: refreshToken
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
