"use strict"
/* ------------------------------------------------------
    Express - Personel API
------------------------------------------------------ */

const Personel = require('../models/department.model');

module.exports = {
    list: async (req, res) => {
        const data = await res.getModelList(Personel)
        res.status(200).send({error: false, data})
    }, create: async (req, res) => {
        const data = await Personel.create(req.body);
        res.status(201).send({error: false, data})
    }, read: async (req, res) => {
        const data = await Personel.findOne({_id: req.params.id});
        res.status(200).send({error: false, data})
    }, update: async (req, res) => {
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
