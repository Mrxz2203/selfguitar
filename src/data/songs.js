import esfera from "../assets/esfera.png";
import music from "../assets/music.webp";
import srk from "../assets/Srk.png";

export const categories = [
  { id: "anime", name: "Anime", image: esfera, description: "Aqui incluire punteos, notas de canciones de japon, de animes y de su cultura en general." },
  { id: "bollywood", name: "Bollywood", image: srk, description: "Aqui incluire musicas de Sharukhan y una que otra pelicula de la india para practicar sus notas o punteos" },
  { id: "musica-variada", name: "Música Variada", image: music, description: "Incluire grupos como Enanitos verdes, Oasis, Green Day, Dunchan Dhu, entre otros" },
];

export const songs = [
  {
    id: "kesariya",
    categoryId: "bollywood",
    title: "Kesariya",
    artist: "Arijit Singh",
    youtubeUrl: "https://www.youtube.com/watch?v=BddP6PYo2gs",
    notesUrl: "https://drive.google.com/tu-link-aqui",
  },
  {
    id: "gurenge",
    categoryId: "anime",
    title: "Gurenge",
    artist: "LiSA",
    youtubeUrl: "https://www.youtube.com/watch?v=exsAKYw6ecY",
    notesUrl: "https://drive.google.com/tu-link-aqui",
  },
  {
    id: "wonderwall",
    categoryId: "musica-variada",
    title: "Wonderwall",
    artist: "Oasis",
    youtubeUrl: "https://www.youtube.com/watch?v=6hzrDeceEKc",
    notesUrl: "https://drive.google.com/tu-link-aqui",
  },
];