import { groups, songs } from "../data/songs";

export function useGroup(groupId) {
  const group = groups.find((g) => g.id === groupId);
  const songsInGroup = songs.filter((s) => s.groupId === groupId);
  return { group, songs: songsInGroup };
}