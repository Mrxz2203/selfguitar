import { songs, groups, categories } from "../data/songs";

export function useSong(songId) {
  const song = songs.find((s) => s.id === songId);
  const group = song ? groups.find((g) => g.id === song.groupId) : undefined;
  const category = group
    ? categories.find((c) => c.id === group.categoryId)
    : undefined;

  return { song, group, category };
}