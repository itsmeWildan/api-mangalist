//  Membuat koneksi dari Node.js ke Express.js

const mysql = require('mysql2/promise');
const config = require('../');

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query
}