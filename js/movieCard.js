import { showMovieDetails } from "./movieDetails.js";

// Función para crear una tarjeta de película
export function createMovieCard(imageSrc, title, id) {
  return `
    <div class="col-6 col-sm-4 col-md-3 pb-4">
      <div class="card" data-id="${id}" onclick="showMovieDetails(${id})">
        <img src="${imageSrc}" class="card-img-top" alt="${title}" />
        <div class="card-body d-flex flex-column align-items-center mx-auto">
          <h5 class="card-title py-2">${title}</h5>
        </div>
      </div>
    </div>
  `;
}

// Función para renderizar las tarjetas de películas
export default function renderMovieCards(
  searchQuery = "",
  genreFilter = "",
  yearFilter = ""
) {
  const movies = [
    {
      img: "img/intensamente2.png",
      title: "Intensamente 2",
      id: 1,
      genre: "animacion",
      year: 2024,
      description:
        "Secuela de la película Del revés (Inside Out), ganadora del Óscar en 2016 a Mejor filme de animación. Alegría, Tristeza, Ira, Asco y Miedo están de vuelta. Pero ahora, en plena adolescencia, están pasando muchas cosas dentro del cuerpo de Riley. La niña que conocimos ahora es una chica que se está haciendo mayor y sus emociones serán un cóctel explosivo. En esta nueva aventura que tiene lugar dentro de la mente de Riley aparecerán nuevas emociones que lo cambiarán todo, como Ansiedad, Envidia, Hastío o Vergüenza. Estas nuevas emociones llegarán al centro de control y lo pondrán todo patas arriba, así que Alegría y su equipo van a tener mucho trabajo.",
    },
    {
      img: "img/deadpool&wolverine.png",
      title: "Deadpool & Wolverine",
      id: 2,
      genre: "accion",
      year: 2024,
      description:
        "Tras pasearse por el tiempo para arreglar los pequeños y grandes errores del pasado, Wade Wilson continúa enfundándose el traje de Deadpool una secuela más y ahora tendrá que enfrentarse a nuevos y muy diferentes escenarios de los que habíamos visto hasta ahora. Indudablemente Ryan Reynolds (Pokémon: Detective Pikachu) se niega separarse del traje de Deadpool, sin más confirmaciones definitivas de reparto. Rheet Reese y Paul Wernick, guionistas de las dos anteriores películas de Deadpool, confirman su vuelta para la tercera entrega.",
    },
    {
      img: "img/despicableme4.png",
      title: "Despicable Me 4",
      id: 3,
      genre: "animacion",
      year: 2024,
      description:
        "Gru (voz de Florentino Fernández) y Lucy (voz de Patricia Conde) están casados y luchan junto a su familia en la llamada Liga Antivillanos. Sus hijas adoptivas también se implican mucho más en esta importante tarea. Pero además hay un nuevo miembro de la familia: el pequeño bebé del matrimonio. Un villano que se escapa de la cárcel: Maxime Le Mal, obligará a todos a tomar decisiones que les pondrán en jaque. Cuarta entrega de la popular saga de animación familiar en en la que Chris Renaud, que dirigió las dos primeras partes, también regresa para la cuarta tras las cámaras. Patrick Delage ejerce de codirector y Mike White escribe el guión.",
    },
    {
      img: "img/thewildrobot.png",
      title: "The Wild Robot",
      id: 4,
      genre: "animacion",
      year: 2024,
      description:
        "Película de animación que adapta la novela gráfica The Wild Robot, el premiado bestseller de ciencia ficción escrito e ilustrado por Peter Brown. Un robot llamado ROZZUM unidad 7134, Roz para abreviar, naufraga en una isla deshabitada. Durante una aventura épica, este robot deberá aprender a adaptarse al duro entorno, descubriéndose también a sí mismo, y estableciendo gradualmente relaciones con otros animales de la isla, convirtiéndose poco a poco en uno más de los seres que habitan ese entorno que conectará la tecnología y la naturaleza.",
    },
    {
      img: "img/hellboy.png",
      title: "Hellboy The Crooked Man",
      id: 5,
      genre: "accion",
      year: 2024,
      description:
        "La película sigue a Hellboy con una misión en los Apalaches rurales de los años 50, al lado de un agente novato de la Oficina de Investigación y Defensa Paranormal. Allí descubren una pequeña comunidad embrujada, liderada por un demonio local con una inquietante conexión con el pasado del protagonista: the Crooked Man.",
    },
    {
      img: "img/alienromulus.png",
      title: "Alien Romulus",
      id: 6,
      genre: "ciencia ficcion",
      year: 2024,
      description:
        "Ambientada en un futuro lejano, la historia sigue a un grupo de colonos que llegan a un remoto planeta con la esperanza de establecer una nueva vida. Sin embargo, pronto descubren que no están solos, ya que la colonia se convierte en el terreno de caza de una terrorífica especie extraterrestre conocida como los Xenomorfos. A medida que los colonos luchan por su supervivencia, deben descubrir los oscuros secretos del planeta y enfrentarse a sus propios miedos y a los Xenomorfos para intentar escapar con vida.",
    },
    {
      img: "img/thecrow.png",
      title: "The Crow",
      id: 7,
      genre: "drama",
      year: 2024,
      description:
        "Thriller sobrenatural de superhéroes y nueva versión de la película de 1994 The Crow que protagonizó el malogrado Brandon Lee, basada en la novela gráfica homónima de James O'Barr. La vida de Eric Draven (Bill Skarsgård) transcurre al lado de Shelly Webster (FKA Twigs), su pareja y su alma gemela de la que está perdidamente enamorado. Pero cuando Eric es testigo de su brutal asesinato, presenciando cómo unos desconocidos la asesinan a ella y también a él, todo dará un vuelco dramático e inesperado. En un limbo entre la vida y la muerte, Eric regresa de entre los muertos. Ahora tiene un objetivo: cobrarse su sangrienta venganza, porque no va a descansar hasta vengar el asesinato de Shelly. Imbuido de poderes sobrenaturales, Eric puede resistir disparos, ráfagas de escopeta y puñaladas. El antihéroe emprende así un oscuro camino de violencia brutal para vengar la muerte de Shelly a manos de sus misteriosos asesinos. Y cuando los encuentre, va a matar a todos y cada uno de ellos. No es ira lo que siente, es amor, un amor inmortal.",
    },
    {
      img: "img/transformersmechbeasts.png",
      title: "Transformers Mech Beasts",
      id: 8,
      genre: "accion",
      year: 2023,
      description:
        "Veinte años después de los eventos de que los humanos se rebelaran contra los robots alienígenas, una nueva especie de robot alienígena más nueva y avanzada desciende sobre una Tierra reconstruida, amenazando una vez más con destruir el planeta.",
    },
    {
      img: "img/fastx.png",
      title: "Fast X",
      id: 9,
      genre: "accion",
      year: 2023,
      description:
        "Décima entrega de la saga Fast & furious, e inicio de los capítulos finales de la franquicia. Para su desenlace, Dom Toretto (Vin Diesel) vuelve a la carga con más carreras, velocidad y acción desenfrenada. El final del camino comienza. Durante numerosas misiones más que imposibles, Dom Toretto ha sido más rápido que cualquiera de los enemigos que se cruzaron en su camino. Esta vez, él y su familia tendrán que enfrentarse al oponente más letal que jamás hayan conocido.",
    },
    {
      img: "img/venomcarnage.png",
      title: "Venom: Let There Be Carnage",
      id: 10,
      genre: "ciencia ficcion",
      year: 2021,
      description:
        "Regreso de Eddie Brock (Tom Hardy), el astuto periodista y reportero que, después de quedar infectado, experimentará radicales cambios en su cuerpo y adquirirá los poderes del simbionte Venom, que usa a Brock como huésped y le convertirá en un despiadado y peligroso súpervillano. En esta ocasión, Venom se reencontrará con Cletus Cassady, más conocido como Carnage, el enemigo más sangriento de la historia de Spider-Man. ",
    },
    {
      img: "img/encanto.png",
      title: "Encanto",
      id: 11,
      genre: "animacion",
      year: 2021,
      description:
        "Encanto nos sitúa en el corazón de Colombia, narrando la increíble aventura de una joven y su familia. Pero, sorprendentemente, todos los miembros del clan tienen poderes mágicos excepto la protagonista. La película de animación de Disney estará dirigida por Byron Howard y Jared Bush. Además, Bush también escribirá el guion junto a Charise Castro Smith.",
    },
    {
      img: "img/forgottenbattle.png",
      title: "Forgotten Battle",
      id: 12,
      genre: "accion",
      year: 2020,
      description:
        "Las vidas de un piloto de planeador, un soldado nazi y una recluta de la resistencia se cruzan en la batalla del estuario del Escalda durante la Segunda Guerra Mundial.",
    },
    {
      img: "img/adamproject.png",
      title: "The Adam Project",
      id: 13,
      genre: "accion",
      year: 2022,
      description:
        "Película de ciencia ficción ambientada en un 2050 distópico. Tras un viaje interestelar, el piloto Adam Reed viaja en el tiempo y termina, de manera accidental, en 2022. Ahí se encuentra con su yo de 12 años, que aún está pasando por el duelo de la muerte de su padre. Juntos reparan la nave en la que Adam ha viajado y revela que, en realidad, está buscando a Laura, su esposa, que falleció en un accidente durante una misión en 2018.",
    },
  ];

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery);
    const matchesGenre = genreFilter ? movie.genre === genreFilter : true;
    const matchesYear = yearFilter
      ? movie.year.toString() === yearFilter
      : true;

    return matchesSearch && matchesGenre && matchesYear;
  });

  const sortedMovies = filteredMovies.sort((a, b) => b.year - a.year);
  const movieCardsContainer = document.getElementById("movie-cards");
  movieCardsContainer.innerHTML = sortedMovies
    .map((movie) => createMovieCard(movie.img, movie.title, movie.id))
    .join("");

  window.movies = movies; // Hacer accesible el array globalmente
}
