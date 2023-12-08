"use strict"

/* ------------------------------------------------------
    ExpressJS - TODOprofect with Sequelize
------------------------------------------------------ */

const router = require('express').Router();

const Todo = require('./todo.model');

//List
router.get('/', async (req, res) => {
    // const data = await Todo.findAll();
    const data = await Todo.findAndCountAll();
    res.send({
        error: false,
        result: data,
    })
})

//Create
router.post('/', async (req, res) => {
    const data = await Todo.create(req.body);
    res.send({
        error: false,
        body: req.body,
        message: 'Todo created.',
        result: data,
    })
})


module.exports = router;
