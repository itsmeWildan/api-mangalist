// digunakan sebagai tempat kita menyimpan konfigurasi untuk database dan juga untuk pagination.

const config = {
    db: {
      host: "localhost",
      user: "root",
      password: "",
      database: "mangalisting",
      connectTimeout: 60000
    }
  };
  module.exports = config;