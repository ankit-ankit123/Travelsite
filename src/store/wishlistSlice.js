import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    // ✅ Toggle instead of separate add/remove
    toggleWishlist: (state, action) => {
      const exists = state.find((item) => item.id === action.payload.id);
      if (exists) {
        return state.filter((item) => item.id !== action.payload.id); // remove if already present
      } else {
        state.push(action.payload); // add if not present
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;