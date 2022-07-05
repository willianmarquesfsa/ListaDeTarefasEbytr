const express = require('express');
const generateLogin = require('../auth/generateLogin');
const postUser = require('../controllers/usersController/postUser');

const usersRoute = express.Router();

usersRoute.post('/users', postUser, generateLogin);

module.exports = usersRoute;
