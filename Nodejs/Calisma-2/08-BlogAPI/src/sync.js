"use strict"

const {BlogCategory, BlogPost} = require('./models/blogModel');
const User = require("./models/userModel");

module.exports = async () => {

    const user = await User.findOne();
    if (user) {
        BlogPost.updateMany({
            "userId": {$exists: false} // userId alanı olmayan tüm kayıtlar
        }, {
            "userId": user._id // userId alanı olmayan tüm kayıtlara user._id değerini ata
        }).catch(err => console.log(err))
    }


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
