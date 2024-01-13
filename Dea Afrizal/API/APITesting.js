$(".search-button").on("click", function () {
  $.ajax({
    url: "http://www.omdbapi.com/?apikey=55baf41e&s=" + $(".input-keyword").val(),
    success: (results) => {
      const movies = results.Search;
      let cards = "";

      movies.forEach((e) => {
        cards += ShowCards(e);
      });
      $(".movies-container").html(cards);

      // if click
      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url: "http://www.omdbapi.com/?apikey=55baf41e&i=" + $(this).data("imdbid"),
          success: (e) => {
            const movieDetail = ShowDetail(e);
            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (err) => {
      console.log(err.responseText);
    },
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
