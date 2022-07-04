const express = require('express');
const bcryptPassword = require('../auth/bcryptPassword');
const generateLogin = require('../auth/generateLogin');

const loginRoutes = express.Router();

loginRoutes.post('/login', bcryptPassword, generateLogin);

module.exports = loginRoutes;
