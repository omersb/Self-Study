"use strict"
/* ------------------------------------------------------
    Express - Personel API
------------------------------------------------------ */
// app.use(findSearchSortPage);

module.exports = (req, res, next) => {
    //Searching & Sorting & Pagination

    // Searching
    const search = req.query?.search || {};
    for (let key in search) search[key] = { $regex: search[key], $options: "i" };

    // Sorting
    const sort = req.query.sort || {};

    // Pagination
    let limit = Number(req.query?.limit)
    limit = limit > 0 ? limit : Number(process.env.PAGE_SIZE || 20);

    // Page
    let page = Number(req.query?.page);
    page = (page > 0 ? page : 1) - 1;

    // Skip
    let skip = Number(req.query?.skip);
    skip = skip > 0 ? skip : (page * limit);

    res.getModelList = async function (Model, populate = null) {
        return await Model.find(search).sort(sort).skip(skip).limit(limit).populate(populate);
    }

    // Details
    res.getModelListDetails = async function (Model) {
        const data = await Model.find(search)
        let details = {
            search,
            sort,
            skip,
            limit,
            page,
            pages: {
                previous: (page > 0 ? page : false),
                current: page + 1,
                next: page + 2,
                total: Math.ceil(data.length / limit)
            },
            totalRecords: data.length,
        };
        details.pages.next = (details.pages.next > details.pages.total ? false : details.pages.next);
        if (details.totalRecords <= limit) details.pages = false;
        return details;
    }
    next();
}

