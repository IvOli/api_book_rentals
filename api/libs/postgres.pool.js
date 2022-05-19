// import  Client  from "pg/lib/client.js";
import pg from 'pg'
import dotenv from 'dotenv';

dotenv.config();

    const pool = new pg.Pool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    });

export{ pool };