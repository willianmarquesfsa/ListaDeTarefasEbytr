const express = require('express');
const tarefasFindOne = require('../controllers/loginController/userFindOne');
// const tarefasInsert = require('../controllers/tarefasControllers/tarefasInsert');

const loginRoutes = express.Router();

loginRoutes.get('/login/:id', tarefasFindOne);
loginRoutes.post('/login');

module.exports = loginRoutes;
