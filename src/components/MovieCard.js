import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const MovieCard = ({ movie = {}, fun, showDelete, handleOnClear }) => {
  console.log(movie);
  const { Poster, Title, Year, Plot, imdbRating, imdbID } = movie;

  return (
    <Card style={{ width: "18rem", marginTop: "10px", color: "black" }}>
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Plot}</Card.Text>
        <Card.Text>Released Year: {Year}</Card.Text>
        <Card.Text>Imdb Rating: {imdbRating}</Card.Text>
        {showDelete ? (
          <div className="d-grid mt-2">
            <Button onClick={() => fun(imdbID)} variant="danger">
              Delete
            </Button>
          </div>
        ) : (
          <Col>
            <Row className="my-3">
              <Button
                onClick={() => fun("happy")}
                variant="outline-danger"
                className="text-center"
              >
                Send to Happy List
              </Button>
            </Row>
            <Row>
              <Button
                onClick={() => fun("sad")}
                variant="outline-info"
                className="text-center"
              >
                Send to Lazy List
              </Button>
            </Row>
            <Row>
              <Button
                onClick={() => handleOnClear("remove")}
                variant="outine-dark"
                className="text-center mt-3"
              >
                Remove
              </Button>
            </Row>
          </Col>
        )}
      </Card.Body>
    </Card>
  );
};
