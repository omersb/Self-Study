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
    res.status(200).send({
        error: false,
        result: data,
    })
})

//Create
router.post('/', async (req, res) => {
    const data = await Todo.create(req.body);
    res.status(201).send({
        error: false,
        body: req.body,
        message: 'Todo created.',
        result: data,
    })
})

//Read
router.get('/:id', async (req, res) => {
    const data = await Todo.findByPk(req.params.id);
    res.status(200).send({
        error: false,
        result: data,
    })
})

//Update
router.put('/:id', async (req, res) => {

    // Model.update( {newData}, {Filter})
    const isUpdate = await Todo.update(req.body, {
        where: {id: req.params.id}
    });
    res.status(202).send({
        error: false,
        body: req.body,
        message: 'Todo updated.',
        isUpdate: Boolean(isUpdate[0]),
        result: await Todo.findByPk(req.params.id),
    })
})

//Delete
router.delete('/:id', async (req, res) => {

    const isDeleted = await Todo.destroy({
        where: {id: req.params.id}
    });

    if (isDeleted) {
        res.sendStatus(204)
    }else {
        res.sendStatus(404)
    }

    // res.status(204).send({
    //     error: false,
    //     message: 'Todo deleted.',
    //     isUpdated: Boolean(isDeleted),
    // })
})

module.exports = router;
