$.ajax({
  url: "http://www.omdbapi.com/?apikey=55baf41e&s=avengers",
  success: (results) => {
    const movies = results.Search;
    let cards = "";

    movies.forEach((e) => {
      cards += `
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
    });
    $(".movies-container").html(cards);

    // if click
    $(".modal-detail-button").on("click", function () {
      $.ajax({
        url: "http://www.omdbapi.com/?apikey=55baf41e&i=" + $(this).data("imdbid"), 
        success: m => {
          const movieDetail = ``
        }
      })
    });
  },
  error: (err) => {
    console.log(err.responseText);
  },
});
