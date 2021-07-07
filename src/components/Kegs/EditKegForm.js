import React from "react";
import KegForm from "./KegForm";
import PropTypes from "prop-types";

const EditKegForm = (props) => {
  function editKegHandler(event) {
    event.preventDefault();
    props.onSave({
      name: event.target.formKegName.value,
      brand: event.target.formKegBrand.value,
      alcoholContent: event.target.formAlcoholContent.value,
      price: event.target.formPintPrice.value,
      pintsLeft: event.target.formNumberOfPints.value,
      id: props.keg.id,
    });
  }
  return (
    <React.Fragment>
      <KegForm buttonText="Save Changes" onClickHandler={editKegHandler} />
    </React.Fragment>
  );
};

EditKegForm.propTypes = {
  keg: PropTypes.object,
  editKegHandler: PropTypes.func,
};

export default EditKegForm;
