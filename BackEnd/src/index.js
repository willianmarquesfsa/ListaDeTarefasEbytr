const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const terefasRoutes = require('./api/terefasRoutes');
const loginRoute = require('./api/loginRoute');

app.use(cors());

app.use(bodyParser.json());
app.listen(3001);
app.use('/', terefasRoutes);
app.use('/', loginRoute);
