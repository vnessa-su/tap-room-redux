import React from "react";
import Keg from "./Keg";

const KegList = (props) => {
  return (
    <React.Fragment>
      <ul>
        {props.items.map((item) => (
          <li>
            <Keg
              name={item.name}
              brand={item.brand}
              price={item.price}
              id={item.id}
              key={item.id}
              onItemClick={props.kegSelectHandler}
            />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default KegList;
