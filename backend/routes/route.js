const express = require('express');
const { signup, login } = require('../controller/auth.controller');
const { userVerification } = require('../middlewear/auth.middlewear');

const app = express()
const router = express.Router()

router.post('/signup',signup)
router.post('/login',login)
router.post('/',userVerification)

module.exports = {router}