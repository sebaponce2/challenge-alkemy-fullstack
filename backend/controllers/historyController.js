const { setHistory ,getHistory ,updateHistory, deleteHistory } = require('../models/historyModel');

module.exports.getHistoryController = async (req, res) => {
    const { idUser } = req.body; 
    
    try {
        const data = await getHistory( idUser );
        res.status(200).send(data);

    } catch (error) {
        console.log(error);
    }
}

module.exports.setHistoryController = async (req, res) => {
    const { idUser, operation, date, concept, amount } = req.body;

    try {
        const data = await setHistory(idUser, operation, date, concept, amount);
        res.status(200).send(data);

    } catch (error) {
        console.log(error);
    }
}

module.exports.updateHistoryController = async (req, res) => {
    const {id, idUser, date, concept, amount} = req.body;

    try {
        const data = await updateHistory(id, idUser, date, concept, amount);
        res.status(200).send(data);
        
    } catch (error) {
        console.log(error);
    }
}

module.exports.deleteHistoryController = async (req, res) => {
    const { id, idUser } = req.body;

    try {
        const data = await deleteHistory(id, idUser);
        res.status(200).send(data);

    } catch (error) {
        console.log(error);
    }
}