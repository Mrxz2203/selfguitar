import { Link } from "react-router-dom";
import { categories } from "../../data/songs";

export default function ModulesGrid() {
  return (
    <section id="modulos" className="max-w-5xl mx-auto px-4 pb-24">
      <h2 className="text-2xl font-bold text-white mb-6">Categorías</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/categoria/${cat.id}`}
            className="group rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-center hover:border-emerald-400 hover:-translate-y-1 transition"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="h-16 w-16 mx-auto rounded-full object-cover"
            />
            <p className="mt-3 font-semibold text-white group-hover:text-emerald-400">
              {cat.name}
              </p>
            <p className="mt-1 text-xs text-neutral-500 leading-snug">
              {cat.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}