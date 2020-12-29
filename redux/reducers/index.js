import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import flashcardsReducer from "./flashcardsReducer";
import tagsReducer from "./tagsReducer";
import userReducer from "./userReducer";
import jwtReducer from "./jwtReducer";

export default combineReducers({
  flashcards: flashcardsReducer,
  categories: categoriesReducer,
  tags: tagsReducer,
  user: userReducer,
  jwt: jwtReducer,
});
