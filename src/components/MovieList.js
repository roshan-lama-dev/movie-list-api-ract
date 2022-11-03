import React from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
  return (
    <>
      <Row className="mt-5 bg-dark p-3 rounded">
        <Col>
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary">All</Button>
            <Button variant="success">Happy</Button>
            <Button variant="danger">Lazy</Button>
          </ButtonGroup>
          <div className="my-2 text-center">10 Movies</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3 d-flex justify-content-around felx-wrap gap-2">
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </Col>
      </Row>
    </>
  );
};
