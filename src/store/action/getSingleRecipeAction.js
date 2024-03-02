import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataRecipeById } from "../../services/recipes";

export const getSingleRecipe = createAsyncThunk(
  "recipe/getSingleRecipe",
  async (id) => {
    const data = getDataRecipeById(id);
    return data;
  }
);

export default getSingleRecipe;
