// Express module imports
const express = require('express');
const router = express.Router();

// Module imports 
const { registerController } = require('../controllers/userController');

router.post('/', registerController);

module.exports = router;