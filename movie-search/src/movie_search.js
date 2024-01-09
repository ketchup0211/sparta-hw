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
    return jsonData["results"];
  } catch (err) {
    console.log(err);
  }
}

const data = getData();

// GET data
const base_url = "https://image.tmdb.org/t/p/";
const file_size = "w500/";
for (let i = 0; i < data.length; i++) {
  //image
  let poster_path = data[i]["poster_path"];
  let img = base_url + file_size + poster_path;

  //title
  let movie_title = data[i][title];

  //overview
  let overview = data[i]["overview"];

  //vote_average
  let vote_average = data[i]["vote_average"];
}
//any
