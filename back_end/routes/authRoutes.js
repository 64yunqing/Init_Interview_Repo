//定义路由 
//API路径和请求方式
const express = require('express');
const authController = require('../controllers/authController.js');

const router = express.Router();
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
