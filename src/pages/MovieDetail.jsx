import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams();
  const [film, setFilm] = useState({});

  function getFilm() {
    axios(`http://127.0.0.1:3000/film/${id}`)
      .then((response) => setFilm(response.data))
      .catch((err) => console.log(err));
  }

  useEffect(getFilm, [id]);

  return (
    <>
      <div>
        <div>
          <header>
            <h1>{film.title}</h1>
            <h2>{film.director}</h2>
            <p>{film.abstract}</p>
          </header>
        </div>

        <hr />

        {film && film.reviews ? (
          film.reviews.map((comm) => (
            <div key={comm.id}>
              <h2>{comm.name}</h2>
              <h4>
                Voto: {comm.vote}
                <StarRating vote={film.vote_review} />
              </h4>
              <p>{comm.text}</p>
            </div>
          ))
        ) : (
          <div>Nessuna Recensione</div>
        )}
      </div>
    </>
  );
}
