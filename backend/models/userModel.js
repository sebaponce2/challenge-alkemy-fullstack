// Module imports
const { request } = require('../db/mysql');
const { hashPassword, comparePassword } = require('../utils/hashPassword'); 

module.exports.register = async (name, lastName, email, password) => {
    const hashedPassword = hashPassword(password);

    const verifyUser = await request(`
        SELECT * FROM users_challenge WHERE email = "${email}"
    `);

    if (verifyUser != 0) {
        return {
            isAlreadyUsed: true
        }
    }

    const user = await request(`
        INSERT INTO users_challenge (name, last_name, email, password)
        VALUE ('${name}', '${lastName}', '${email}', '${hashedPassword}')
    `)

    return {
        newUser: true,
        id: user.insertId
    }
}

module.exports.login = async (email, password) => {

    const user = await request(`
        SELECT * FROM users_challenge WHERE email = '${email}'
    `);


    if (user && comparePassword(password, user.password)) {
        delete user.password
        console.log("misma contraseña");
        return {
            isUser: true,
            ...user
        }
    }
    console.log("contraseña incorrecta");
    return {
        isUser: false
    }
}