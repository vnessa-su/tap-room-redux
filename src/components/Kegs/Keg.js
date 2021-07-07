import React from "react";
import PropTypes from "prop-types";

const Keg = (props) => {
  return (
    <React.Fragment>
      <div onClick={() => props.onItemClick(props.id)}>
        <p>
          {props.brand} {props.name} - ${props.price}
        </p>
      </div>
    </React.Fragment>
  );
};

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string,
  onItemClick: PropTypes.func,
};

export default Keg;
