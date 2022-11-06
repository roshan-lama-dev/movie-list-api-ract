import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export const BtnGroup = ({ handleOnFilter }) => {
  return (
    <div>
      {" "}
      <ButtonGroup className="ml-15" aria-label="Basic example ">
        <Button onClick={() => handleOnFilter("all")} variant="primary">
          All
        </Button>
        <Button
          onClick={() => handleOnFilter("happy")}
          variant="danger"
          onSubmit={handleOnFilter}
        >
          Happy
        </Button>
        <Button onClick={() => handleOnFilter("sad")} variant="warning">
          Sad
        </Button>
        <Button onClick={() => handleOnFilter("lazy")} variant="info">
          Lazy
        </Button>
      </ButtonGroup>
    </div>
  );
};
