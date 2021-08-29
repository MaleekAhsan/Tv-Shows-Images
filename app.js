let searchForm = document.querySelector("form");
let btn = document.querySelector("button");
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let queryKey = searchForm.elements.query.value;

  axios
    .get("https://api.tvmaze.com/search/shows", { params: { q: queryKey } })
    .then(function (res) {
      let shows = res.data;
      for (result of shows) {
        if (result.show.image) {
          let url = result.show.image.medium;
          let pic = document.createElement("img");
          pic.src = url;
          document.body.append(pic);
        }
      }
    })
    .catch(function (er) {
      console.log(er);
    });
});
