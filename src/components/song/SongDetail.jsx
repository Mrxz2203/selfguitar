function getYoutubeEmbedUrl(url) {
  const match = url.match(/(?:v=|youtu\.be\/)([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

export default function SongDetail({ song }) {
  const embedUrl = getYoutubeEmbedUrl(song.youtubeUrl);

  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white">
        {song.title}
      </h1>

      <p className="text-neutral-400 mt-1">
        {song.artist}
      </p>

      {embedUrl && (
        <div className="mt-8 aspect-video rounded-xl overflow-hidden border border-neutral-800">
          <iframe
            className="w-full h-full"
            src={embedUrl}
            title={song.title}
            allowFullScreen
          />
        </div>
      )}

      <a
        href={song.notesUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-neutral-950 hover:bg-emerald-400 transition"
      >
        Ver notas de guitarra →
      </a>
    </article>
  );
}