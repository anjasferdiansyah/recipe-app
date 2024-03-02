import { createSlice } from "@reduxjs/toolkit";
import getSingleRecipe from "../action/getSingleRecipeAction";

const recipeByIdSlice = createSlice({
  name: "recipeById",
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
      .addCase(getSingleRecipe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getSingleRecipe.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default recipeByIdSlice.reducer;
