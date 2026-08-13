import { Link } from "react-router-dom";

export default function SongCard({ song }) {
  return (
    <Link
      to={`/cancion/${song.id}`}
      className="block rounded-2xl border border-neutral-800 bg-neutral-900 p-5 hover:border-emerald-400 hover:-translate-y-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    >
      <p className="font-semibold text-white">{song.title}</p>
      {song.artist && (
        <p className="text-sm text-neutral-400 mt-1">{song.artist}</p>
      )}
    </Link>
  );
}