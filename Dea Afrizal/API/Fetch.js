//  Fetch

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch("http://www.omdbapi.com/?apikey=55baf41e&i=tt0848228&s=" + inputKeyword.value)
    .then((response) => response.json())
    .then((response) => {
      const movies = response.Search;
      let cards = "";
      movies.forEach((e) => (cards += ShowCards(e)));
      const moviesContainer = document.querySelector(".movies-container");
      moviesContainer.innerHTML = cards;

      // if click

      const modalDetailButton = document.querySelectorAll(".modal-detail-button");
      modalDetailButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          const imdbid = this.dataset.imdbid;
          fetch("http://www.omdbapi.com/?apikey=55baf41e&i=" + imdbid)
            .then((response) => response.json())
            .then((response) => {
              const moviesDetail = ShowDetail(response);
              const modalBody = document.querySelector(".modal-body");
              modalBody.innerHTML = moviesDetail;
            });
        });
      });
    });
});

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
