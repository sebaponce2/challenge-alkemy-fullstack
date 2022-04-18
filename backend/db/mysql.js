const mysql = require('mysql');

module.exports.request = (query) => new Promise((res, rej) => {

    const connection = mysql.createConnection({
        host: 'db4free.net',
        port: 3306,
        user: 'challengealkemy1',
        password: 'ponce1234',
        database: 'challengealkemy1'
    });

    connection.query(query, (error, results, fields) => {
        if(error) rej(error);

        if (results.length <= 1) {
            res(results[0]);
        }else res(results);

        connection.end((err) => {
            if (err) rej(err);

            res(results);

            console.log('Query finished.');
        });
    });
});