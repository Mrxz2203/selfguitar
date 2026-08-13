import { songs } from "../data/songs";

export function useSong(songId){
    return songs.find((s) => s.id === songId);
}
