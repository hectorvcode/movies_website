export default function createSearchForm() {
  const form = `
    <form class="form-inline my-5 d-flex flex-column align-items-center mx-auto">
      <input
        class="form-control mr-sm-2 w-25"
        type="search"
        placeholder="Buscar"
        aria-label="Buscar"
      />
      <button class="btn btn-outline-success my-3" type="submit">Filtrar</button>
    </form>
  `;
  document.getElementById("search-form").innerHTML = form;
}
