import selectKegReducer from "./../../reducers/select-keg-reducer";

describe("selectKegReducer", () => {
  const inputKegData = {
    name: "Boom Sauce",
    brand: "Lord Hobo",
    alcoholContent: 8,
    price: 3.5,
    pintsLeft: 20,
    id: 1,
  };

  it("should return default state if no action specified", () => {
    expect(selectKegReducer({}, { type: null })).toEqual({});
  });

  it("should return an object of the input keg data", () => {
    const inputAction = {
      type: "CHANGE_KEG_SELECT",
      ...inputKegData,
    };
    expect(selectKegReducer({}, inputAction)).toEqual(inputKegData);
  });
});
