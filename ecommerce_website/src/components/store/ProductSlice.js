import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const cartSlice = createSlice({
  name: "carts",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const isThere = state.items.find((element) => element.id === item.id);
      if (isThere) {
        isThere.quantity += 1;
      } else {
        state.items.push(item);
      }
    },
    emptyCart(state) {
      alert("Order Successfully placed");
      state.items = [];
    },

    removeItem(state, action) {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== itemId);
        } else {
          item.quantity -= 1;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
