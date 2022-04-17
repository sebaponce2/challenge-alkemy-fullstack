const express = require('express');
const app = express();
const config = require('../backend/config/config');

app.use(express.json());

app.get("/", (req, res) =>{

});


app.listen(config.port, () => console.log(`Server started ${config.port}`));