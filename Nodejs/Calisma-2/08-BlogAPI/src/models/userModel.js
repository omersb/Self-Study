"use strict"

/* ------------------------------------------------------
    ExpressJS - User
------------------------------------------------------ */

const mongoose = require('mongoose');
const {model} = require("mongoose");

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        required: [true, 'Email field must be required'],
        unique: true,
        validate: [(email) => (email.includes('@')  && email.includes('.')), //Validation function
            'Email type is incorrect'  //Error message
        ],
    }, password: {
        type: String, trim: true, required: true
    }, firstName: {
        type: String, trim: true
    }, lastName: {
        type: String, trim: true
    },

}, {
    collection: 'users', timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
