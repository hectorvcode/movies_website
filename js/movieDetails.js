// Función para mostrar los detalles de la película en el modal
export function showMovieDetails(movieId) {
  const movie = window.movies.find((m) => m.id === movieId);

  if (movie) {
    document.getElementById("movieModalImg").src = movie.img;
    document.getElementById("movieModalTitle").textContent = movie.title;
    document.getElementById(
      "movieModalGenre"
    ).textContent = `Género: ${movie.genre}`;
    document.getElementById(
      "movieModalYear"
    ).textContent = `Año: ${movie.year}`;
    document.getElementById("movieModalDescription").textContent =
      movie.description;

    loadComments(movieId); // Cargar comentarios al mostrar los detalles

    const movieDetailModal = new bootstrap.Modal(
      document.getElementById("movieDetailModal")
    );
    movieDetailModal.show();

    document.getElementById("commentForm").dataset.movieId = movieId; // Asociar el formulario de comentarios con la película
  }
}

// Función para cargar comentarios desde localStorage
export function loadComments(movieId) {
  const commentList = document.getElementById("commentList");
  commentList.innerHTML = ""; // Limpiar la lista de comentarios

  // Obtener comentarios de localStorage
  const comments =
    JSON.parse(localStorage.getItem(`comments_${movieId}`)) || [];

  comments.forEach((comment) => {
    const commentItem = document.createElement("li");
    commentItem.classList.add("list-group-item");
    commentItem.textContent = comment;
    commentList.appendChild(commentItem);
  });
}

// Función para guardar comentarios en localStorage
export function saveComment(movieId, comment) {
  const comments =
    JSON.parse(localStorage.getItem(`comments_${movieId}`)) || [];
  comments.push(comment);

  // Guardar los comentarios en localStorage
  localStorage.setItem(`comments_${movieId}`, JSON.stringify(comments));
}
