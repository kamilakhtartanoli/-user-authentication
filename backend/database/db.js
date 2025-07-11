const mongoose = require('mongoose')

const database =async ()=>{
    const url = process.env.mongodb_url;
    try {
        mongoose.connect(url)
        console.log('DATABASE CREATED SUCCESSFULLY')
    } catch (error) {
        console.log(error.messasge)
    }
}

module.exports = {database}