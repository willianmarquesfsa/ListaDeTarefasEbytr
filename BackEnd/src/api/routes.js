const express = require('express');
const tarefasFindAll = require('../controllers/tarefasFindAll');
const tarefasInsert = require('../controllers/tarefasInsert');
const tarefasDelete = require('../controllers/tarefasDelete');
const tarefasUpdate = require('../controllers/tarefasUpdate');
const middlewaresTarefaValidade = require('../middlewares/tarefaValidade');
const middlewaresTarefaIdRequire = require('../middlewares/tarefaIdRequire');

const apiRoutes = express.Router();

apiRoutes.get('/tarefas', tarefasFindAll);
apiRoutes.post('/tarefas', middlewaresTarefaValidade, tarefasInsert);
apiRoutes.delete('/tarefas/:id', middlewaresTarefaIdRequire, tarefasDelete);
apiRoutes.put('/tarefas/:id', middlewaresTarefaIdRequire, middlewaresTarefaValidade, tarefasUpdate);

module.exports = apiRoutes;
