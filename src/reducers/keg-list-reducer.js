import * as c from "../actions/ActionTypes";

const kegListReducer = (state = {}, action) => {
  const { name, brand, alcoholContent, price, pintsLeft, id } = action;
  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          alcoholContent: alcoholContent,
          price: price,
          pintsLeft: pintsLeft,
          id: id,
        },
      });
    case c.DELETE_KEG:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default kegListReducer;
