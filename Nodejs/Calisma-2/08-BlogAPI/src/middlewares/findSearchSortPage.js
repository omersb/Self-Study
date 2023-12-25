"use strict"

/* ------------------------------------------------------
    ExpressJS - Blog Project with Mongoose
------------------------------------------------------ */
// Searching & Sorting & Pagination

const {Model} = require("mongoose");
module.exports = (req, res, next) => {
    // SEARCHING: URL?search[key1]=value1&search[key2]=value2
    // https://www.mongodb.com/docs/manual/reference/operator/query/regex/

    const search = req.query?.search || {};
    // console.log(search)
    for (let key in search) search[key] = {$regex: search[key], $options: 'i'};
    // console.log(search)

    // SORTING: URL?sort[key1]=1&sort[key2]=-1 // 1: ASC, -1: DESC
    // const sort = {};
    // if (req.query?.sort) {
    //     for (const [key, value] of Object.entries(req.query.sort)) {
    //         sort[key] = parseInt(value, 10); // Convert the sort value to an integer
    //     }
    // }
    const sort = req.query?.sort || {};
    // console.log(sort);

    // PAGINATION: URL?page=1&limit=10
    let limit = Number(req.query?.limit)
    limit = limit > 0 ? limit : Number(process.env.PAGE_SIZE || 20)
    // console.log('limit', limit);

    let page = Number(req.query?.page);
    page = (page > 0 ? page : 1) - 1;
    // console.log('page', page);

    let skip = Number(req.query?.skip);
    skip = skip > 0 ? skip : (page * limit);
    // console.log('skip', skip);

    // RUN
    req.getModelFind = async (Model, populate = null) => {
        return await Model.find(search).sort(sort).skip(skip).limit(limit).populate(populate);
    }

    req.getModelListDetails = async (Model) => {
        const data = await Model.find(search)
        let details = {
            search, sort, skip, limit, page, pages: {
                previous: (page > 0 ? page : false),
                current: page + 1,
                next: page + 2,
                total: Math.ceil(data.length / limit)
            }, totalRecords: data.length,
        };
        details.pages.next = (details.pages.next <= details.pages.total ? false : details.pages.next);
        if (details.totalRecords <= limit) details.pages = false;
        return details;
    }

    next();
}