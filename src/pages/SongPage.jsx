import { useParams, Link } from "react-router-dom";
import { useSong } from "../hooks/useSong";
import SongDetail from "../components/song/SongDetail";

export default function SongPage() {
  const { songId } = useParams();
  const song = useSong(songId);

  if (!song) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center text-neutral-400">
        Canción no encontrada.{" "}
        <Link to="/" className="text-emerald-400 underline">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return <SongDetail song={song} />;
}