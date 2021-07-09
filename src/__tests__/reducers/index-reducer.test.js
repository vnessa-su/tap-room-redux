import rootReducer from "../../reducers/index";
import { createStore } from "redux";

let store = createStore(rootReducer);

describe("rootReducer", () => {
  it("should return default state if no action specified", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      kegList: {},
      selectedKeg: {},
      formVisible: {},
    });
  });
});
