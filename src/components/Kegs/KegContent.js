import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import KegDetails from "./KegDetails";

class KegContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      selectedKeg: null,
      itemList: [],
    };
  }

  onButtonClickHandler = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        showForm: false,
        selectedKeg: null,
      });
    } else {
      this.setState((prevState) => ({
        showForm: !prevState.showForm,
      }));
    }
  };

  onSubmitNewKegHandler = (keg) => {
    const newItemList = [...this.state.itemList, keg];
    this.setState({ itemList: newItemList, showForm: false });
  };

  onKegSelect = (id) => {
    const kegSelected = this.state.itemList.find((keg) => keg.id === id);
    this.setState({ selectedKeg: kegSelected });
  };

  render() {
    let visibleContent = null;
    let buttonText = null;
    if (this.state.selectedKeg != null) {
      visibleContent = <KegDetails keg={this.state.selectedKeg} />;
      buttonText = "Return to Event List";
    } else if (this.state.showForm) {
      visibleContent = <NewKegForm onSubmit={this.onSubmitNewKegHandler} />;
      buttonText = "Return to Keg List";
    } else {
      visibleContent = (
        <KegList
          items={this.state.itemList}
          kegSelectHandler={this.onKegSelect}
        />
      );
      buttonText = "Add New Keg";
    }
    return (
      <React.Fragment>
        <Container>
          {visibleContent}
          <Button onClick={this.onButtonClickHandler}>{buttonText}</Button>
        </Container>
      </React.Fragment>
    );
  }
}

export default KegContent;
