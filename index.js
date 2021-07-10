const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const router = require ('./Router/index')

mongoose
    .connect(process.env.MONGO_URL, {
        dbName: process.env.MONGO_DB, 
        useNewUrlParser: true,
        useUnifiedTopology:true
    }, err => {
        if (err) {throw new Error(err) }
        console.info('Connected to MongoDB')
    })


    app.use(express.json())
    app.use(cors())
    app.use('/api', router)
    app.use(morgan('combined'))

    app.listen( process.env.PORT, (err) => {
        if (err) {throw new Error(err)}
        console.info('>'.repeat(40))
        console.log('Server Live')
        console.info('>'.repeat(40) +'\n')
    })