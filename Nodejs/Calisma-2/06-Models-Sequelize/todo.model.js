"use strict"

/* ------------------------------------------------------
    ExpressJS - TODOprofect with Sequelize
------------------------------------------------------ */

//* Sequelize
// npm i sequelize sqlite3

// https://sequelize.org/docs/v6/getting-started/
const {Sequelize, DataTypes} = require('sequelize');
// const sequelize = new Sequelize('sqlite:./db.sqlite');
// const sequelize = new Sequelize('sqlite:' + (process.env.SQLITE || './db.sqlite'));
const sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/todo'); // npm i pg pg-hstore

// console.log(sequelize);

const Todo = sequelize.define('todo', {
    // https://sequelize.org/docs/v7/models/data-types/

    // id: {
    //     type: DataTypes.INTEGER,
    //     unique: true, // default: false benzersiz mi?
    //     allowNull: false, // default: true boş geçilebilir mi?
    //     field: 'custom_field_name',
    //     comment: 'Description',
    //     primaryKey: true,
    //     autoIncrement: true,
    // },
    title: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    description: DataTypes.TEXT,
    priority: { // 1: High, 0: Medium, -1: Low
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    is_done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
});

// Synchronization
// sequelize.sync()  //Create table
// sequelize.sync({force: true})  // Database silip yeniden oluşturur
// sequelize.sync({alter: true})  // Tabloyu günceller
// console.log('Sequelize running...')

sequelize.authenticate()
    .then(() => console.log('DB Connected *'))
    .catch(err => console.log('DB Not Connected *', err))

module.exports = Todo;