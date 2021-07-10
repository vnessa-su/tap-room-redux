import * as c from "../actions/ActionTypes";

const formVisibleReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case c.SHOW_NEW_FORM:
      newState = { ...state };
      newState.new = true;
      return newState;
    case c.HIDE_NEW_FORM:
      newState = { ...state };
      newState.new = false;
      return newState;
    case c.TOGGLE_NEW_FORM:
      newState = { ...state };
      newState.new = !state.new;
      return newState;
    case c.SHOW_EDIT_FORM:
      newState = { ...state };
      newState.edit = true;
      return newState;
    case c.HIDE_EDIT_FORM:
      newState = { ...state };
      newState.edit = false;
      return newState;
    case c.TOGGLE_EDIT_FORM:
      newState = { ...state };
      newState.edit = !state.new;
      return newState;
    default:
      return state;
  }
};

export default formVisibleReducer;
