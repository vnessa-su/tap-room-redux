import formVisibleReducer from "./../../reducers/form-visible-reducer";

describe("formVisibleReducer", () => {
  const initialFormVisibilityAllOff = {
    new: false,
    edit: false,
  };

  const initialFormVisibilityNewOn = {
    new: true,
    edit: false,
  };

  const initialFormVisibilityEditOn = {
    new: false,
    edit: true,
  };

  it("should return default state if no action specified", () => {
    expect(formVisibleReducer({}, { type: null })).toEqual({});
  });

  it("should return object with new property set to true", () => {
    const inputAction = { type: "SHOW_NEW_FORM" };
    const expectedOutput = {
      new: true,
      edit: false,
    };
    expect(
      formVisibleReducer(initialFormVisibilityAllOff, inputAction)
    ).toEqual(expectedOutput);
  });

  it("should return object with new property set to false", () => {
    const inputAction = { type: "HIDE_NEW_FORM" };
    const expectedOutput = {
      new: false,
      edit: false,
    };
    expect(formVisibleReducer(initialFormVisibilityNewOn, inputAction)).toEqual(
      expectedOutput
    );
  });

  it("should return object with new property toggled to true", () => {
    const inputAction = { type: "TOGGLE_NEW_FORM" };
    const expectedOutput = {
      new: true,
      edit: false,
    };
    expect(
      formVisibleReducer(initialFormVisibilityAllOff, inputAction)
    ).toEqual(expectedOutput);
  });

  it("should return object with edit property set to true", () => {
    const inputAction = { type: "SHOW_EDIT_FORM" };
    const expectedOutput = {
      new: false,
      edit: true,
    };
    expect(
      formVisibleReducer(initialFormVisibilityAllOff, inputAction)
    ).toEqual(expectedOutput);
  });

  it("should return object with edit property set to false", () => {
    const inputAction = { type: "HIDE_EDIT_FORM" };
    const expectedOutput = {
      new: false,
      edit: false,
    };
    expect(
      formVisibleReducer(initialFormVisibilityEditOn, inputAction)
    ).toEqual(expectedOutput);
  });

  it("should return object with edit property toggled to true", () => {
    const inputAction = { type: "TOGGLE_EDIT_FORM" };
    const expectedOutput = {
      new: false,
      edit: true,
    };
    expect(
      formVisibleReducer(initialFormVisibilityAllOff, inputAction)
    ).toEqual(expectedOutput);
  });
});
