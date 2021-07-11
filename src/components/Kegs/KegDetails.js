import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const KegDetails = (props) => {
  return (
    <React.Fragment>
      <h2>
        {props.keg.brand} {props.keg.name}
      </h2>
      <p>Alcohol Content: {props.keg.alcoholContent}%</p>
      <p>Price: ${props.keg.price}</p>
      <p>Pints in Keg: {props.keg.pintsLeft}</p>
      <Button onClick={() => props.onSellPint(props.keg.id)} className="m-2">
        Sell a Pint
      </Button>
      <Button onClick={() => props.onClickEdit(props.keg.id)} className="m-2">
        Edit Keg Information
      </Button>
    </React.Fragment>
  );
};

KegDetails.propTypes = {
  keg: PropTypes.object,
  onSellPint: PropTypes.func,
  onClickEdit: PropTypes.func,
};

export default KegDetails;
