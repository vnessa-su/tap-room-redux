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

  it("should create DELETE_KEG action", () => {
    const expectedOutput = {
      type: "DELETE_KEG",
      id: 2,
    };
    expect(actions.deleteKeg(2)).toEqual(expectedOutput);
  });

  it("should create CHANGE_KEG_SELECT action", () => {
    const expectedOutput = {
      type: "CHANGE_KEG_SELECT",
      ...inputKegData,
    };
    expect(actions.selectKeg(inputKegData)).toEqual(expectedOutput);
  });
});
