import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export const BtnGroup = ({ displayHappy }) => {
  return (
    <div>
      {" "}
      <ButtonGroup className="ml-15" aria-label="Basic example">
        <Button variant="primary">All</Button>
        <Button variant="danger" onSubmit={displayHappy}>
          Happy
        </Button>
        <Button variant="warning">Lazy</Button>
      </ButtonGroup>
    </div>
  );
};
