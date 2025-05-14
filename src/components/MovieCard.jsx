import { NavLink, Link } from "react-router-dom";

export default function MovieCard({ data }) {
  const { id, title, image, abstract } = data;

  return (
    <>
      <div className="card mb-4">
        <img src={image} className="card-img-top" alt="images" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"> {abstract}</p>
          <Link className="btn btn-primary" to={`/film/${id}`} data={data}>
            Details
          </Link>
        </div>
      </div>
    </>
  );
}
