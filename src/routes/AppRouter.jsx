import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import SongPage from "../pages/SongPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categoria/:categoryId" element={<CategoryPage />} />
      <Route path="/cancion/:songId" element={<SongPage />} />
    </Routes>
  );
}