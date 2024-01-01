"use strict"
/* ------------------------------------------------------
    Express - Personel API
------------------------------------------------------ */
require('dotenv').config()
const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || 8000
/* ------------------------------------------------------ */
// npm i swagger-autogen
// https://swagger-autogen.github.io/docs/

const swaggerAutogen = require('swagger-autogen')()
const packageJson = require('./package.json')

const document = {
    // info: {
    //     version: "1.0.0",
    //     title: "Personnel API",
    //     description: "Personnel API Information",
    //     termsOfService: "https://www.osb.com",
    //     contact: {name: "OSB", url: "https://www.osb.com", email: "info@osb.com"},
    //     license: {name: "BSD License", url: "https://opensource.org/licenses/BSD-3-Clause"}
    // },
    info: {
        version: packageJson.version,
        title: packageJson.title,
        description: packageJson.description,
        termsOfService: "https://www.osb.com",
        contact: {name: packageJson.author, url: "https://www.osb.com", email: "info@osb.com"},
        license: {name: packageJson.license, url: "https://opensource.org/licenses/BSD-3-Clause"}
    },
    host: `${HOST}:${PORT}`,
    basePath: "/",
    schemes: ["http", "https"],
    // JWT Settings
    securityDefinitions: {
        JWT: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
            description: "Entry Your AccessToken (JWT) for Login. Example <b>Bearer <i>...token...</i></b>",
        }
    },
    security: [{"JWT": true}],
    definition: {
        "/auth/login": {
            username: {
                type: "String",
                required: true,
            },
            password: {
                type: "String",
                required: true,
            },
        },
        "/auth/refresh": {
            "token.refresh": {
                description: "{token: {refresh: '...'}}",
                type: "String",
                required: true,
            },
        },
        // "Department": {
        //     "name": {
        //         type: "ObjectId",
        //         required: true,
        //     },
        // },
        "Department": require('./src/models/department.model').schema.obj,
        "Personnel": require('./src/models/personnel.model').schema.obj,

    }
}

const routes = ['./index.js']
const outputFile = './swagger.json'

// Create JSON File
swaggerAutogen(outputFile, routes, document)
