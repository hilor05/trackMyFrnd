const mysql = require('mysql2/promise');
const config = require('config');

const createMysqlConn = async () => {
  console.log("Connecting to MySQL...");
  let pool;
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
console.log(poolPromise);
exports.execQuery = async (query, params) => {
  try {
    const conn = await poolPromise.getConnection();
    console.log("got conn");
    const res = await conn.query(query);
    console.log("result", res);
    //const [rows, fields] = await pool.query(query, params);
    await conn.release();
    console.log("conn released");
  } catch (err) {
    console.log(err);
    throw err;
  }
};
