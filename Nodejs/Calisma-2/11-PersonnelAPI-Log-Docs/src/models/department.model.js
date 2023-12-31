"use strict"
/* ------------------------------------------------------
    Express - Personel API
------------------------------------------------------ */

const {mongoose} = require('../configs/dbConnection');
const {model} = require("mongoose");

/* ------------------------------------------------------ */

const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String, required: [true, "Department name is required"], trim: true, unique: true
    },
}, {
    collection: 'departments', timestamps: true,
});

/* ------------------------------------------------------ */
module.exports = mongoose.model('Department', DepartmentSchema);
