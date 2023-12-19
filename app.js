const express = require('express')
const app = express()
const createDatabase = require('./database/createDatabase')
const modelSync = require('./models/modelSync')



createDatabase().then(()=>{
    modelSync()
})

module.exports = app