export default function createSearchForm(renderMovieCards) {
  const form = `
    <form id="search-form" class="form-inline my-5 d-flex flex-column align-items-center mx-auto">
      <input
        id="search-input"
        class="form-control mr-sm-2 w-25"
        type="search"
        placeholder="Buscar"
        aria-label="Buscar"
      />
      <button class="btn btn-outline-success my-3" type="submit">Filtrar</button>
    </form>
  `;
  document.getElementById("search-form").innerHTML = form;

  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe

    const query = searchInput.value.toLowerCase();
    renderMovieCards(query); // Pasamos el término de búsqueda para filtrar las películas
  });
}
