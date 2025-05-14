import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";
import FilmPage from "./pages/Film";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/film" element={<FilmPage />}></Route>
          <Route path="/film/:id" element={<MovieDetail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
