import formVisibleReducer from "./../../reducers/form-visible-reducer";

describe("formVisibleReducer", () => {
  it("should return default state if no action specified", () => {
    expect(formVisibleReducer({}, { type: null })).toEqual({});
  });
});
