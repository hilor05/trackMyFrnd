const mysql = require('mysql2/promise');
const config = require('config');

const createMysqlConn = async () => {
  console.log("Connecting to MySQL...");
  let pool;
  console.log(config.get('host'), config.get('user'), config.get('password'), config.get('database'), config.get('connectionLimit'));
  try {
    pool = await mysql.createPool({
      host: config.get('host'),
      user: config.get('user'),
      password: config.get('password'),
      database: config.get('database'),
      connectionLimit: config.get('connectionLimit'),
    });
  } catch (err) {
    console.log(err);
  }
  return pool;
};

const poolPromise = createMysqlConn();

exports.execQuery = async (query, params) => {
  try {
    const pool = await poolPromise;
    const [rows, fields] = await pool.execute(query, params);
    return rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
