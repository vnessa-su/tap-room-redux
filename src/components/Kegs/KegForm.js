import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const KegForm = (props) => {
  return (
    <React.Fragment>
      <Form onSubmit={props.onClickHandler}>
        <Form.Group controlId="formKegName">
          <Form.Label class="form-label">Name</Form.Label>
          <Form.Control type="text" class="form-input form-control" />
        </Form.Group>

        <Form.Group controlId="formKegBrand">
          <Form.Label class="form-label">Brand</Form.Label>
          <Form.Control type="text" class="form-input form-control" />
        </Form.Group>

        <Form.Group controlId="formAlcoholContent">
          <Form.Label class="form-label">Alcohol Content</Form.Label>
          <Form.Control type="text" class="form-input form-control" />
        </Form.Group>

        <Form.Group controlId="formPintPrice">
          <Form.Label class="form-label">Price Per Pint</Form.Label>
          <Form.Control type="text" class="form-input form-control" />
        </Form.Group>

        <Form.Group controlId="formNumberOfPints">
          <Form.Label class="form-label">Pints In Keg</Form.Label>
          <Form.Control type="text" class="form-input form-control" />
        </Form.Group>

        <Button type="submit">{props.buttonText}</Button>
      </Form>
    </React.Fragment>
  );
};

KegForm.propTypes = {
  onClickHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default KegForm;
