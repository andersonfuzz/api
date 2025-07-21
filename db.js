import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    host: 'localhost',
    user: 'andersonfuzz',
    password: 'An@1haunted0',
    database: 'tasksdb',
    port: 5432
});

export default pool;
