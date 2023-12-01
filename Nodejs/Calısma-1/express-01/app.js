const express = require('express');
const app = express();


// app.get('/', (req, res) => {
//     res.send('Hello World');
// });
//
// app.get('/api/products', (req, res) => {
//     res.send("Ürünler Listelendi");
// });

// app.use((req, res, next) => {
//     console.log("Middleware 1 çalıştırıldı.");
//     next();
// });

app.use('/', (req, res, next) => {
    console.log("Loglama yapıldı...");
    next();
});

app.use('/add-product', (req, res, next) => {
    res.send("<h1>Adding product page<h1>");
});

app.use('/product-list', (req, res, next) => {
    res.send("<h1>Product listing page<h1>");
});

app.use('/', (req, res, next) => {
    res.send("<h1>Hello from express.js<h1>");
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});
