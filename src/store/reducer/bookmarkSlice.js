import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: {
    data: [],
    isLoading: true,
  },
  reducers: {
    addBookmark: (state, action) => {
      const inBookmark = state.data.find(
        (item) => item.uri === action.payload.uri
      );
      if (inBookmark) {
        return state;
      } else {
        state.data = [...state.data, { ...action.payload, isBookmarked: true }];
      }
    },

    removeBookmark: (state, action) => {
      state.data = state.data.filter((item) => item.uri !== action.payload.uri);
    },

    toogleBookmark: (state, action) => {
      const bookmark = state.data.find(
        (item) => item.uri === action.payload.uri
      );
      if (bookmark) {
        bookmark.isBookmarked = !bookmark.isBookmarked;
      }
    },
  },
});

export const { addBookmark, removeBookmark, toogleBookmark } =
  bookmarkSlice.actions;
export default bookmarkSlice.reducer;
