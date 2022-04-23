const mysql = require('mysql');

module.exports.request = (query) => new Promise((res, rej) => {

    const connection = mysql.createConnection({
        host: 'sql10.freesqldatabase.com',
        port: 3306,
        user: 'sql10487635',
        password: 'ARa6Ife6xC',
        database: 'sql10487635'
    });

    connection.query(query, (error, results, fields) => {
        if(error) rej(error);


        if (results == 0) {
            res(results);
        } else if (results.length <= 1) {
            res(results[0]);
        }else res(results);

        connection.end((err) => {
            if (err) rej(err);

            res(results);

            console.log('Query finished.');
        });
    });
});