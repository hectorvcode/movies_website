export default function createNavbar() {
  const navbar = `
      <nav class="navbar navbar-dark bg-dark data-bs-theme=dark pe-4">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="/img/video-camera_4720633.png"
              alt="Logo"
              width="auto"
              height="40"
              class="px-2"
            />
          </a>
          <h1 class="mx-auto p-2 text-light">Mis Películas Favoritas</h1>
        </div>
      </nav>
    `;
  document.getElementById("navbar").innerHTML = navbar;
}
