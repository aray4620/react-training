import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function EventDetail() {
  const { category, id } = useParams();
  // id 就是活動名稱

  const activityDescriptions = {
    "頂上對決": "這是一場最強Locking高手之戰，舞技與節奏的巔峰對決。",
    "FunkSession": "Funk音樂環繞全場，邀你一起盡情Popping！",
    "P組測試1": "這是Popping組的第一場測試賽。",
    "P組測試2": "這是Popping組的第二場測試賽。",
    "H組測試1": "這是Hiphop組的第一場測試賽。",
    "H組測試2": "這是Hiphop組的第二場測試賽。",
  };

  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>{id} 活動介紹</h2>
      <p>{activityDescriptions[id] || "沒有找到這場活動的介紹。"}</p>
      <button
        style={{
          marginTop: 20,
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        返回首頁
      </button>
    </div>
  );
}

export default EventDetail;
