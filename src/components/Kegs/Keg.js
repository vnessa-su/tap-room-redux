import React from "react";

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

export default Keg;
