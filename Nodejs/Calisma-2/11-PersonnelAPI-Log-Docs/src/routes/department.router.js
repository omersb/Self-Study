"use strict"
/* ------------------------------------------------------
    Express - Personel API
------------------------------------------------------ */
const router = require('express').Router();
/* ------------------------------------------------------ */

const department = require('../controllers/department.controller');
const permissions = require('../middlewares/permissions');

// URL: /departments

router.route('/')
    .get(permissions.isLogin, department.list)
    .post(permissions.isAdmin, department.create);

router.route('/:id')
    .get(permissions.isAdminOrLead, department.read)
    .put(permissions.isAdminOrLead, department.update)
    .delete(permissions.isAdmin, department.delete);

router.get('/:id/personnels', permissions.isAdminOrLead, department.personnels);

/* ------------------------------------------------------ */
module.exports = router;