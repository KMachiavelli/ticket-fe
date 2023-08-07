import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ticketService } from "../services/ticketService/ticket.service";
import { CartStateI } from "./types";
import { CartVerificationRequestTO } from "../services/ticketService/types";

const initialState: CartStateI = {
  content: {
    items: [],
    total: 0,
    isLoading: false, // applied only for total, since items are stored on client side
  },
  delivery: {
    isLoading: false,
    cost: 0,
  },
};

export const fetchAddItem = createAsyncThunk(
  "cart/fetchAddItem",
  async (addedItemId: number, thunkAPI) => {
    return await ticketService.patchCart({
      ...(thunkAPI.getState() as any).cart,
      addedItemId,
    });
  }
);

const cartReducer = createSlice({
  name: "cart",

  initialState,
  // A DODAWANIE DO ULUBIONYCH JEST RIGHT ON OD RAZU NP

  // BTW SERWIS BILETOW TEZ NIBY MOZE BYC REDUXEM BO MOZE DAWAC CHOCIAZBY TEN STAN LADOWANIA NA ASYNC THUNKU...

  // SERWIS TRANSAKCJI MOZE BYC TEZ NA REDUX, BO MOZE POTEM PODRKESLAC BILETY KTORE OSTATNIO KUPIONO CHOCIAZBY
  reducers: {
    removeItem: (state, action) => {
      const foundItem = state.content.items.find(
        (item) => item.id === action.payload.id
      );
      if (foundItem?.stackCount! > 1) {
        foundItem!.stackCount! -= 1;
      } else {
        state.content.items = state.content.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    removeStack: (state, action) => {
      console.log(state, action);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAddItem.fulfilled, (state, { payload }) => {
      const foundAlreadyExisting = state.content.items.find(
        ({ id }) => id === payload.addedItemId
      );
      if (foundAlreadyExisting) {
        foundAlreadyExisting.stackCount += 1;
      } else {
        state.content.items.push({
          title: payload.addedItemTitle,
          id: payload.addedItemId,
          stackCount: 1,
        });
      }
      state.delivery.isLoading = false;
      state.content.isLoading = false;
      state.delivery.cost = payload.deliveryCost;
    });
    builder.addCase(fetchAddItem.pending, (state, action) => {
      state.delivery.isLoading = true;
      state.content.isLoading = true;
    });
    builder.addCase(fetchAddItem.rejected, (state, action) => {
      // toast error
    });
  },
});

export const { removeItem } = cartReducer.actions;
export const reducer = cartReducer.reducer;
