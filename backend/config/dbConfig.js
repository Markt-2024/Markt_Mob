const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL_ROHITH)


const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Connection Successful')
})
connection.on('error' , ()=>{
    console.log('Connection unsuccessful')
})