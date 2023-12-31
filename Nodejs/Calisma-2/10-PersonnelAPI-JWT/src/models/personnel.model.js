"use strict"
/* ------------------------------------------------------
    Express - Personel API
------------------------------------------------------ */

const {mongoose} = require('../configs/dbConnection');

/* ------------------------------------------------------ */
const passwordEncrypt = require('../helpers/passwordEncrypt');

const PersonnelSchema = new mongoose.Schema({
    departmentId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: [true, "Department is required"]
    }, username: {
        type: String, trim: true, required: [true, "Username is required"], unique: true
    }, password: {
        type: String, trim: true, required: [true, "Password is required"], set: (password) => passwordEncrypt(password)
    }, firstName: {
        type: String, trim: true, required: [true, "First name is required"]
    }, lastName: {
        type: String, trim: true, required: [true, "Last name is required"]
    }, phone: {
        type: String, trim: true, required: [true, "Phone is required"]
    }, email: {
        type: String, trim: true, required: [true, "Email is required"], unique: true, validate: (email) => {
            email.includes('@') && email.includes('.')
        }
    }, title: {
        type: String, trim: true, required: [true, "Title is required"]
    }, salary: {
        type: Number, default: 0
    }, description: {
        type: String, trim: true, default: null
    }, isActive: {
        type: Boolean, default: true
    }, isAdmin: {
        type: Boolean, default: false
    }, isLead: {
        type: Boolean, default: false
    }, startedAt: {
        type: Date, default: Date.now()
    },
}, {
    collection: 'personnels', timestamps: true,
})

/* ------------------------------------------------------ */

module.exports = mongoose.model('Personnel', PersonnelSchema);
