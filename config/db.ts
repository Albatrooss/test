import pg from 'pg';
import logging from './logging';
const Pool = pg.Pool;
logging.debug('db_config', process.env.POSTGRES_PASSWORD!)
let pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: 5432,
    host: 'vultr_db_1',
})

export default pool;