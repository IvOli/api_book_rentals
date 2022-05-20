import { pool } from "../libs/postgres.pool.js";

const saveUser = async(req, res) => {
    const {name, birthdate, password, email, app_name} = req.body
    const query = `INSERT INTO users (name, birthdate, password, email, app_name)
    VALUES ('${name}', '${birthdate}', '${password}', '${email}', '${app_name}');`
    console.log({query})
    const rta = await pool.query( query);
    return res.json({ data: rta });
}

const editUser = async(req, res) => {
    const { id } = req.params;
    console.log({id})
    const {name, birthdate, password, email, app_name} = req.body
    const query = `UPDATE users SET name = '${name}', birthdate = '${birthdate}', password = '${password}', email = '${email}', app_name = '${app_name}' WHERE user_id='${id}';`
    console.log({query})
    const rta = await pool.query( query);
    return res.json({ data: rta });
}

export { saveUser, editUser }