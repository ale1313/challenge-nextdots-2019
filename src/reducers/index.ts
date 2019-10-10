import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import fetchReducer from "./fetchReducer";

const state = combineReducers({
  fetchReducer,
  form: formReducer
});

export default state;
