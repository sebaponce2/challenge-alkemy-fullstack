const { getHistoryModel } = require('../models/homeModel');

module.exports.getHistoryController = async (req, res) => {
    const idUser = req.params.id;

    try {
        const data = await getHistoryModel(idUser);

        res.status(200).send(data);

    } catch (error) {
        console.log(error);
    }
}