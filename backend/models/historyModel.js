// Module imports
const { request } = require('../db/mysql');

module.exports.getHistory = async (idUser) => {
    const history = request(`
        SELECT * FROM history WHERE id_user = ${idUser} 
    `);

    return {
        rendered: history ? true : false
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
            ...history
        }
    }

    return {
        newRecord: false
    }

}
module.exports.updateHistory = async (id, idUser, date, concept, amount) => {

    const history = await request(`
        UPDATE history SET date = '${date}', concept = '${concept}', amount = ${amount} WHERE id = ${id} AND id_user = ${idUser}
    `);
    
    if (history) {
        return {
            updated: true,
            ...history
        }    
    }

    return {
        updated: false
    }
}

module.exports.deleteHistory = async (id, idUser) => {
    
    const history = await request(`
        DELETE FROM history WHERE id = ${id} AND id_user = ${idUser}
    `);
    
    return {
        deleted: history ? true : false
    }

}