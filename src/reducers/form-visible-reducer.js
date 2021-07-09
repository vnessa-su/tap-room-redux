const formVisibleReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case "SHOW_NEW_FORM":
      newState = { ...state };
      newState.new = true;
      return newState;
    case "HIDE_NEW_FORM":
      newState = { ...state };
      newState.new = false;
      return newState;
    case "TOGGLE_NEW_FORM":
      newState = { ...state };
      newState.new = !state.new;
      return newState;
    case "SHOW_EDIT_FORM":
      newState = { ...state };
      newState.edit = true;
      return newState;
    case "HIDE_EDIT_FORM":
      newState = { ...state };
      newState.edit = false;
      return newState;
    case "TOGGLE_EDIT_FORM":
      newState = { ...state };
      newState.edit = !state.new;
      return newState;
    default:
      return state;
  }
};

export default formVisibleReducer;
