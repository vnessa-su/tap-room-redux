import * as actions from "../../actions";

describe("keg content actions", () => {
  const inputKegData = {
    name: "Boom Sauce",
    brand: "Lord Hobo",
    alcoholContent: 8,
    price: 3.5,
    pintsLeft: 20,
    id: 1,
  };

  it("should create ADD_KEG action", () => {
    const expectedOutput = {
      type: "ADD_KEG",
      ...inputKegData,
    };
    expect(actions.addNewKeg(inputKegData)).toEqual(expectedOutput);
  });
});
