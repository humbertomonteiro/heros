import { Routes, Route } from "react-router-dom";

// import Home from "../pages/Home";
import Fight from "../pages/Fight";
import Cards from "../pages/Cards";

export default function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/fight" element={<Fight />} />
    </Routes>
  );
}
