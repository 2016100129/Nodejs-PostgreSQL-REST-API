const { Pool } = require('pg')
const { password } = require('pg/lib/defaults')

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "admin",
    database: "firstapi",
    port: "5432"
})

const getUsers = async (req, res) => {
    const response = await pool.query("select * from users;")
    res.status(200).json(response.rows)
}

const createUsers = async (req, res) => {
    const { name, email } = req.body
    const response = await pool.query('insert into users (name,email) values ($1, $2)', [name, email])
    console.log(response)
    res.json({
        message: "User add succefully",
        body: {
            user: { name, email }
        }
    })
}

const getUserById = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('select * from users where id = $1', [id])


    response.rows.length === 0 ? res.json({ message: "Usuario no encontrado o no existe." }) : res.json(response.rows)
}

const deleteUserById = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('delete from users where id = $1', [id])
    response.rows.length =
        res.send("Usuario eliminado correctamente.")
}

const updateUser = async (req, res) => {
    const { name, email } = req.body
    const id = req.params.id
    const response = await pool.query("update users set name = $1, email = $2 where id = $3", [name, email,id])
    res.json({
        message:"User "+id +" update succefully"
    })
}

module.exports = {
    getUsers,
    createUsers,
    getUserById,
    deleteUserById,
    updateUser
}