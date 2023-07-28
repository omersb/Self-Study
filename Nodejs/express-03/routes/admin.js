const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send(`
        <html> 
            <head> <title> Add a New Product </title> </head>
            <body>
                <form action="/admin/add-product" method="POST">
                    <input type="text" name="productName">
                    <input type="submit" value="Save Product">
                </form>
            </body>
        </html> 
    `);
});

router.post('/add-product', (req, res, next) => {
    //databese kayıt yapıla bilir
    console.log(req.body);
    // kullanıcıyı başka sayfaya yönlendirme
    res.redirect('/');
});


module.exports = router;