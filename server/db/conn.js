const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aug@1998',
    database: 'crudmysql',
});
conn.connect((err) => {
    if (err) throw err;
        console.log("DB Connected");
});

module.exports = conn;