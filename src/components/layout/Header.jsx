import { Link } from "react-router-dom";
import Logo from "./Logo";

const navItems = [
  { label: "Inicio", to: "/#hero" },
  { label: "Secciones", to: "/#modulos" },
  { label: "Footer", to: "/#footer" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-9 w-9" />
          <span className="text-xl font-bold text-white tracking-tight">
            Self<span className="text-emerald-400">Guitar</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-sm font-medium text-neutral-400 hover:text-emerald-400 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}