export default function SongDetail({ song }) {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white">{song.title}</h1>
      {song.artist && <p className="text-neutral-400 mt-1">{song.artist}</p>}

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href={song.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-neutral-950 hover:bg-emerald-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
        {song.youtubeLabel || "Ver video en YouTube →"}
        </a>
        <a
          href={song.notesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-400 px-6 py-3 font-semibold text-emerald-400 hover:bg-emerald-400 hover:text-neutral-950 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          Ver punteos de guitarra →
        </a>
        <a
href={song.chordsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-indigo-400 px-6 py-3 font-semibold text-indigo-400 hover:bg-indigo-400 hover:text-neutral-950 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            Ver acordes →
          </a>
      </div>
    </article>
  );
}