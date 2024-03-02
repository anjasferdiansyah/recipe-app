import { combineReducers } from "@reduxjs/toolkit";
import recipeByIdSlice from "./recipeByIdSlice";
import recipeByMealSlice from "./recipeByMealSlice";

const rootReducer = combineReducers({
  recipeById: recipeByIdSlice,
  recipeByMeal: recipeByMealSlice,
});

export default rootReducer;
