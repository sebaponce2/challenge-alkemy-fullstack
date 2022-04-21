const express = require('express');
const router = express.Router();

const { getHistoryController } = require('../controllers/historyController');

router.get('/:id', getHistoryController);

module.exports = router;