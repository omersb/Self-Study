"use strict"

/* ------------------------------------------------------
    ExpressJS - User
------------------------------------------------------ */
const router = require('express').Router();
const {User} = require('../controllers/userController');

router.post('/login', User.login);
router.get('/logout', User.logout);

router.route('/')
    .get(User.list)
    .post(User.create);

router.route('/:userId')
    .get(User.read)
    .put(User.update)
    .delete(User.delete);

module.exports = router;
