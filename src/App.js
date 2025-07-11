import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
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
    if (!/^0\d{9}/.test(number.trim())) {
      setError("請輸入完整號碼!");
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
        body: JSON.stringify({ name, email, number, paycode }),
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
    <div
      className="App"
      style={{
        maxWidth: "500px",
        margin: "30px auto",
        fontFamily: "arial, sans-serif",
      }}
    >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <h2 style={{ textAlign: "center" }}>活動報名系統 </h2>
          {error && <p style={{ color: "red" }}>{error}</p>}

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
                  type="text"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  maxLength={10}
                  pattern="0\d{9}"
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

            <button>送出報名</button>
          </form>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
