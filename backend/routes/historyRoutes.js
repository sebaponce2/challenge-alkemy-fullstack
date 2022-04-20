const express = require('express');
const router = express.Router();

const { getHistoryController, setHistoryController, updateHistoryController, deleteHistoryController } = require('../controllers/historyController');

router.get(`/:id`, getHistoryController);
router.post('/', setHistoryController);
router.patch('/', updateHistoryController);
router.delete('/', deleteHistoryController);


module.exports = router;