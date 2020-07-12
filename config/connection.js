let mysql = require("mysql")
let connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME
    })
}

connection.connect(function(err){
    if (err) throw err
    console.log('Connected to the database')
})

module.exports = connection