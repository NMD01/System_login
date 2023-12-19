const mysql = require('mysql2/promise')
require('dotenv').config()

async function createDatabase(){

   
   const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    })

    await connection.execute("CREATE DATABASE IF NOT EXISTS Login_jwt")
    connection.end()
}

module.exports = createDatabase

