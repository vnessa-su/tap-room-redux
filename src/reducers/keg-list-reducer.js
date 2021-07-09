const kegListReducer = (state = {}, action) => {
  const { name, brand, alcoholContent, price, pintsLeft, id } = action;
  switch (action.type) {
    case "ADD_KEG":
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
    default:
      return {};
  }
};

export default kegListReducer;
