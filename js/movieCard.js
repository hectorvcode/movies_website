export function createMovieCard(imageSrc, title, id) {
  return `
    <div class="col-6 col-sm-4 col-md-3 pb-4">
      <div class="card">
        <img
          src="${imageSrc}"
          class="card-img-top"
          alt="${title}"
        />
        <div
          class="card-body d-flex flex-column align-items-center mx-auto"
        >
          <h5 class="card-title py-2">${title}</h5>
          <a href="detalle.html?id=${id}" class="btn btn-primary w-auto">Ver Detalles</a>
        </div>
      </div>
    </div>
  `;
}

// Función para renderizar las tarjetas de películas, ahora recibe filtros
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
    },
    {
      img: "img/deadpool&wolverine.png",
      title: "Deadpool & Wolverine",
      id: 2,
      genre: "accion",
      year: 2024,
    },
    {
      img: "img/despicableme4.png",
      title: "Despicable Me 4",
      id: 3,
      genre: "animacion",
      year: 2024,
    },
    {
      img: "img/thewildrobot.png",
      title: "The Wild Robot",
      id: 4,
      genre: "animacion",
      year: 2024,
    },
    {
      img: "img/hellboy.png",
      title: "Hellboy The Crooked Man",
      id: 5,
      genre: "accion",
      year: 2024,
    },
    {
      img: "img/alienromulus.png",
      title: "Alien Romulus",
      id: 6,
      genre: "ciencia ficcion",
      year: 2024,
    },
    {
      img: "img/thecrow.png",
      title: "The Crow",
      id: 7,
      genre: "drama",
      year: 2024,
    },
    {
      img: "img/transformersmechbeasts.png",
      title: "Transformers Mech Beasts",
      id: 8,
      genre: "accion",
      year: 2023,
    },
  ];

  // Filtrar las películas por título, género y año
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery);
    const matchesGenre = genreFilter ? movie.genre === genreFilter : true;
    const matchesYear = yearFilter
      ? movie.year.toString() === yearFilter
      : true;

    return matchesSearch && matchesGenre && matchesYear;
  });

  const movieCardsContainer = document.getElementById("movie-cards");
  movieCardsContainer.innerHTML = filteredMovies
    .map((movie) => createMovieCard(movie.img, movie.title, movie.id))
    .join("");
}
