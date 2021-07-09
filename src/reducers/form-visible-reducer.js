const formVisibleReducer = (state = {}, action) => {
  switch (action.type) {
    case "TURN_ON_NEW":
      let newState = { ...state };
      newState.new = true;
      return newState;
    default:
      return state;
  }
};

export default formVisibleReducer;
