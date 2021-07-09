import kegListReducer from "./keg-list-reducer";
import selectKegReducer from "./select-keg-reducer";
import formVisibleReducer from "./form-visible-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  kegList: kegListReducer,
  selectedKeg: selectKegReducer,
  formVisible: formVisibleReducer,
});

export default rootReducer;
