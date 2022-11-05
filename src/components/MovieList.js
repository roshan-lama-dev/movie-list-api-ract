import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BtnGroup } from "./BtnGroup";

import { MovieCard } from "./MovieCard";

export const MovieList = ({ movieList }) => {
  return (
    <div className="bg-dark p-3 rounded">
      <Row className="mt-5 ">
        <Col>
          <BtnGroup />
          <div className="py-2 text-center">
            {movieList.length} movies found
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3 d-flex justify-content-around flex-wrap ">
          {movieList.map((item, index) => (
            <MovieCard key={item.imdbID} movie={item} />
          ))}
        </Col>
      </Row>
    </div>
  );
};
