import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const navItems = [
  { label: "Inicio", to: "/#hero" },
  { label: "Secciones", to: "/#modulos" },
  { label: "Footer", to: "/#footer" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/90 backdrop-blur border-b border-neutral-800 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
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
              className="text-sm font-medium text-neutral-400 hover:text-emerald-400 transition rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}