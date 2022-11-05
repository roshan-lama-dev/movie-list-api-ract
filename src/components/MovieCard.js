import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const MovieCard = ({ movie = {}, fun }) => {
  console.log(movie);
  const { Poster, Title, Year, Plot, imdbRating } = movie;

  return (
    <Card style={{ width: "18rem", marginTop: "10px", color: "black" }}>
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Plot}</Card.Text>
        <Card.Text>Released Year: {Year}</Card.Text>
        <Card.Text>Imdb Rating: {imdbRating}</Card.Text>
        <Col>
          <Row className="my-3">
            <Button
              onClick={() => fun("happy")}
              variant="danger"
              className="text-center"
            >
              Send to Happy List
            </Button>
          </Row>
          <Row>
            <Button
              onClick={() => fun("sad")}
              variant="info"
              className="text-center"
            >
              Send to Lazy List
            </Button>
          </Row>
        </Col>
      </Card.Body>
    </Card>
  );
};
