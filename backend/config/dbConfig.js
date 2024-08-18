const mongoose = require('mongoose')
require('dotenv').config();

// mongoose.connect(process.env.DATABASE_URL_ROHITH)
mongoose.connect("mongodb+srv://rohiththirunagari515:rohith2006@cluster0.hnltawe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Connection Successful')
})
connection.on('error' , ()=>{
    console.log('Connection unsuccessful')
})