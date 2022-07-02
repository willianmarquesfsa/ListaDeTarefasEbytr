const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const apiRoutes = require('./api/routes');

app.use(bodyParser.json());
app.listen(3000);
app.use('/', apiRoutes);
