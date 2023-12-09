"use strict"

/* ------------------------------------------------------
    ExpressJS - TODOprofect with Sequelize
------------------------------------------------------ */

const router = require('express').Router();

// Call TodoController
const todo = require('../controllers/todo');

router.route('/')
    .get(todo.list)
    .post(todo.create);

router.route('/:id')
    .get(todo.read)
    .put(todo.update)
    .delete(todo.delete);

module.exports = router;
