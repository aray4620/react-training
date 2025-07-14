import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function RegisterPage() {
  const { category, activity } = useParams(); // 取得URL參數
  const navigate = useNavigate(); // 導航用
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [paycode, setPaycode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (name.trim() === "") {
      setError("請輸入姓名!");
      return;
    }
    if (email.trim() === "") {
      setError("請輸入信箱!");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Email格式不正確!");
      return;
    }

    const trimmedNumber = number.trim();
    if (trimmedNumber.length !== 10 || !/^0\d{9}$/.test(trimmedNumber)) {
      setError("請輸入完整的10位手機號碼，且以0開頭");
      return;
    }

    if (paycode.trim().length !== 5) {
      setError("請填寫匯款後五碼!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5050/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, number: trimmedNumber, paycode }),
      });

      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        data = {};
      }

      if (response.ok) {
        setSuccess(data.message || "報名成功！");
        setName("");
        setEmail("");
        setNumber("");
        setPaycode("");
        setError("");
      } else {
        setError(data.message || "伺服器回應錯誤");
      }
    } catch (error) {
      setError("無法連接伺服器");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>活動報名：{activity}（{category}組）</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {success ? (
        <>
          <p style={{ color: "green" }}>{success}</p>
          <button onClick={() => navigate("/")} style={{ marginTop: 20 }}>
            回首頁
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="column">
              <label>姓名：</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="column">
              <label>手機號碼：</label>
              <input
                type="tel"
                value={number}
                onChange={(e) => {
                  // 只允許輸入數字
                  const val = e.target.value;
                  if (/^\d*$/.test(val)) {
                    setNumber(val);
                  }
                }}
                maxLength={10}
                pattern="0\d{9}"
                placeholder="0開頭，共10碼"
              />
            </div>
          </div>

          <div className="row">
            <div className="column">
              <label>Email：</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="column">
              <label>匯款後五碼：</label>
              <input
                type="text"
                value={paycode}
                onChange={(e) => setPaycode(e.target.value)}
                maxLength={5}
              />
            </div>
          </div>

          <button type="submit">送出報名</button>
          <button
        onClick={() => navigate(-1)}
        style={{marginTop: 20 }}>
        返回
      </button>
        </form>
      )}
    </div>
  );
}

export default RegisterPage;
