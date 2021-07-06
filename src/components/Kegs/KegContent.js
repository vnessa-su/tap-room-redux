import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import KegDetails from "./KegDetails";
import EditKegForm from "./EditKegForm";

class KegContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      showEditForm: false,
      selectedKeg: null,
      itemList: [],
    };
  }

  onButtonClickHandler = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        showForm: false,
        showEditForm: false,
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

  onDecreasePintsHandler = (id) => {
    const kegSelected = this.state.itemList.find((keg) => keg.id === id);
    kegSelected.pintsLeft--;
    if (kegSelected.pintsLeft < 0) {
      kegSelected.pintsLeft = 0;
    }
    const itemListWithoutSelected = this.state.itemList.filter(
      (keg) => keg.id !== id
    );
    this.setState({ itemList: [...itemListWithoutSelected, kegSelected] });
  };

  onSaveKegEditHandler = (keg) => {
    const itemListWithoutSelected = this.state.itemList.filter(
      (item) => item.id !== keg.id
    );
    this.setState({
      showForm: false,
      showEditForm: false,
      selectedKeg: null,
      itemList: [...itemListWithoutSelected, keg],
    });
  };

  onEditKegClickHandler = (id) => {
    const kegSelected = this.state.itemList.find((keg) => keg.id === id);
    this.setState({
      showEditForm: true,
      selectedKeg: kegSelected,
    });
  };

  render() {
    let visibleContent = null;
    let buttonText = "Return to Keg List";
    if (this.state.showEditForm) {
      visibleContent = (
        <EditKegForm
          keg={this.state.selectedKeg}
          onSave={this.onSaveKegEditHandler}
        />
      );
    } else if (this.state.selectedKeg != null) {
      visibleContent = (
        <KegDetails
          keg={this.state.selectedKeg}
          onSellPint={this.onDecreasePintsHandler}
          onClickEdit={this.onEditKegClickHandler}
        />
      );
    } else if (this.state.showForm) {
      visibleContent = <NewKegForm onSubmit={this.onSubmitNewKegHandler} />;
    } else {
      visibleContent = (
        <KegList
          items={this.state.itemList}
          kegSelectHandler={this.onKegSelect}
          onSellPint={this.onDecreasePintsHandler}
          onClickEdit={this.onEditKegClickHandler}
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
