// Module imports
const { request } = require('../db/mysql');

module.exports.getHistory = async (idUser) => {
    const history = await request(`
        SELECT * FROM history WHERE id_user = ${idUser} 
    `);
    
    if (history.length >= 1) {
        return {
            rendered: history ? true : false,
            history: [...history]
        }
    }

    return {
        rendered: history ? true : false,
        history: [history]
    }
}

module.exports.setHistory = async (idUser, operation, date, concept, amount) => {
    const history = await request(`
        INSERT INTO history(id_user, operation, date, concept, amount)
        VALUES (${idUser}, ${operation}, '${date}', '${concept}', ${amount});
    `);

    if (history) {
        return {
            newRecord: true,
            history
        }
    }

    return {
        newRecord: false
    }

}
module.exports.updateHistory = async (idOperation, date, concept, amount) => {

    const history = await request(`
        UPDATE history SET date = '${date}', concept = '${concept}', amount = ${amount} WHERE id = ${idOperation}
    `);

    if (history.affectedRows == 1) {
        return {
            updated: true
        }    
    }

    return {
        updated: false
    }
}

module.exports.deleteHistory = async (idOperation) => {
    
    const history = await request(`
        DELETE FROM history WHERE id = ${idOperation}
    `);
    
    return {
        deleted: history ? true : false
    }

}