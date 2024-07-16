const express = require('express')
var cors = require('cors')

require('dotenv').config();

const dbConfig = require('./config/dbConfig')

const app = express()

const userRoutes = require('./routes/userRoutes')


const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
  };


app.use(cors(corsOptions))
app.use(express.json())
app.use('/api/users' , userRoutes)



const PORT = 8083




app.listen(PORT , ()=>{
    console.log("server running")
})