"use strict"

const {User} = require('./models/user');
const {BlogCategory, BlogPost} = require('./models/blogModel');

module.exports = async () => {
    const blogCategory = await BlogCategory.findOne();

    if (blogCategory) {
        BlogPost.updateMany({
            "blogCategoryId": {$exists: false}
        }, {
            "blogCategoryId": blogCategory._id


        }).catch(err => console.log(err))
    }
    console.log('Synced')
}