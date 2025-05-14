import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
export default function FilmPage() {
  const [film, setFilm] = useState([]);

  const [search, setSearch] = useState("");

  function getFilm() {
    axios
      .get("http://127.0.0.1:3000/film", {
        params: { search },
      })
      .then((response) => setFilm(response.data))
      .catch((err) => console.log(err));
  }
  function searchFilms(e) {
    e.preventDefault();
    getFilm();
  }
  useEffect(() => {
    getFilm();
  }, []);
  return (
    <>
      <div>
        <div>
          <h2> CERCA FILM</h2>
          <form onSubmit={searchFilms}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button>Search</button>
          </form>
        </div>
        <div>
          {film.length > 0 ? (
            film.map((film) => (
              <div key={film.id}>
                <MovieCard data={film} />
              </div>
            ))
          ) : (
            <div>Nessun Film</div>
          )}
        </div>
      </div>
    </>
  );
}
