import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-24 max-w-6xl mx-auto px-4 pt-16 pb-24 grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
      {/* Carrusel / Imagen */}
      <div className="flex justify-center items-center w-full">
        <HeroCarousel />
      </div>

      {/* Texto descriptivo */}
      <div className="flex flex-col justify-center text-center md:text-left animate-[fade-in-up_0.7s_ease-out_0.15s_both]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15]">
          Tus punteos y notas,{" "}
          <span className="text-emerald-400 block sm:inline">
            todos en un solo lugar
          </span>
        </h1>
        <p className="mt-5 text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          Programa personal para la búsqueda de canciones: notas y punteos de
          guitarra de todo tipo — rock, anime, cumbia, hindi, japonés, y todo
          lo que recuerde y quiera tocar.
        </p>
      </div>
    </section>
  );
}