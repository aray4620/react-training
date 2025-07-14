import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import EventDetail from "./pages/EventDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event/:category/:id" element={<EventDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
