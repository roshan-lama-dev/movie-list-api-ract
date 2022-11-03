import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// importing component library
import { Button, Container } from "react-bootstrap";
import { Title } from "./components/Title";

import { SearchForm } from "./components/SearchForm";
import { MovieList } from "./components/MovieList";
import { MovieCard } from "./components/MovieCard";

function App() {
  return (
    <div className="wrapper">
      <Container>
        {/* Title */}
        <Title />
        <SearchForm />
        <MovieList />
        {/* Form */}
        {/* Display Area Moview List */}
      </Container>
    </div>
  );
}

export default App;
