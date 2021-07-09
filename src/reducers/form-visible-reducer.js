const formVisibleReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case "TURN_ON_NEW":
      newState = { ...state };
      newState.new = true;
      return newState;
    case "TURN_OFF_NEW":
      newState = { ...state };
      newState.new = false;
      return newState;
    case "TOGGLE_NEW":
      newState = { ...state };
      newState.new = !state.new;
      return newState;
    default:
      return state;
  }
};

export default formVisibleReducer;
