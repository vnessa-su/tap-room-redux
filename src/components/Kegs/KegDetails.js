import React from "react";

const KegDetails = (props) => {
  return (
    <React.Fragment>
      <h2>
        {props.keg.brand} {props.keg.name}
      </h2>
      <p>Alcohol Content: {props.keg.alcoholContent}%</p>
      <p>Price: ${props.keg.price}</p>
      <p>Pints in Keg: {props.keg.pintsLeft}</p>
    </React.Fragment>
  );
};

export default KegDetails;
