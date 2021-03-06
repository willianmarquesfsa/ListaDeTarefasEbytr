const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const terefasRoutes = require('./api/terefasRoutes');
const loginRoute = require('./api/loginRoute');
const usersRoute = require('./api/usersRoute');

app.use(cors());

app.use(bodyParser.json());
app.listen(3001);
app.use('/', terefasRoutes);
app.use('/', loginRoute);
app.use('/', usersRoute);
