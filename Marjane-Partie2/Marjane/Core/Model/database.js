const mysql = require('mysql');
require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.DPORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})
connection.connect((err) => {
    if (err) throw err
    console.log('Connection was established successfully :)')
});

module.exports = connection;