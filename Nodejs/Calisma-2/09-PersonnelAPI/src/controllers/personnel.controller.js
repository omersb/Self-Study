"use strict"
/* ------------------------------------------------------
    Express - Personel API
------------------------------------------------------ */

const Personel = require('../models/personnel.model');

module.exports = {
    list: async (req, res) => {
        const data = await res.getModelList(Personel, {}, 'departmentId')
        res.status(200).send({
            error: false, detail: await res.getModelListDetails(Personel), data
        })
    }, create: async (req, res) => {
        // isLead kontrol
        const isLead = req.body?.isLead || false;
        if (isLead) {
            await Personel.updateMany({departmentId: req.body.departmentId, isLead: true}, {isLead: false});
        }
        const data = await Personel.create(req.body);
        res.status(201).send({error: false, data})
    }, read: async (req, res) => {
        const data = await Personel.findOne({_id: req.params.id});
        res.status(200).send({error: false, data})
    }, update: async (req, res) => {
        // isLead kontrol
        const isLead = req.body?.isLead || false;
        if (isLead) {
            const {departmentId} = await Personel.findOne({_id: req.params.id}, {departmentId: 1});
            await Personel.updateMany({departmentId, isLead: true}, {isLead: false});
        }
        const data = await Personel.updateOne({_id: req.params.id}, req.body);
        res.status(202).send({
            error: false, data, new: Personel.findOne({_id: req.params.id})
        })
    }, delete: async (req, res) => {
        const data = await Personel.deleteOne({_id: req.params.id});
        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount, data
        })
    },
    // Login & Logout
    login: async (req, res) => {
        const {username, password} = req.body;
        if (username && password) {
            const user = await Personel.findOne({username, password});
            if (user) {
                // Set Session
                req.session = {
                    id: user._id, password: user.password,
                }
                // Set Cookie
                if (req.body?.rememberMe) {
                    req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3; // 3 days
                }
                res.status(200).send({
                    error: false, data: user
                });
            } else {
                res.errorStatusCode = 401;
                throw new Error('Wrong username or password');
            }
        } else {
            res.errorStatusCode = 401;
            throw new Error('Please entry username and password');
        }
    }, logout: async (req, res) => {
        // Set Session to null
        req.session = null;
        res.status(200).send({
            error: false, message: 'Logout successfully'
        });
    },
}
