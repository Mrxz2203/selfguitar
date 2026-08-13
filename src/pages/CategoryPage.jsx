import { useParams, Link } from "react-router-dom";
import { useCategory } from "../hooks/useCategory";
import GroupCard from "../components/category/GroupCard";
import BackButton from "../components/common/BackButton";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const { category, groups } = useCategory(categoryId);

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
      <BackButton to="/" label="Inicio" />

      <h1 className="text-3xl font-bold text-white mt-6">{category.name}</h1>
      <p className="text-neutral-400 mt-2 mb-8">{category.description}</p>

      {groups.length === 0 ? (
        <p className="text-neutral-400">Aún no hay contenido en esta categoría.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {groups.map((group) => (
            <GroupCard key={group.id} group={group} categoryId={categoryId} />
          ))}
        </div>
      )}
    </section>
  );
}