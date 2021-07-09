const selectKegReducer = (state = {}, action) => {
  const { name, brand, alcoholContent, price, pintsLeft, id } = action;
  let newState;
  switch (action.type) {
    case "CHANGE_KEG_SELECT":
      newState = {
        name: name,
        brand: brand,
        alcoholContent: alcoholContent,
        price: price,
        pintsLeft: pintsLeft,
        id: id,
      };
      return newState;
    case "CLEAR_KEG_SELECT":
      newState = {};
      return newState;
    default:
      return state;
  }
};

export default selectKegReducer;
