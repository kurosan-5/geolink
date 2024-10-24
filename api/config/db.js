const { Client } = require('pg');
require('dotenv').config(); // 環境変数を読み込む

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 5432, // デフォルトのPostgreSQLポート
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = client; // 他のモジュールで使用するためにエクスポート
