// Module imports
const express = require('express');
const app = express();
const config = require('../backend/config/config');
const cors = require('cors');


// Route imports
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const historyRoute = require('./routes/historyRoutes');
const homeRoute = require('./routes/homeRoutes');

app.use(express.json());
app.use(cors());

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/newOperation', historyRoute);
app.use('/', homeRoute);

app.listen(config.port, () => console.log(`Server started ${config.port}`));