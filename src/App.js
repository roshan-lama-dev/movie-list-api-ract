import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { MovieList } from "./components/MovieList";
import { SearchForm } from "./components/SearchForm";

import { Title } from "./components/Title";

function App() {
  const [movieList, setMovieList] = useState([]);

  const displayToHappyList = (movieObj) => {
    const newArg = movieList.filter((item) => item.imdbID !== movieObj.imdbID);
    setMovieList([...newArg, movieObj]);
    console.log(movieList);
  };

  const onDeleteClick = (id) => {
    if (window.confirm("Delete?")) {
      setMovieList(movieList.filter((item) => item.imdbID !== id));
    }
    console.log(movieList);
  };
  return (
    <div className="wrapper ">
      <Container>
        <Title />
        {/* form */}
        <SearchForm displayToHappyList={displayToHappyList} />

        {/* movie List */}
        <MovieList movieList={movieList} onDeleteClick={onDeleteClick} />
      </Container>
    </div>
  );
}

export default App;
