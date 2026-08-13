import { useParams, Link } from "react-router-dom";
import { useSong } from "../hooks/useSong";
import SongDetail from "../components/song/SongDetail";
import BackButton from "../components/common/BackButton";

export default function SongPage() {
  const { songId } = useParams();
  const { song, group, category } = useSong(songId);

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

  const backTo =
    category && group ? `/categoria/${category.id}/${group.id}` : "/";

  return (
    <div className="max-w-2xl mx-auto px-4 pt-8">
      <BackButton to={backTo} label={group ? group.name : "Volver"} />
      <SongDetail song={song} />
    </div>
  );
}