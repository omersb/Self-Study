"use strict"

const {BlogCategory, BlogPost} = require('./models/blogModel');
const User = require("./models/userModel");

/* **************************************************
// Yeni bir kullanıcı oluşturulduğunda, bu kullanıcıya ait olmayan tüm blog yazılarının userId alanı bu kullanıcıya ait olacak şekilde güncellenmesi
************************************************** */

// module.exports = async () => {
//
//     const user = await User.findOne();
//     if (user) {
//         BlogPost.updateMany({
//             "userId": {$exists: false} // userId alanı olmayan tüm kayıtlar
//         }, {
//             "userId": user._id // userId alanı olmayan tüm kayıtlara user._id değerini ata
//         }).catch(err => console.log(err))
//     }
//
//
//     const blogCategory = await BlogCategory.findOne();
//
//     if (blogCategory) {
//         BlogPost.updateMany({
//             "blogCategoryId": {$exists: false} // blogCategoryId alanı olmayan tüm kayıtlar
//         }, {
//             "blogCategoryId": blogCategory._id // blogCategoryId alanı olmayan tüm kayıtlara blogCategory._id değerini ata
//
//
//         }).catch(err => console.log(err))
//     }
//     console.log('Synchronizations')
// }

module.exports = async () => {

    await User.deleteMany().then(() => console.log('- User Deleted All'))
    await BlogCategory.deleteMany().then(() => console.log('- BlogCategory Deleted All'))
    await BlogPost.deleteMany().then(() => console.log('- BlogPost Deleted All'))

    const user = await User.create({
        email: 'test@test.com', password: '123456', name: 'Test', lastName: 'Test',
    });

    const blogCategory = await BlogCategory.create({
        name: 'Test Category',
    });

    for (let key in [...Array(200)]) {
        await BlogPost.create({
            userId: user._id,
            blogCategoryId: blogCategory._id,
            title: `test ${key} title`,
            content: `test ${key} content`,
            published: Boolean(key % 2),
        });
    }
    console.log('Synchronizations')
}
