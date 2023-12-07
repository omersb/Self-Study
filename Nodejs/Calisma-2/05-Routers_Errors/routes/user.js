"use strict"
/* ------------------------------------------------------
    ExpressJS - Routing
------------------------------------------------------ */

const router = require("express").Router();

const routeControl = (req, res, next) => {

    const {username} = req.query;

    if (username === "admin") {
        next()
    } else {
        res.send({
            message: "Word Username or Password"
        })
    }
}

// We can use middleware with router
router.use(routeControl);
router.route('/extra')
    .get((req, res) => {
        res.send({message: "get"})
    })
    .post((req, res) => {
        res.send({message: "post"})
    })
    .put((req, res) => {
        res.send({message: "put"})
    })
    .delete((req, res) => {
        res.send({message: "delete"})
    })

router.get('/', (req, res) => {
    res.send({message: "All Users"})
});
router.get('/login', (req, res) => {
    res.send({message: "Login"})
});
router.get('/logout', (req, res) => {
    res.send({message: "Logout"})
});
router.get('/:userId', (req, res) => {
    res.send({message: "User Page"})
});
router.get('/:userId/password', (req, res) => {
    res.send({message: "Password Page"})
});


module.exports = router;