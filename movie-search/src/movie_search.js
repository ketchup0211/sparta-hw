const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjRiZDE4MjE1N2I1Njk3NzdiNDY2MmI4Y2YwYjRjZiIsInN1YiI6IjY1OWI4MjM0Y2E0ZjY3MDBmMDQzZmNkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.evSRwAo9ZsM7AIVmH0vskk5w3H6aFJBBPclFZwRsBHE",
  },
};

// API로부터 id, title, overview, popularity, poster_path 가져오기
const MOVIE_API = config.apikey;

async function getData() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=" + MOVIE_API
    );
    const jsonData = await response.json();
    return jsonData.results;
  } catch (err) {
    console.log(err);
  }
}

const createMovieCards = async () => {
  const data = await getData();
  const card_container = document.getElementsByClassName(".card_container");

  const base_url = "https://image.tmdb.org/t/p/";
  const file_size = "w500/";
  data.map((movie) => {
    const card = document.createElement("div");
    card.className = "card";

    //image
    const img = document.createElement("a");
    img.className = "img";
    img.setAttribute("href", base_url + file_size + movie.poster_path);

    //title
    const title = document.createElement("p");
    title.className = "title";
    title.innerText = movie.title;

    //overview
    const overview = document.createElement("p");
    overview.className = "overview";
    overview.innerText = movie.overview;

    //vote_average
    const vote_average = document.createElement("p");
    vote_average.className = "vote_average";
    vote_average.innerText = movie.vote_average;
  });
};

const clickCard = () => {};

document.getElementsByClassName('.card')
