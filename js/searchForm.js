export default function createSearchForm(renderMovieCards) {
  const form = `
    <form id="search-form" class="form-inline my-5 d-flex flex-column align-items-center mx-auto">
      <input
        id="search-input"
        class="form-control mr-sm-2 w-25"
        type="search"
        placeholder="Búsqueda por título"
        aria-label="Buscar"
      />
    </form>
  `;
  document.getElementById("search-form").innerHTML = form;

  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    renderMovieCards(query); //llamamos la función de renderizado con el término de búsqueda
  });
}
