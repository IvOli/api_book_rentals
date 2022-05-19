// import { getConnection } from "../libs/postgres.js"
import { pool } from "../libs/postgres.pool.js";


// const getClients = async(req, res) => {
//     const client = await getConnection();
//     const rta = await client.query('SELECT * FROM actor');
//     const rows = rta.rows
//     return res.json({ rta});
// }
const getClients = async(req, res) => {
    const rta = await pool.query(`SELECT * FROM language`);
    return res.json({ data: rta.rows });
}

const getClientsByName = async(req, res) => {

    const { name } = req.params
    console.log(name)
    const query = `SELECT * FROM actor WHERE first_name = '${name}'`
    const rta = await pool.query(query);
    return res.json({ data: rta.rows });
}

export { getClients, getClientsByName }