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
        <div className="container my-4">
          <h2> CERCA FILM</h2>
          <form onSubmit={searchFilms} className="d-flex">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="form-control me-2"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="container">
          <div className="row">
            {film.length > 0 ? (
              film.map((film) => (
                <div key={film.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                  <MovieCard data={film} />
                </div>
              ))
            ) : (
              <div className="text-light">Nessun Film</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
