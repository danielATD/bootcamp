const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: '127.0.0.1', //'localhost'
    port: 3306,
    user: 'daniel',
    password: 'sasuke07',
    database: 'OrganizerApp'
}) //function


module.exports = {
    connection
}