const express = require('express');
const { database } = require('./database/db.js');
const env = require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser');
const { router } = require('./routes/route.js');



const app = express();
app.use(cors())
app.use(express.json())
app.use(cookieParser());
app.use('/auth',router)

const port = process.env.port || 8001
database()

app.listen(port,()=>{
console.log(`server started on port : ${port}`)
})