import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
              <h4>Voto: {comm.vote}</h4>
              <p>{comm.text}</p>
            </div>
          ))
        ) : (
          <div>Nessuna Recensione</div>
        )}

        {/* Aggiunta recensione */}
        <div>
          <h2>Aggiungi Recensione:</h2>
          <form onSubmit={sendData}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Inserisci il tuo nome"
                value={formData.name}
                onChange={handleFormData}
                required
              />
            </div>
            <div>
              <label htmlFor="vote">Voto :</label>
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
            <div>
              <label htmlFor="text">Testo:</label>
              <textarea
                id="text"
                name="text"
                rows="3"
                value={formData.text}
                onChange={handleFormData}
              ></textarea>
            </div>
            <button type="submit">Invia</button>
          </form>
        </div>
      </div>
    </>
  );
}
