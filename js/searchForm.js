export default function createSearchForm(renderMovieCards) {
  const form = `
    <form id="search-form" class="form-inline my-5 d-flex flex-column align-items-center mx-auto">
      <input
        id="search-input"
        class="form-control mr-sm-2 w-25 my-3"
        type="search"
        placeholder="Escribe el título"
        aria-label="Buscar"
      />

      <!-- Filtro por género -->
      <select id="genre-select" class="form-control my-3 w-25">
        <option value="">Seleccione el género</option>
        <option value="accion">Acción</option>
        <option value="comedia">Comedia</option>
        <option value="drama">Drama</option>
        <option value="ciencia ficcion">Ciencia Ficción</option>
        <option value="animacion">Animación</option>
      </select>

      <!-- Filtro por año -->
      <select id="year-select" class="form-control my-3 w-25">
        <option value="">Seleccione el año</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </form>
  `;

  document.getElementById("search-form").innerHTML = form;

  const searchInput = document.getElementById("search-input");
  const genreSelect = document.getElementById("genre-select");
  const yearSelect = document.getElementById("year-select");

  // Escuchar los cambios en los filtros de búsqueda
  searchInput.addEventListener("input", () => applyFilters(renderMovieCards));
  genreSelect.addEventListener("change", () => applyFilters(renderMovieCards));
  yearSelect.addEventListener("change", () => applyFilters(renderMovieCards));
}

// Función para aplicar los filtros
function applyFilters(renderMovieCards) {
  const query = document.getElementById("search-input").value.toLowerCase();
  const genre = document.getElementById("genre-select").value;
  const year = document.getElementById("year-select").value;

  renderMovieCards(query, genre, year);
}
