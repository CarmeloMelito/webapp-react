import { NavLink, Link } from "react-router-dom";

export default function MovieCard({ data }) {
  const { id, title, image, abstract } = data;

  return (
    <>
      <img src={image} alt="images" />
      <p>{abstract}</p>
      <Link to={`/film/${id}`} data={data}>
        Details
      </Link>
    </>
  );
}
