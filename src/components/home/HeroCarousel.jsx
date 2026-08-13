import { useEffect, useState } from "react";
import oasis from "../../assets/oasis.webp";
import ddlj from "../../assets/DDLJ.webp";
import anime from "../../assets/anime.webp";

const images = [
  { src: oasis, alt: "Oasis - Wonderwall" },
  { src: ddlj, alt: "DDLJ - Bollywood" },
  { src: anime, alt: "Anime" },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-sm mx-auto md:mx-0 rounded-3xl overflow-hidden border border-neutral-800 animate-[fade-in-up_0.7s_ease-out]">
      {images.map((img, i) => (
        <img
          key={img.alt}
          src={img.src}
          alt={img.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}