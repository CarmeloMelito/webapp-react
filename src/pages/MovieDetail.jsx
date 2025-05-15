import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
export default function MovieDetail() {
  const { id } = useParams();
  const [film, setFilm] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    vote: 1,
    text: "",
  });

  function getFilm() {
    axios(`http://127.0.0.1:3000/film/${id}`)
      .then((response) => setFilm(response.data))
      .catch((err) => console.log(err));
  }

  useEffect(getFilm, [id]);

  const handleFormData = (e) => {
    const { name, value } = e.target;

    let currentValue = value;
    if (name === "value") {
      currentValue = parseInt(value);
    }

    setFormData((formData) => ({
      ...formData,
      [name]: currentValue,
    }));
  };

  const sendData = (e) => {
    e.preventDefault();

    axios
      .post(`http://127.0.0.1:3000/film/${id}/reviews`, formData)
      .then((res) => {
        getFilm();
        setFormData({
          name: "",
          vote: 1,
          text: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container mt-5">
        <div>
          <header className="mb-4">
            <h1 className="display-4">{film.title}</h1>
            <h2 className="text-muted">{film.director}</h2>
            <p>{film.abstract}</p>
          </header>
        </div>

        <hr />
        <section className="mb-5">
          {film && film.reviews ? (
            film.reviews.map((comm) => (
              <div className="card mb-3" key={comm.id}>
                <h5 className="card-title">{comm.name}</h5>
                <div className="mb-2">
                  <StarRating vote={comm.vote} />
                </div>
                <p className="card-text">{comm.text}</p>
              </div>
            ))
          ) : (
            <div className="alert alert-info">Nessuna recensione</div>
          )}
        </section>

        {/* Aggiunta recensione */}
        <div>
          <h2>Aggiungi Recensione:</h2>
          <form onSubmit={sendData} className="p-4 border rounded bg-light">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nome
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Inserisci il tuo nome"
                value={formData.name}
                onChange={handleFormData}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="vote" className="form-label">
                Voto :
              </label>
              <div className="mb-2">
                <StarRating vote={formData.vote} />
              </div>
              <input
                type="number"
                id="vote"
                name="vote"
                min={1}
                max={5}
                value={formData.vote}
                onChange={handleFormData}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="text" className="form-label">
                Recensione
              </label>
              <textarea
                className="form-control"
                id="text"
                name="text"
                rows="3"
                value={formData.text}
                onChange={handleFormData}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Aggiungi Recensione
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
