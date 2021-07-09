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

  it("should create CLEAR_KEG_SELECT action", () => {
    const expectedOutput = { type: "CLEAR_KEG_SELECT" };
    expect(actions.clearKegSelect()).toEqual(expectedOutput);
  });

  it("should create SHOW_NEW_FORM action", () => {
    const expectedOutput = { type: "SHOW_NEW_FORM" };
    expect(actions.showNewForm()).toEqual(expectedOutput);
  });

  it("should create HIDE_NEW_FORM action", () => {
    const expectedOutput = { type: "HIDE_NEW_FORM" };
    expect(actions.hideNewForm()).toEqual(expectedOutput);
  });

  it("should create TOGGLE_NEW_FORM action", () => {
    const expectedOutput = { type: "TOGGLE_NEW_FORM" };
    expect(actions.toggleNewForm()).toEqual(expectedOutput);
  });

  it("should create SHOW_EDIT_FORM action", () => {
    const expectedOutput = { type: "SHOW_EDIT_FORM" };
    expect(actions.showEditForm()).toEqual(expectedOutput);
  });

  it("should create HIDE_EDIT_FORM action", () => {
    const expectedOutput = { type: "HIDE_EDIT_FORM" };
    expect(actions.hideEditForm()).toEqual(expectedOutput);
  });

  it("should create TOGGLE_EDIT_FORM action", () => {
    const expectedOutput = { type: "TOGGLE_EDIT_FORM" };
    expect(actions.toggleEditForm()).toEqual(expectedOutput);
  });
});
