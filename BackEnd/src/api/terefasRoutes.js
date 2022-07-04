const express = require('express');
const tarefasFindAll = require('../controllers/tarefasControllers/tarefasFindAll');
const tarefasInsert = require('../controllers/tarefasControllers/tarefasInsert');
const tarefasDelete = require('../controllers/tarefasControllers/tarefasDelete');
const tarefasUpdate = require('../controllers/tarefasControllers/tarefasUpdate');
const middlewaresTarefaValidade = require('../middlewares/tarefaValidade');
const middlewaresTarefaIdRequire = require('../middlewares/tarefaIdRequire');
const loginValidate = require('../auth/loginValidate');

const terefasRoutes = express.Router();

terefasRoutes.get('/tarefas', loginValidate, tarefasFindAll);
terefasRoutes.post('/tarefas', middlewaresTarefaValidade, tarefasInsert);
terefasRoutes.delete('/tarefas/:id', middlewaresTarefaIdRequire, tarefasDelete);
terefasRoutes.put('/tarefas/:id', middlewaresTarefaIdRequire, middlewaresTarefaValidade, tarefasUpdate);

module.exports = terefasRoutes;
