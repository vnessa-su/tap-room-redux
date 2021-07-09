import formVisibleReducer from "./../../reducers/form-visible-reducer";

describe("formVisibleReducer", () => {
  const initialFormVisibility = {
    new: false,
    edit: false,
  };

  it("should return default state if no action specified", () => {
    expect(formVisibleReducer({}, { type: null })).toEqual({});
  });

  it("should return object with new property set to true", () => {
    const inputAction = { type: "TURN_ON_NEW" };
    const expectedOutput = {
      new: true,
      edit: false,
    };
    expect(formVisibleReducer(initialFormVisibility, inputAction)).toEqual(
      expectedOutput
    );
  });
});
