import React from "react";
import { useParams } from "react-router-dom";

function EventDetail() {
  const { category, id } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h2>{category.toUpperCase()} 活動介紹</h2>
      <p>這是活動 {id} 的介紹頁。</p>
    </div>
  );
}

export default EventDetail;

