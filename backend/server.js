// Module imports
const express = require('express');
const app = express();
const config = require('../backend/config/config');


// Route imports
const registerRoute = require('./routes/registerRoute');



app.use(express.json());


app.use('/register', registerRoute);



app.listen(config.port, () => console.log(`Server started ${config.port}`));