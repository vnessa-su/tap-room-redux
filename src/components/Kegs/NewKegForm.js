import React from "react";
import { v4 } from "uuid";
import KegForm from "./KegForm";
import PropTypes from "prop-types";

const NewKegForm = (props) => {
  function newKegSubmitHandler(event) {
    event.preventDefault();
    props.onSubmit({
      name: event.target.formKegName.value,
      brand: event.target.formKegBrand.value,
      alcoholContent: event.target.formAlcoholContent.value,
      price: event.target.formPintPrice.value,
      pintsLeft: event.target.formNumberOfPints.value,
      id: v4(),
    });
  }
  return (
    <React.Fragment>
      <KegForm buttonText="Submit" onClickHandler={newKegSubmitHandler} />
    </React.Fragment>
  );
};

NewKegForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default NewKegForm;
