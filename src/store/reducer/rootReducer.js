import { combineReducers } from "@reduxjs/toolkit";
import recipeByIdSlice from "./recipeByIdSlice";
import recipeByMealSlice from "./recipeByMealSlice";
import recipeByQuerySlice from "./recipeByQuerySlice";
import bookmarkSlice from "./bookmarkSlice";

const rootReducer = combineReducers({
  bookmark: bookmarkSlice,
  recipeByQuery: recipeByQuerySlice,
  recipeById: recipeByIdSlice,
  recipeByMeal: recipeByMealSlice,
});

export default rootReducer;
