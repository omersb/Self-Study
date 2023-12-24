"use strict"

const {BlogCategory, BlogPost} = require('./models/blogModel');

module.exports = async () => {
    const blogCategory = await BlogCategory.findOne();

    if (blogCategory) {
        BlogPost.updateMany({
            "blogCategoryId": {$exists: false} // blogCategoryId alanı olmayan tüm kayıtlar
        }, {
            "blogCategoryId": blogCategory._id // blogCategoryId alanı olmayan tüm kayıtlara blogCategory._id değerini ata


        }).catch(err => console.log(err))
    }
    console.log('Synchronizations')
}