const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000; // 後端伺服器使用的 port

app.use(cors()); // 允許前端跨來源請求
app.use(express.json()); // 讓伺服器可以解析 JSON 請求

// 建立 /register POST API
app.post('/register', (req, res) => {
  const { name, email } = req.body;

  console.log('收到報名資料：', name, email);

  // 模擬資料處理（你未來可以接資料庫）
  if (!name || !email) {
    return res.status(400).json({ message: '缺少姓名或信箱' });
  }

  // 回傳成功訊息
  res.status(200).json({ message: '報名成功！' });
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`伺服器啟動：http://localhost:${PORT}`);
});
