import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataRecipe } from "../../services/recipes";

export const getAllRecipe = createAsyncThunk(
  "recipe/getRecipe",
  async (query) => {
    const data = getDataRecipe(query);
    return data;
  }
);

export default getAllRecipe;
