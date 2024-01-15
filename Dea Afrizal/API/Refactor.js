const searchBotton = document.querySelector(".search-button");
searchBotton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
  } catch (err) {
    alert(err);
  }
});

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=55baf41e&s=" + keyword)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      if (response.Response === "False") {
        throw new Error(response.Error);
      }
      console.log(response);
      return response.Search;
    });
}

function updateUI(movies) {
  let cards = "";
  movies.forEach((e) => {
    cards += ShowCards(e);
  });
  const moviesContainer = document.querySelector(".movies-container");
  moviesContainer.innerHTML = cards;
}

// event binding

document.addEventListener("click", async function (events) {
  if (events.target.classList.contains("modal-detail-button")) {
    const imdbid = events.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=55baf41e&i=" + imdbid)
    .then((response) => response.json())
    .then((m) => m);
}

function updateUIDetail(m) {
  const movieDetail = ShowDetail(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}
// ==========================================

function ShowCards(e) {
  return `
              <div class="col-md-4 my-3">
                <div class="card">
                  <img src="${e.Poster}" class="card-img-top" alt="" />
                  <div class="card-body">
                    <h5 class="card-title">${e.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${e.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#MovieDetailModal" data-imdbid="${e.imdbID}">Show Details</a>
                  </div>
                </div>
              </div>`;
}

function ShowDetail(e) {
  return `<div class="container-fluid">
                <div class="row">
                  <div class="col-md-3">
                    <img src="${e.Poster}" class="img-fluid" />
                  </div>
                  <div class="col-md">
                    <ul class="list-group">
                      <li class="list-group-item"><h4>${e.Title} (${e.Year})</h4></li>
                      <li class="list-group-item"><strong>Director : </strong> ${e.Director}</li>
                      <li class="list-group-item"><strong>Actors : </strong> ${e.Actors}</li>
                      <li class="list-group-item"><strong>Writer : </strong> ${e.Writer}</li>
                      <li class="list-group-item"><strong>Genre : </strong> ${e.Genre}</li>
                    </ul>
                  </div>
                </div>
              </div>`;
}
