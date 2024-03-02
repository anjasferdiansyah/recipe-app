import { createSlice } from "@reduxjs/toolkit";
import { getRecipe } from "../action/getRecipeAction";

const recipeByMealSlice = createSlice({
  name: "recipeByMeal",
  initialState: {
    data: [],
    isLoading: true,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecipe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getRecipe.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default recipeByMealSlice.reducer;
