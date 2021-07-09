import rootReducer from "../../reducers/index";
import { createStore } from "redux";
import kegListReducer from "../../reducers/keg-list-reducer";
import selectKegReducer from "../../reducers/select-keg-reducer";
import formVisibleReducer from "../../reducers/form-visible-reducer";

let store = createStore(rootReducer);

describe("rootReducer", () => {
  const inputKegData = {
    name: "Boom Sauce",
    brand: "Lord Hobo",
    alcoholContent: 8,
    price: 3.5,
    pintsLeft: 20,
    id: 1,
  };

  const initialKegList = {
    1: {
      name: "Boom Sauce",
      brand: "Lord Hobo",
      alcoholContent: 8,
      price: 3.5,
      pintsLeft: 20,
      id: 1,
    },
    2: {
      name: "Wide Awake",
      brand: "Night Shift",
      alcoholContent: 8.1,
      price: 8.5,
      pintsLeft: 62,
      id: 2,
    },
  };

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
    expect(rootReducer({}, { type: null })).toEqual({
      kegList: {},
      selectedKeg: {},
      formVisible: {},
    });
  });

  it("should have initial state matching kegListReducer default state", () => {
    expect(store.getState().kegList).toEqual(
      kegListReducer(undefined, { type: null })
    );
  });

  it("should have initial state matching selectKegReducer default state", () => {
    expect(store.getState().selectedKeg).toEqual(
      selectKegReducer(undefined, { type: null })
    );
  });

  it("should have initial state matching formVisibleReducer default state", () => {
    expect(store.getState().formVisible).toEqual(
      formVisibleReducer(undefined, { type: null })
    );
  });

  it("should add keg to list same as kegListReducer", () => {
    const inputAction = {
      type: "ADD_KEG",
      ...inputKegData,
    };
    store.dispatch(inputAction);
    expect(store.getState().kegList).toEqual(kegListReducer({}, inputAction));
  });

  it("should delete keg from list same as kegListReducer", () => {
    const inputAction = {
      type: "DELETE_KEG",
      id: 2,
    };
    store.dispatch(inputAction);
    expect(store.getState().kegList).toEqual(
      kegListReducer(initialKegList, inputAction)
    );
  });

  it("should select new keg same as selectKegReducer", () => {
    const inputAction = {
      type: "CHANGE_KEG_SELECT",
      ...inputKegData,
    };
    store.dispatch(inputAction);
    expect(store.getState().selectedKeg).toEqual(
      selectKegReducer(undefined, inputAction)
    );
  });

  it("should clear select keg same as selectKegReducer", () => {
    const inputAction = { type: "CLEAR_KEG_SELECT" };
    store.dispatch(inputAction);
    expect(store.getState().selectedKeg).toEqual(
      selectKegReducer(inputKegData, inputAction)
    );
  });

  it("should set formVisible.new to true same as formVisibleReducer", () => {
    const inputAction = { type: "SHOW_NEW_FORM" };
    store.dispatch(inputAction);
    expect(store.getState().formVisible).toEqual(
      formVisibleReducer(undefined, inputAction)
    );
  });

  it("should set formVisible.new to false same as formVisibleReducer", () => {
    const inputAction = { type: "HIDE_NEW_FORM" };
    store.dispatch(inputAction);
    expect(store.getState().formVisible).toEqual(
      formVisibleReducer(undefined, inputAction)
    );
  });

  it("should toggle formVisible.new to true same as formVisibleReducer", () => {
    const inputAction = { type: "TOGGLE_NEW_FORM" };
    store.dispatch(inputAction);
    expect(store.getState().formVisible).toEqual(
      formVisibleReducer(undefined, inputAction)
    );
  });

  it("should set formVisible.edit to true same as formVisibleReducer", () => {
    const inputAction = { type: "SHOW_EDIT_FORM" };
    store.dispatch(inputAction);
    expect(store.getState().formVisible).toEqual(
      formVisibleReducer(initialFormVisibilityNewOn, inputAction)
    );
  });

  it("should set formVisible.edit to false same as formVisibleReducer", () => {
    const inputAction = { type: "HIDE_EDIT_FORM" };
    store.dispatch(inputAction);
    expect(store.getState().formVisible).toEqual(
      formVisibleReducer(initialFormVisibilityNewOn, inputAction)
    );
  });

  it("should toggle formVisible.edit to true same as formVisibleReducer", () => {
    const inputAction = { type: "TOGGLE_EDIT_FORM" };
    store.dispatch(inputAction);
    expect(store.getState().formVisible).toEqual(
      formVisibleReducer(initialFormVisibilityNewOn, inputAction)
    );
  });
});
