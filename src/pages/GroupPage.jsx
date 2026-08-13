import { useParams, Link } from "react-router-dom";
import { useGroup } from "../hooks/useGroup";
import SongCard from "../components/category/SongCard";
import BackButton from "../components/common/BackButton";

export default function GroupPage() {
  const { categoryId, groupId } = useParams();
  const { group, songs } = useGroup(groupId);

  if (!group) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center text-neutral-400">
        Módulo no encontrado.{" "}
        <Link to={`/categoria/${categoryId}`} className="text-emerald-400 underline">
          Volver a la categoría
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <BackButton to={`/categoria/${categoryId}`} label="Categoría" />

      <div className="mt-6 mb-8">
        {group.image && (
          <img
            src={group.image}
            alt={group.name}
            className="w-full max-h-64 object-cover rounded-2xl mb-4"
          />
        )}
        <h1 className="text-3xl font-bold text-white">{group.name}</h1>
      </div>

      {songs.length === 0 ? (
        <p className="text-neutral-400">Aún no hay canciones en este módulo.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      )}
    </section>
  );
}