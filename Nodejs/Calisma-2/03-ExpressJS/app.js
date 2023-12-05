"use strict"

/* -----------------------------------------------
    ExpressJS
----------------------------------------------- */

/*
* npm init -y
* npm -i express dotenv
*/

/* ExpressJs Start */
const express = require('express');
const app = express();


/* ENV */
require('dotenv').config();
const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || 8000;
// console.log(`Server running at ${HOST}:${PORT}`);

/* ------------------------------------------------------ */

// app.get('/', (request, response) => {
//     // response.send('Hello World')
//     response.send({message: 'GET metodu ile gelen istek'})
// })
// app.post('/', (request, response) => {
//     response.send({message: 'POST metodu ile gelen istek'})
// })
// app.put('/', (request, response) => {
//     response.send({message: 'PUT metodu ile gelen istek'})
// })
// app.delete('/', (request, response) => {
//     response.send({message: 'DELETE metodu ile gelen istek'})
// })

//? Allow at all methonds:
// app.all('/', (request, response) => {
//     response.send({message: 'ALL metodu ile gelen istek'})
// })

//? app.route('url):
// app.route('/route')
//     .get((req, res) => res.send({message: 'route GET metodu ile gelen istek'}))
//     .post((req, res) => res.send({message: 'route POST metodu ile gelen istek'}))
//     .put((req, res) => res.send({message: 'route PUT metodu ile gelen istek'}))
//     .delete((req, res) => res.send({message: 'route DELETE metodu ile gelen istek'}))

/* ------------------------------------------------------ */
/* URL (Path) options */
// app.get('/', (req, res) => res.send("in 'root' path"))
// app.get('/path', (req, res) => res.send("in path"))

//? express-urls supported JokerChar:
// app.get('/abc(x?)123', (req, res) => res.send("in 'abc(x?)123'"))    // abc123 or abcx123
// app.get('/abcx?123', (req, res) => res.send("in 'abcx?123'"))        // üsteki ile aynı
// app.get('/abcx+123', (req, res) => res.send("in 'abcx?123'"))        // en bir x olacak istediğin kadar sadece x olacak
// app.get('/abc*123', (req, res) => res.send("in 'abc*123'"))          // * arada ne olursa olsun

//? express-urls supported reqexp:
// app.get('/xyz/', (req, res) => res.send("regex /xyz/")) // url nin herhangi bir yerinde xyz varsa çalışır
// app.get('/^\/xyz/', (req, res) => res.send("regex /^xyz/")) // url nin başında xyz varsa çalışır
// app.get('/xyz\/$/', (req, res) => res.send("regex /xyz$/")) // url nin sonunda xyz varsa çalışır
/* ------------------------------------------------------ */
/* URL Parameters (req.params) */

// /user/99/config/update
// app.get('/user/:userId/config/:configParam/*', (req, res) => {
//     res.send({
//         userId: req.params.userId,
//         configParam: req.params.configParam,
//         url: {
//             protocol: req.protocol,
//             subdomains: req.subdomains,
//             hostname: req.hostname,
//             baseUrl: req.baseUrl,
//             params: req.params,
//             query: req.query,
//             path: req.path,
//             originalUrl: req.originalUrl
//         }
//     })
// })

//? '\d' sadece sayıları kabul eder tek bir karekterdir 0-9
// /user/:userId([0-9]+)
// app.get('/user/:userId(\\d+)', (req, res) => {
//     res.send({
//         params: req.params,
//         userId: req.params.userId,
//         url: {
//             protocol: req.protocol,
//             subdomains: req.subdomains,
//             hostname: req.hostname,
//             baseUrl: req.baseUrl,
//             params: req.params,
//             query: req.query,
//             path: req.path,
//             originalUrl: req.originalUrl
//         }
//     })
// })

// app.get('/command/:userId-:profileId', (req, res) => {
//     res.send({
//         params: req.params
//     })
// })

/* ------------------------------------------------------ */
/* Response Methonds */
//? SendStatus:
// app.get('/', (req, res) => res.sendStatus(200))  // 200 OK
//? Status
// app.get('/', (req, res) => res.status(200).send({ message: 'OK'})) // 200 OK
// app.post('/', (req, res) => res.status(201).send({ message: 'Created'})) // 201 Created
// app.put('/', (req, res) => res.status(202).send({ message: 'Accepted'})) // 202 No Content
// app.delete('/', (req, res) => res.status(204).send({ message: 'No Content'})) // 204 No Content
//?JSON (.send() ile aynı işi yapar)
// app.get('/', (req, res) => res.json({ key: 'value'})) // 200 OK
//? Download File (Dosya indirme)
// app.get('/download', (req, res) => res.download('app.js', 'changeName.js')) // 200 OK
//?SendFile (Dosya gönderme)
// console.log(__dirname);
// app.get('/file', (req, res) => res.sendFile(__dirname + '/index.js')) // FilePath must be realPath
//? Redirect
// app.get('/google', (req, res) => res.redirect(302, 'https://google.com')) // 302 Found



/* ------------------------------------------------------ */


app.listen(PORT, HOST, () => console.log(`Server running at http://${HOST}:${PORT}`))

/* ------------------------------------------------------ */


