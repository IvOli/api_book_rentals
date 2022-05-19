// import  Client  from "pg/lib/client.js";
import pg from 'pg'
import dotenv from 'dotenv';

dotenv.config();

async function getConnection() {
    const client = new pg.Client({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    });
    await client.connect();
    return client;
}

export{ getConnection };