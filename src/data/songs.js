import esfera from "../assets/esfera.png";
import music from "../assets/music.webp";
import srk from "../assets/Srk.png";
import chalte from "../assets/Chalte.png";

export const categories = [
  { id: "anime", name: "Anime", image: esfera, description: "Aqui incluire punteos, notas de canciones de japon, de animes y de su cultura en general." },
  { id: "bollywood", name: "Bollywood", image: srk, description: "Aqui incluire musicas de Sharukhan y una que otra pelicula de la india para practicar sus notas o punteos" },
  { id: "musica-variada", name: "Música Variada", image: music, description: "Incluire grupos como Enanitos verdes, Oasis, Green Day, Dunchan Dhu, entre otros" },
];

export const groups = [
  {
    id: "chalte-chalte",
    categoryId: "bollywood",
    name: "Chalte Chalte",
    image: chalte,
  },
];

export const songs = [
  {
    id: "suno-na-suno-na",
    groupId: "chalte-chalte",
    title: "Suno Na Suno Na",
    youtubeUrl:
      "https://www.youtube.com/watch?v=ZIScFx6UxAg&list=RDZIScFx6UxAg&start_radio=1",
    notesUrl: "https://guitartab.in/suno-na-suno-na-guitar-tabs/",
  },
];