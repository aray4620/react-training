import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import EventDetail from "./pages/eventdetail";
import RegisterPage from "./pages/registerpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event/:category/:activity" element={<EventDetail />} />
        <Route path="/register/:category/:activity" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
