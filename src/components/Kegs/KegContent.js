import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import KegDetails from "./KegDetails";
import EditKegForm from "./EditKegForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as action from "../../actions";

class KegContent extends React.Component {
  onButtonClickHandler = () => {
    const { dispatch } = this.props;
    if (Object.keys(this.props.selectedKeg).length) {
      dispatch(action.hideNewForm());
      dispatch(action.hideEditForm());
      dispatch(action.clearKegSelect());
    } else {
      dispatch(action.toggleNewForm());
    }
  };

  onSubmitNewKegHandler = (keg) => {
    const { dispatch } = this.props;
    dispatch(action.addNewKeg(keg));
    dispatch(action.hideNewForm());
  };

  onKegSelect = (id) => {
    const { dispatch } = this.props;
    const keg = this.props.kegList[id];
    dispatch(action.selectKeg(keg));
  };

  onDecreasePintsHandler = (id) => {
    const { dispatch } = this.props;
    const kegSelected = this.props.kegList[id];
    kegSelected.pintsLeft--;
    if (kegSelected.pintsLeft < 0) {
      kegSelected.pintsLeft = 0;
    }
    dispatch(action.addNewKeg(kegSelected));
    if (Object.keys(this.props.selectedKeg).length) {
      dispatch(action.selectKeg(kegSelected));
    }
  };

  onSaveKegEditHandler = (keg) => {
    const { dispatch } = this.props;
    dispatch(action.addNewKeg(keg));
    dispatch(action.hideNewForm());
    dispatch(action.hideEditForm());
    dispatch(action.selectKeg(keg));
  };

  onEditKegClickHandler = (id) => {
    const { dispatch } = this.props;
    const kegSelected = this.props.kegList[id];
    dispatch(action.showEditForm());
    dispatch(action.selectKeg(kegSelected));
  };

  render() {
    let visibleContent = null;
    let buttonText = "Return to Keg List";
    if (this.props.formVisible.edit) {
      visibleContent = (
        <EditKegForm
          keg={this.props.selectedKeg}
          onSave={this.onSaveKegEditHandler}
        />
      );
    } else if (Object.keys(this.props.selectedKeg).length) {
      visibleContent = (
        <KegDetails
          keg={this.props.selectedKeg}
          onSellPint={this.onDecreasePintsHandler}
          onClickEdit={this.onEditKegClickHandler}
        />
      );
    } else if (this.props.formVisible.new) {
      visibleContent = <NewKegForm onSubmit={this.onSubmitNewKegHandler} />;
    } else {
      visibleContent = (
        <KegList
          items={this.props.kegList}
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

const mapStateToProps = (state) => {
  return {
    kegList: state.kegList,
    selectedKeg: state.selectedKeg,
    formVisible: state.formVisible,
  };
};

KegContent.propTypes = {
  kegList: PropTypes.object,
  selectedKeg: PropTypes.object,
  formVisible: PropTypes.object,
};

KegContent = connect(mapStateToProps)(KegContent);

export default KegContent;
