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

  it("should return an object of the input keg data for change select action", () => {
    const inputAction = {
      type: "CHANGE_KEG_SELECT",
      ...inputKegData,
    };
    expect(selectKegReducer({}, inputAction)).toEqual(inputKegData);
  });

  it("should return an empty object for clear select action", () => {
    const inputAction = {
      type: "CLEAR_KEG_SELECT",
    };
    expect(selectKegReducer(inputKegData, inputAction)).toEqual({});
  });
});
