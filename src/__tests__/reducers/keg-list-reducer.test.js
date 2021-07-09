import kegListReducer from "../../reducers/keg-list-reducer";

describe("kegListReducer", () => {
  const inputKegData = {
    name: "Boom Sauce",
    brand: "Lord Hobo",
    alcoholContent: 8,
    price: 3.5,
    pintsLeft: 20,
    id: 1,
  };

  const initialKegList = {
    1: {
      name: "Boom Sauce",
      brand: "Lord Hobo",
      alcoholContent: 8,
      price: 3.5,
      pintsLeft: 20,
      id: 1,
    },
    2: {
      name: "Wide Awake",
      brand: "Night Shift",
      alcoholContent: 8.1,
      price: 8.5,
      pintsLeft: 62,
      id: 2,
    },
  };

  it("should return the default state if no action specified", () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  it("should return an object contaning the input keg data", () => {
    const { name, brand, alcoholContent, price, pintsLeft, id } = inputKegData;
    const inputAction = {
      type: "ADD_KEG",
      name: name,
      brand: brand,
      alcoholContent: alcoholContent,
      price: price,
      pintsLeft: pintsLeft,
      id: id,
    };

    const expectedOutput = {
      [id]: {
        name: name,
        brand: brand,
        alcoholContent: alcoholContent,
        price: price,
        pintsLeft: pintsLeft,
        id: id,
      },
    };

    expect(kegListReducer({}, inputAction)).toEqual(expectedOutput);
  });

  it("should return an object containing only one keg", () => {
    const { name, brand, alcoholContent, price, pintsLeft, id } = inputKegData;
    const inputAction = {
      type: "DELETE_KEG",
      id: 2,
    };

    const expectedOutput = {
      [id]: {
        name: name,
        brand: brand,
        alcoholContent: alcoholContent,
        price: price,
        pintsLeft: pintsLeft,
        id: id,
      },
    };

    expect(kegListReducer(initialKegList, inputAction)).toEqual(expectedOutput);
  });
});
