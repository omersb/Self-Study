"use strict"

/* ------------------------------------------------------
    ExpressJS - TODOprofect with Sequelize
------------------------------------------------------ */

/*
* npm init -y
* npm i express dotenv
* npm i express-async-handler
*/

const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------ */

// Accept json data:
app.use(express.json());
app.all('/', (req, res) => {
    res.send("Welcome to Todo App");
})

/* ------------------------------------------------------ */
//* Sequelize
// npm i sequelize sqlite3

// https://sequelize.org/docs/v6/getting-started/
const {Sequelize, DataTypes} = require('sequelize');
// const sequelize = new Sequelize('sqlite:./db.sqlite');
const sequelize = new Sequelize('sqlite:' + (process.env.SQLITE || './db.sqlite'));
// console.log(sequelize);

const Todo = sequelize.define('todo', {
    // https://sequelize.org/docs/v7/models/data-types/

    id: {
        type: DataTypes.INTEGER,
        unique: true, // default: false benzersiz mi?
        allowNull: false, // default: true boş geçilebilir mi?
        field_name: 'custom_column_name',
        comment: 'Description',
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    description: DataTypes.TEXT,
    priority: { // 1: High, 0: Medium, -1: Low
        type: DataTypes.TINYINT,
        allowNull: false
        defaultValue: 0,
    },
    is_done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
});


/* ------------------------------------------------------ */

const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500;
    console.log('errorHandler Çalıştı')
    res.status(errorStatusCode).send({
        error: true, message: err.message, cause: err.cause
        // stack: err.stack // error details
    })
}
app.use(errorHandler);

/* ------------------------------------------------------ */
app.listen(PORT, () => console.log("Runnng: http://127.0.0.1:" + PORT));