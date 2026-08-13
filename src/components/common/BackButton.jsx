import { Link } from "react-router-dom";

export default function BackButton({ to, label = "Volver" }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-xl border-2 border-sky-400 px-4 py-2 text-sm font-semibold text-sky-400 hover:bg-sky-400 hover:text-neutral-950 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
    >
      ← {label}
    </Link>
  );
}