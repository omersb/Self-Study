"use strict"
/* ------------------------------------------------------
    Express - Personel API
------------------------------------------------------ */

const Personel = require('../models/personnel.model');

module.exports = {
    list: async (req, res) => {
        /*
            #swagger.tags = ['Personals']
            #swagger.summary = 'List Personals'
            #swagger.description = '
                You can send query with endpoint for search[], sort[], page adn limit.
                <ul> Example:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            '
        */
        const data = await res.getModelList(Personel, {}, 'departmentId')
        res.status(200).send({
            error: false, detail: await res.getModelListDetails(Personel), data
        })
    }, create: async (req, res) => {
        /*
            #swagger.tags = ['Personals']
            #swagger.summary = 'Create Personals'
            #swagger.description = 'Create Personals'
            #swagger.parameters['body'] = {
            }
        */
        // isLead kontrol
        const isLead = req.body?.isLead || false;
        if (isLead) {
            await Personel.updateMany({departmentId: req.body.departmentId, isLead: true}, {isLead: false});
        }
        const data = await Personel.create(req.body);
        res.status(201).send({error: false, data})
    }, read: async (req, res) => {
        /*
            #swagger.tags = ['Personals']
            #swagger.summary = 'Get Single Personals'
        */
        const data = await Personel.findOne({_id: req.params.id});
        res.status(200).send({error: false, data})
    }, update: async (req, res) => {
        /*
             #swagger.tags = ['Personals']
             #swagger.summary = 'Update Personals'
             #swagger.description = 'Update Personals'
             #swagger.parameters['body'] = {
             }
        */
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
        /*
             #swagger.tags = ['Personals']
             #swagger.summary = 'Delete Personals'
             #swagger.description = 'Delete Personals'
        */
        const data = await Personel.deleteOne({_id: req.params.id});
        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount, data
        })
    }, // Login & Logout
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
