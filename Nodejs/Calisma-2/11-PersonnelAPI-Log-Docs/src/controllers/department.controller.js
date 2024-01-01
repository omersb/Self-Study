"use strict"
/* ------------------------------------------------------
    Express - Personel API
------------------------------------------------------ */

const Department = require('../models/department.model');

module.exports = {
    list: async (req, res) => {
        /*
            #swagger.tags = ['Department']
            #swagger.summary = 'List Departments'
            #swagger.description = '
                You can send query with endpoint for search[], sort[], page adn limit.
                <ul> Example:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            '
        */
        const data = await res.getModelList(Department)
        res.status(200).send({
            error: false, detail: await res.getModelListDetails(Department), data
        })
    }, create: async (req, res) => {
        /*
            #swagger.tags = ['Department']
            #swagger.summary = 'Create Departments'
            #swagger.description = 'Create Departments'
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $name: "Test Department"
                }
            }
        */
        const data = await Department.create(req.body);
        res.status(201).send({error: false, data})
    }, read: async (req, res) => {
        /*
            #swagger.tags = ['Department']
            #swagger.summary = 'Get Single Department'
        */
        const data = await Department.findOne({_id: req.params.id});
        res.status(200).send({error: false, data})
    }, update: async (req, res) => {
        /*
             #swagger.tags = ['Department']
             #swagger.summary = 'Update Departments'
             #swagger.description = 'Update Departments'
             #swagger.parameters['body'] = {
                 in: 'body',
                 required: true,
                 schema: {
                     $name: "Test Department"
                 }
             }
        */
        const data = await Department.updateOne({_id: req.params.id}, req.body);
        res.status(202).send({
            error: false, data, new: Department.findOne({_id: req.params.id})
        })
    }, delete: async (req, res) => {
        /*
             #swagger.tags = ['Department']
             #swagger.summary = 'Delete Departments'
             #swagger.description = 'Delete Departments'
        */
        const data = await Department.deleteOne({_id: req.params.id});
        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount, data
        })
    }, personnels: async (req, res) => {
        /*
             #swagger.tags = ['Department']
             #swagger.summary = 'Get Personnels of any Department'
             #swagger.description = 'Get Personnels of any Department'
        */
        const Personnel = require('../models/personnel.model');
        const data = await res.getModelList(Personnel, {departmentId: req.params.id}, 'departmentId')
        res.status(200).send({
            error: false,
            detail: await res.getModelListDetails(Personnel, {departmentId: req.params.id}, 'departmentId'),
            data
        })
    },
}
