"use strict"
/* ------------------------------------------------------
    Express - Personel API
------------------------------------------------------ */
const router = require('express').Router();
/* ------------------------------------------------------ */

const department = require('../controllers/department.controller');

// URL: /departments

router.route('/')
    .get(department.list)
    .post(department.create);

router.route('/:id')
    .get(department.read)
    .put(department.update)
    .delete(department.delete);

/* ------------------------------------------------------ */
module.exports = router;