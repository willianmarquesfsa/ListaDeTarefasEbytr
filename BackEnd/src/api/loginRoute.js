const express = require('express');
const bcryptPassword = require('../auth/bcryptPassword');
const generateLogin = require('../auth/generateLogin');
const loginValidate = require('../auth/loginValidate');
const login = require('../auth/login');

const loginRoutes = express.Router();

loginRoutes.post('/login', bcryptPassword, generateLogin);
loginRoutes.get('/login', loginValidate, login);

module.exports = loginRoutes;
