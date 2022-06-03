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

        connection.query('SELECT * from tbl_comentarios', (err, rows) => {
            connection.release()

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
}


async function putComment(req, res) {

    pool.getConnection((err, connection) => {
        if (err) throw err
        const params = req.body

        connection.query('INSERT INTO tbl_comentarios SET ?', [params], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(`Comentario agregado correctamente`)
            } else {
                console.log(err)
            }

        })
        console.log(req.body);
    })
}

module.exports = {
    findAll,
    putComment
};