const mysql2= require('mysql2');
const db = mysql2.createConnection({
  host: 'localhost',
  user:'root',
  password:'kent4620',
  database:'event_register',
  port: 3306 // MySQL 預設端口是 3306
});
  db.connect((err) => {
  if (err) {
    console.error('無法連接到資料庫:', err);
  } else {
    console.log('成功連接到資料庫');
  }
});
db.query('SELECT NOW() AS currentTime', (err, results) => {
  if (err) {
    return console.error('查詢錯誤:', err);
  }
  console.log('目前時間:', results[0].currentTime);
});

const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 5050; // 換成 5050

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
  const { name, email, number, paycode } = req.body;
  if (!name || !email || !number || !paycode) {
    return res.status(400).json({ message: '缺少詳細資料' });
  }

  const sql = 'INSERT INTO Users (name, email, number, paycode) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email,number,paycode], (err, results) => {
    if (err) {
      console.error('資料庫錯誤:', err);
      return res.status(500).json({ message: '伺服器錯誤' });
    }
    console.log('新增資料成功:', results);
    res.status(201).json({ message: '報名成功！' });
  });
});

app.listen(PORT, () => {
  console.log(`伺服器啟動：http://localhost:${PORT}`);
});

