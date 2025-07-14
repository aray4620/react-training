import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function EventDetail() {
  const { category, activity } = useParams();  // 從網址中抓組別與活動名稱
  const navigate = useNavigate();              // 用來跳轉頁面

  return (
    <div style={{ padding: 20 }}>
      <h2>{decodeURIComponent(activity)} 活動介紹頁面</h2>
      <p>組別：{category}</p>
      <p>這裡可以顯示活動的詳細資訊，例如比賽地點、時間、評審等等（之後再補）。</p>

      <button
        onClick={() => navigate(`/register/${category}/${encodeURIComponent(activity)}`)}
        style={{ marginTop: 20 }}
      >
        我要報名
      </button>
      <button
        onClick={() => navigate("/")}
        style={{marginTop: 20 }}>
        返回首頁
      </button>
    </div>
  );
}

export default EventDetail;
