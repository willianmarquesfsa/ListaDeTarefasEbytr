const express = require('express');
const postUser = require('../controllers/usersController/postUser');

const usersRoute = express.Router();

usersRoute.post('/users', postUser);

module.exports = usersRoute;
