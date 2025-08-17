const express = require('express');
const { signup, login } = require('../controller/auth.controller');
const { requireAuth } = require('../middlewear/auth.middlewear');

const app = express()
const router = express.Router()

router.post('/signup',signup)
router.post('/login',login)
router.post('/',requireAuth)

module.exports = {router}