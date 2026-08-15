import esfera from "../assets/esfera.png";
import music from "../assets/music.webp";
import srk from "../assets/Srk.png";
import chalte from "../assets/Chalte.png";
import tuhje from "../assets/tuhje.jpg";
import tucarcel from "../assets/Tucarcel.png"
import Boyz from "../assets/boyz.png"
export const categories = [
  { id: "anime", name: "Musica de Japon", image: esfera, description: "Aqui incluire punteos, notas de canciones de japon, de animes y de su cultura en general." },
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
   {
    id: "dilwale-dulhania-le-jayenge",
    categoryId: "bollywood",
    name: "Dilwale Dulhania Le Jayenge",
    image: tuhje,
  },
  {
    id: "enanitos-verdes",
    categoryId: "musica-variada",
    name: "Enanitos Verdes",
    image: tucarcel,
  },
  {
    id: "GRe4N-BOYZ",
    categoryId: "anime",
    name: "GRe4N BOYZ",
    image: Boyz,
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
    chordsUrl: "https://tabs.ultimate-guitar.com/tab/misc-soundtrack/chalte-chalte-suno-na-suno-na-chords-2414823",
  },
  {
    id: "tujhe-dekha-toh-yeh-jaana-sanam",
    groupId: "dilwale-dulhania-le-jayenge",
    title: "Tujhe Dekha Toh Yeh Jaana Sanam",
    youtubeUrl:
      "https://www.youtube.com/watch?v=cNV5hLSa9H8&list=RDcNV5hLSa9H8&start_radio=1",
    notesUrl:
      "https://es.scribd.com/document/430631406/Beginner-Song-Tujhe-Dekha-to-Yeh-Lead-Tune-Guitar-Notes",
    chordsUrl:
      "https://es.ultimate-guitar.com/tab/misc-soundtrack/dilwale-dulhania-le-jayenge-tujhe-dekha-to-chords-1761484",
  },
  {
    id: "tu-carcel",
    groupId: "enanitos-verdes",
    title: "Tu Cárcel",
      youtubeUrl:
      "https://www.youtube.com/watch?v=aSQBo2nkmxE&list=RDaSQBo2nkmxE&start_radio=1",
    notesUrl: "https://acordes.lacuerda.net/enanitos/tu_carcel",
    chordsUrl:
      "https://es.ultimate-guitar.com/tab/los-enanitos-verdes/tu-carcel-chords-1717015",
  },
  {
    id: "Kiseki",
    groupId: "GRe4N-BOYZ",
    title: "Kiseki",
    artist: "GRe4N BOYZ",
    youtubeUrl:"https://kiseki-green-gab.vercel.app/",
    youtubeLabel: "Ver traducción →",
    notesUrl: "https://www.songsterr.com/a/wsa/greeeen-kiseki-tab-s194286",
chordsUrl: "https://es.ultimate-guitar.com/tab/greeeen/kiseki-chords-978245",
  },
  {
  id:"Igual-que-ayer",
    groupId: "enanitos-verdes",
    title: "Igual que ayer",
    youtubeUrl:"https://www.youtube.com/watch?v=fmZ54ziDlf0&list=RDfmZ54ziDlf0&start_radio=1",
    notesUrl: "https://acordes.lacuerda.net/enanitos/igual_que_ayer",
chordsUrl: "https://www.cifraclub.com/enanitos-verdes/igual-que-ayer/",
  },
];