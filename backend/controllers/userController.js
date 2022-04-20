const { register, login } = require('../models/userModel');


module.exports.registerController = async (req, res) => {
    const {name, lastName, email, password} = req.body;

    try {
        const user = await register(name, lastName, email, password);
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
    }
}

module.exports.loginController = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await login(email, password);
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
    }
}
