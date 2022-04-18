// Module imports
const express = require('express');
const app = express();
const config = require('../backend/config/config');
const cors = require('cors');


// Route imports
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');


app.use(express.json());
app.use(cors());

app.use('/register', registerRoute);
app.use('/login', loginRoute);


app.listen(config.port, () => console.log(`Server started ${config.port}`));