import selectKegReducer from "./../../reducers/select-keg-reducer";

describe("selectKegReducer", () => {
  it("should return default state if no action specified", () => {
    expect(selectKegReducer({}, { type: null })).toEqual({});
  });
});
