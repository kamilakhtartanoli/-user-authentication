const jwt = require('jsonwebtoken')

const createtoken = (id)=>{
    return jwt.sign({id},process.env.access_token_scret,{
        expiresIn:3 *24 *60*60
    })
}

module.exports  = {createtoken}