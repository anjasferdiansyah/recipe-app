import { createSlice } from "@reduxjs/toolkit";
import { getAllRecipe } from "../action/getAllRecipeAction";

const recipeByQuerySlice = createSlice({
  name: "recipeByQuery",
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
      .addCase(getAllRecipe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getAllRecipe.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default recipeByQuerySlice.reducer;
