import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: {
    data: [],
  },
  reducers: {
    addBookmark: (state, action) => {
      const inBookmark = state.find((item) => item.id === action.payload.id);
      if (inBookmark) {
        return state;
      }
      state.data.push(action.payload);
    },

    removeBookmark: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
