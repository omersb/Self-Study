"use strict"
/* ------------------------------------------------------
    Express - Personel API
------------------------------------------------------ */
const router = require('express').Router();
/* ------------------------------------------------------ */

const personnel = require('../controllers/personnel.controller');
const permissions = require("../middlewares/permissions");

// URL: /personnel

// Login & Logout
router.post('/login', personnel.login);
router.get('/logout', personnel.logout);

router.route('/')
    .get(permissions.isAdmin, personnel.list)
    .post(permissions.isAdmin, personnel.create);

router.route('/:id')
    .get(permissions.iaAdminOrOwner, personnel.read)
    .put(permissions.iaAdminOrOwner, personnel.update)
    .delete(permissions.isAdmin, personnel.delete);

/* ------------------------------------------------------ */
module.exports = router;
