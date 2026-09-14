const mysql = require ('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bsit3_biodata'
});

module.exports = conn;