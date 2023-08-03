import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ticketService } from "../services/ticketService/ticket.service";
import { CartI } from "./types";

const initialState: CartI = {
  items: [],
  deliveryCost: 0,
  total: "0",
};

export const fetchDeliveryCost = createAsyncThunk(
  "cart/fetchDeliveryCost",
  async () => {
    return await ticketService.getDeliveryCost();
  }
);

const cartReducer = createSlice({
  name: "cart",

  initialState,

  // IDEA: DODAWANIE DO KOSZYKA JEST ASYNC BO SPRAWDZA CZY WGL MOZNA DODAC - IKONKA LADOWANIA + TOAST JEZELI NIE MA
  // A DODAWANIE DO ULUBIONYCH JEST RIGHT ON OD RAZU NP

  // BTW SERWIS BILETOW TEZ NIBY MOZE BYC REDUXEM BO MOZE DAWAC CHOCIAZBY TEN STAN LADOWANIA NA ASYNC THUNKU...

  // SERWIS TRANSAKCJI MOZE BYC TEZ NA REDUX, BO MOZE POTEM PODRKESLAC BILETY KTORE OSTATNIO KUPIONO CHOCIAZBY
  reducers: {
    addItem: (state, { payload }) => {
      // Classic approach with use of return
      const foundItemIndex = state.items.findIndex(
        (item) => item.title === payload.title
      );
      if (foundItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[foundItemIndex] = {
          ...updatedItems[foundItemIndex],
          stackCount: updatedItems[foundItemIndex].stackCount + 1,
        };
        return { ...state, items: updatedItems };
      } else {
        return { ...state, items: [...state.items, payload] };
      }
    },

    removeItem: (state, action) => {
      // By immer lib with use of mutating
      const foundItem = state.items.find(
        (item) => item.title === action.payload.title
      );
      if (foundItem?.stackCount! > 1) {
        foundItem!.stackCount! -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.title !== action.payload.title
        );
      }
    },

    removeStack: (state, action) => {},
  },
});

export const { addItem, removeItem } = cartReducer.actions;
export const reducer = cartReducer.reducer;
