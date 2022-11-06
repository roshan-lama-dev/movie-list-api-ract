import { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { fetchData } from "../utilies/axiosHelpers";
import { randomChar } from "../utilies/randomChar";
import { MovieCard } from "./MovieCard";

export const SearchForm = ({ displayToHappyList }) => {
  const [form, setForm] = useState("");
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const char = randomChar();
    console.log(char);

    getMovieFromApi(char);
  }, []);

  const getMovieFromApi = async (str) => {
    try {
      const resp = await fetchData(str);
      console.log(resp.data);
      if (resp.data.Response === "True") {
        setMovie(resp.data);
        console.log(movie);
      } else {
        setError(resp.data.Error);
      }
    } catch (error) {
      console.log(error);
      setError("Error occured, please try again later");
    }
  };

  // get the form data while typing
  const handleOnChange = (e) => {
    const { value } = e.target;
    setForm(value);
  };

  // when form is submited, call the api with the serched data and get the movie details

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    error && setError("");
    movie.imdbID && setMovie({});

    getMovieFromApi(form);
  };

  const handleOnAddToList = (cat) => {
    console.log(cat);
    displayToHappyList({ ...movie, cat });
    //  To resest
    setMovie({});
    setForm("");
  };

  const handleOnClear = () => {
    const char = randomChar();
    console.log(char);
    setMovie({});
    getMovieFromApi(char);
  };
  // display movie data in our UI
  return (
    <Form className="py-3" onSubmit={handleOnSubmit}>
      <Row>
        <Col></Col>
        <Col>
          <Form.Control
            // to reset the input field
            value={form}
            onChange={handleOnChange}
            placeholder="Movie name ..."
            required
          />
        </Col>
        <Col>
          <Button type="submit"> Search</Button>
        </Col>
      </Row>
      <Row className="py-3 justify-content-center">
        {movie.imdbID && (
          <MovieCard
            movie={movie}
            fun={handleOnAddToList}
            handleOnClear={handleOnClear}
          />
        )}
        {error && <Alert variant="danger">{error}</Alert>}
      </Row>
    </Form>
  );
};
