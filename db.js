const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'rsiot',
  password: '1351371357VN',
  port: 5432,
});

module.exports = pool;