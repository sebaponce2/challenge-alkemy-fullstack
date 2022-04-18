// Module imports
const { request } = require('../db/mysql');
const { hashPassword, comparePassword } = require('../utils/hashPassword'); 

module.exports.register = async (name, lastName, email, password) => {
    const hashedPassword = hashPassword(password);

    const verifyUser = await request(`
        SELECT * FROM users WHERE email = "${email}"
    `);

    if (verifyUser) {
        return {
            isAlreadyUsed: true
        }
    }

    const user = await request(`
        INSERT INTO users (name, last_name, email, password)
        VALUE ('${name}', '${lastName}', '${email}', '${hashedPassword}')
    `)

    return {
        newUser: true,
        id: user.insertId
    }
}

module.exports.login = async (email, password) => {
    const user = await request(`
        SELECT * FROM users WHERE email = '${email}'
    `);

    if (user && comparePassword(password, user.password)) {
        delete user.password
        return {
            isUser: true,
            ...user
        }
    }

    return {
        isUser: false
    }
}