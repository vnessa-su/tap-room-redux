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

  it("should return the default state", () => {
    expect(kegListReducer()).toEqual({});
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
});
