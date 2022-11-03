import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { MovieCard } from "./MovieCard";

export const SearchForm = () => {
  return (
    <Form className="py-3 text-center">
      <Row>
        {/* <Col></Col> */}
        <Col>
          <Form.Control placeholder="Enter Movie Name" />
        </Col>
        <Col>
          <Button> Search</Button>
        </Col>
      </Row>
      <Row className="py-3 justify-content-center flex-wrap gap-3 d-flex">
        <MovieCard />
      </Row>
    </Form>
  );
};
