import React from "react";
import Keg from "./Keg";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { FaBeer, FaMinus } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const KegList = (props) => {
  return (
    <React.Fragment>
      <ListGroup>
        {props.items.map((item) => (
          <ListGroup.Item key={item.id}>
            <Container>
              <Row>
                <Col>
                  <Keg
                    name={item.name}
                    brand={item.brand}
                    price={item.price}
                    id={item.id}
                    key={item.id}
                    onItemClick={props.kegSelectHandler}
                  />
                </Col>
                <Col xs={3}>
                  <p className="float-right">
                    Pints Available: {item.pintsLeft}{" "}
                  </p>
                </Col>
                <Col xs={2}>
                  <Button
                    title="Sell a Pint"
                    onClick={() => props.onSellPint(item.id)}
                    className="float-right"
                  >
                    <FaMinus />
                    <FaBeer />
                  </Button>
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </React.Fragment>
  );
};

export default KegList;
