"use strict"
/* ------------------------------------------------------
    Express - Personel API
------------------------------------------------------ */

const Personel = require('../models/personnel.model');

module.exports = {
    list: async (req, res) => {
        const data = await res.getModelList(Personel)
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
}
