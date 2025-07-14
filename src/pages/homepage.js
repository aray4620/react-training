import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const activityData = {
    Locking: ["頂上對決", "FunkSession"],
    Popping: ["P組測試1", "P組測試2"],
    Hiphop: ["H組測試1", "H組測試2"],
  };

  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>選擇舞風與活動</h2>

      <label>請選擇舞風：</label><br/>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">請選擇組別</option>
        {Object.keys(activityData).map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      {selectedCategory && (
        <>
          <br /><label>請選擇活動：</label><br/>
          <select
            defaultValue=""
            onChange={(e) => {
              if (e.target.value !== "") {
                navigate(`/event/${selectedCategory}/${encodeURIComponent(e.target.value)}`);
              }
            }}
          >
            <option value="">請選擇活動</option>
            {activityData[selectedCategory].map((activity) => (
              <option key={activity} value={activity}>{activity}</option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}

export default HomePage;
