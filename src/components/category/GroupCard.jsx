import { Link } from "react-router-dom";

export default function GroupCard({ group, categoryId }) {
  return (
    <Link
      to={`/categoria/${categoryId}/${group.id}`}
      className="group block rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden hover:border-emerald-400 hover:-translate-y-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    >
      {group.image && (
        <img
          src={group.image}
          alt={group.name}
          className="h-40 w-full object-cover"
        />
      )}
      <div className="p-5">
        <p className="font-semibold text-white group-hover:text-emerald-400">
          {group.name}
        </p>
      </div>
    </Link>
  );
}