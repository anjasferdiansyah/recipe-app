import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataRecipebyMealtype } from "../../services/recipes";

export const getRecipe = createAsyncThunk(
  "recipe/getRecipe",
  async (mealType) => {
    const data = getDataRecipebyMealtype(mealType);
    return data;
  }
);

export default getRecipe;
