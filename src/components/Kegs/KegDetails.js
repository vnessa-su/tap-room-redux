import React from "react";
import Button from "react-bootstrap/Button";

const KegDetails = (props) => {
  return (
    <React.Fragment>
      <h2>
        {props.keg.brand} {props.keg.name}
      </h2>
      <p>Alcohol Content: {props.keg.alcoholContent}%</p>
      <p>Price: ${props.keg.price}</p>
      <p>Pints in Keg: {props.keg.pintsLeft}</p>
      <Button onClick={() => props.onSellPint(props.keg.id)}>
        Sell a Pint
      </Button>
    </React.Fragment>
  );
};

export default KegDetails;
