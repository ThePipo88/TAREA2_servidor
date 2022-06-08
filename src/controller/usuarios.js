const bcrypt = require("bcrypt-nodejs");
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_comentarios'
})


async function createUser(req, res) {

    pool.getConnection((err, connection) => {
        if (err) throw err
        const params = req.body;

        connection.query('INSERT INTO tbl_usuarios SET ?', [params], (err, rows) => {
            connection.release()

            if (!err) {
                res.send("Usuario creado con exito");
            } else {
                console.log(err)
            }
        })

    })
}

async function actualizarUsuario(req, res) {

    pool.getConnection((err, connection) => {
        if (err) throw err
        const params = req.body
        connection.query('UPDATE tbl_usuarios SET ? WHERE id = ?', [req.body, req.body.id], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(`Usuario modificado correctamente`)
            } else {
                console.log(err)
            }

        })
        console.log(req.body);
    })
}

async function eliminarUsuario(req, res) {

    pool.getConnection((err, connection) => {
        if (err) throw err
        const params = req.body;

        connection.query('DELETE FROM tbl_usuarios WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(`Usuario eliminado correctamente`)
            } else {
                console.log(err)
            }

        })
        console.log(req.body);
    })
}


async function findAll(req, res) {

    (async () => {

        const resp = await pool.getConnection((err, connection) => {

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
    })()

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
    findByNameAndPassword,
    createUser,
    actualizarUsuario,
    eliminarUsuario
};