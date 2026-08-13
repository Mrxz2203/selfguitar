import { songs, categories } from "../data/songs";

export function useCategory(categoryId) {
  const category = categories.find((c) => c.id === categoryId);
  const songsInCategory = songs.filter((s) => s.categoryId === categoryId);
  return { category, songs: songsInCategory };
}