var express = require('express');
var router = express.Router();
const db = require('../config/db'); // DB接続設定をインポート

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// 例: データを取得するルート
router.get('/data', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM your_table'); // DBクエリ
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;

module.exports = router;
