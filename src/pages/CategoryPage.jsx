import { useParams, Link } from "react-router-dom";
import { useCategory } from "../hooks/useCategory";
import SongCard from "../components/category/SongCard";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const { category, songs } = useCategory(categoryId);

  if (!category) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center text-neutral-400">
        Categoría no encontrada.{" "}
        <Link to="/" className="text-emerald-400 underline">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <Link to="/" className="text-sm text-neutral-400 hover:text-emerald-400">
        ← Volver
      </Link>
      <h1 className="text-3xl font-bold text-white mt-4 mb-8">
       {category.name}
      </h1>
<p className="text-neutral-400 mt-2 mb-8">{category.description}</p>

      {songs.length === 0 ? (
        <p className="text-neutral-400">Aún no hay canciones en esta categoría.</p>
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