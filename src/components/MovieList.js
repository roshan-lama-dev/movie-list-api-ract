import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { BtnGroup } from "./BtnGroup";

import { MovieCard } from "./MovieCard";

export const MovieList = ({ movieList, onDeleteClick }) => {
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    console.log("after use effect");
    // update the locak state
    setDisplay(movieList);
  }, [movieList]);

  // render all the tome wiht piht dependenc array
  // rener one time  ad only reneer if asome specific prps updates
  // render if some specific props upates

  const handleOnFilter = (str) => {
    console.log(str);

    str === "all"
      ? setDisplay(movieList)
      : setDisplay(movieList.filter((item) => item.cat === str));
  };
  return (
    <div className="bg-dark p-3 rounded">
      <Row className="mt-5 ">
        <Col>
          <BtnGroup handleOnFilter={handleOnFilter} />
          <div className="py-2 text-center">{display.length} movies found</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3 d-flex justify-content-around flex-wrap ">
          {display.map((item, index) => (
            <MovieCard
              key={item.imdbID}
              movie={item}
              showDelete={true}
              fun={onDeleteClick}
            />
          ))}
        </Col>
      </Row>
    </div>
  );
};
