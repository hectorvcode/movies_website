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

// Función para renderizar las tarjetas de películas
export default function renderMovieCards() {
  const movies = [
    { img: 'img/intensamente2.png', title: 'Intensamente 2', id: 1 },
    { img: 'img/deadpool&wolverine.png', title: 'Deadpool & Wolverine', id: 2 },
    { img: 'img/despicableme4.png', title: 'Despicable Me 4', id: 3 },
    { img: 'img/thewildrobot.png', title: 'The Wild Robot', id: 4 },
    { img: 'img/hellboy.png', title: 'Hellboy The Crooked Man', id: 5 },
    { img: 'img/alienromulus.png', title: 'Alien Romulus', id: 6 },
    { img: 'img/thecrow.png', title: 'The Crow', id: 7 },
    { img: 'img/transformersmechbeasts.png', title: 'Transformers Mech Beasts', id: 8 },
  ];

  const movieCardsContainer = document.getElementById('movie-cards');
  movieCardsContainer.innerHTML = movies.map(movie => createMovieCard(movie.img, movie.title, movie.id)).join('');
}