// digunakan sebagai tempat kita menyimpan konfigurasi untuk database dan juga untuk pagination.
const dotenv = require('dotenv');
dotenv.config();

const config = {
  db: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
  }
};
module.exports = config;