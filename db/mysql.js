const mysql = require('mysql2');
const { createPool } = require('mysql2');
const config = require('config');

const createMysqlConn = ()=>{
    console.log("connecting to mysql");
    try {
        const pool = mysql.createPool({
            host: config.host,        
            user: config.user,     
            password: config.password,
            database: config.database,
            connectionLimit: config.connectionLimit,
        }).promise();
    } catch(err) {
        console.log(err);
    }
      return pool;    
};
const pool =  createMysqlConn();
exports.execQuery = async(query, params) => {
    try{
        const result = await pool.query(query, params);
    } catch(err) {
        console.log(err);    
    }
    return result;
}  

  
  