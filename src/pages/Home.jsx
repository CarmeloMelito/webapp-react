import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center py-5">
      <h1 className="mb-4">FILM</h1>
      <p className="lead mb-4">Scopri i Film</p>
      <Link to="/film" className="btn btn-primary btn-lg">
        Vai alla Lista Film
      </Link>
    </div>
  );
};

export default Home;
