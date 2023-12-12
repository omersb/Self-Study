"use strict"

/* ------------------------------------------------------
    ExpressJS - Blog Project with Mongoose
------------------------------------------------------ */

const mongoose = require('mongoose');

/* ------------------------------------------------------ */

// const nameSchema = new mongoose.Schema({
//     // _id: // Auto Created
//     // fieldName: String // Kısa kullanımı
//
//     fieldName: {
//         type: String,   // Veri tipi
//         default: null,  // Varsayılan değer
//         trim: true,     // Boşlukları sil
//         select: true,   // Göster/Gösterme
//         index: true,    // Indexleme veri arama hızı
//         unique: true,   // Benzrsiz olmalı
//         required: true, // Zorunlu alan
//         // required: [true, 'Veri gelmediğinde yayınlayacağimiz mesaj'] // Zorunlu alan ve mesaj
//         enum: [0, 1, 2, 3], // Gelecek verinin sadece bu değerlerden biri olması gerekiyor
//         validate: {
//             validator: function (v) {
//                 return /^[\w\s]+$/.test(v);
//             },
//             message: props => `${props.value} is not a valid name!`
//         },   // Kendi doğrulama fonksiyonumuzu yazabiliriz
//         get: v => v.toLowerCase(), // Veri çekilirken
//         set: v => v.toLowerCase(), // Veri kaydedilirken
//     },
//
// }, {
//     collection: 'collectionName', // Tablo adı
//     timestamps: true, // Oluşturma ve güncelleme tarihleri CreatedAt ve UpdatedAt olarak kaydedilir
// });

/* ------------------------------------------------------ */
//    BlogCategory
/* ------------------------------------------------------ */

const blogCategorySchema = new mongoose.Schema({

    name: {
        type: String, trim: true, required: true
    }
}, {
    collection: 'blogCategories', timestamps: true
});

/* ------------------------------------------------------ */
//    BlogPost
/* ------------------------------------------------------ */

const blogPostSchema = new mongoose.Schema({

    blogCategoryId: {
        type: mongoose.Schema.ObjectId, ref: 'BlogCategory', required: true
    }, title: {
        type: String, trim: true, required: true
    }, content: {
        type: String, trim: true, required: true
    }, published: {
        type: Boolean, default: true
    }
}, {
    collection: 'blogPosts', timestamps: true
});

// const BlogPostModel = mongoose.model('blogPost', blogPostSchema);
// module.exports = {
//     BlogPost: BlogPostModel
// };

module.exports = {
    BlogPost: mongoose.model('BlogPost', blogPostSchema),
    BlogCategory: mongoose.model('BlogCategory', blogCategorySchema)
};
