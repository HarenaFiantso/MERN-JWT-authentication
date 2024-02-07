import pg from 'pg';
const { Pool } = pg;

const localPoolConfig = {
  user: process.env.DB_LOCAL_USER,
  password: process.env.DB_LOCAL_PASSWORD,
  host: process.env.DB_LOCAL_HOST,
  port: process.env.DB_LOCAL_PORT,
  database: process.env.DB_LOCAL_NAME,
};

const poolConfig = process.env.DB_URL
  ? {
      connectionString: process.env.DB_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : localPoolConfig;

const pool = new Pool(poolConfig);
export default pool;
