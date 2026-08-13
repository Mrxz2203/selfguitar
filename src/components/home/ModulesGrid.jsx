import { Link } from "react-router-dom";
import { categories } from "../../data/songs";
import { useInView } from "../../hooks/useInView";

export default function ModulesGrid() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="modulos" ref={ref} className="scroll-mt-24 max-w-5xl mx-auto px-4 pb-24">
      <h2 className="text-2xl font-bold text-white mb-6">Categorías</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <div
            key={cat.id}
            style={{ transitionDelay: isInView ? `${i * 100}ms` : "0ms" }}
            className={`transition-all duration-700 ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
  to={`/categoria/${cat.id}`}
  className="group block rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-center hover:border-emerald-400 hover:-translate-y-1 transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
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
          </div>
        ))}
      </div>
    </section>
  );
}