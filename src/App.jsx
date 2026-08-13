import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRouter from "./routes/AppRouter";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        requestAnimationFrame(() =>
          el.scrollIntoView({ behavior: "smooth" })
        );
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      <ScrollToHash />
      <Header />
      <main className="flex-1">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;