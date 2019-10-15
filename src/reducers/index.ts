import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import drinksReducer from "./drinksReducer";

const state = combineReducers({
  drinksReducer,
  form: formReducer
});

export default state;
