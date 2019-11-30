const mysql = require('mysql');

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'bcd127',
    database : 'lojaonline',
    port: '3306'
});

conn.connect();

module.exports = conn;