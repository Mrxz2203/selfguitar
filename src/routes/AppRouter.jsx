import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import GroupPage from "../pages/GroupPage";
import SongPage from "../pages/SongPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categoria/:categoryId" element={<CategoryPage />} />
      <Route path="/categoria/:categoryId/:groupId" element={<GroupPage />} />
      <Route path="/cancion/:songId" element={<SongPage />} />
    </Routes>
  );
}