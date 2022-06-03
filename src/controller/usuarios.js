const bcrypt = require("bcrypt-nodejs");
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_comentarios'
})

async function findAll(req, res) {

    pool.getConnection((err, connection) => {
        if (err) throw err

        connection.query('SELECT * from tbl_usuarios', (err, rows) => {
            connection.release()

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
}


async function findByNameAndPassword(req, res) {

    pool.getConnection((err, connection) => {
        if (err) throw err
        connection.query('SELECT nombre, contrasena from tbl_usuarios WHERE nombre = ? AND contrasena = ?', [req.params.usuario, req.params.contrasena], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
}

module.exports = {
    findAll,
    findByNameAndPassword
};