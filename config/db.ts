import pg from 'pg';
const Pool = pg.Pool;

let pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: 5432,
    host: process.env.POSTGRES_HOST,
})

export default pool;