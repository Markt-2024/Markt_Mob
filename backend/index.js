const express = require('express')
var cors = require('cors')

require('dotenv').config();

const dbConfig = require('./config/dbConfig')

const app = express()

const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const adminRoutes = require('./routes/adminRoutes')



app.use(cors())
app.use(express.json())
app.use('/api/users' , userRoutes)  
app.use('/product' , productRoutes)
app.use('/admin' , adminRoutes)


const PORT = 8083

app.listen(PORT , ()=>{
    console.log("server running")
})