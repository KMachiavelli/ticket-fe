import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ticketService } from "../services/ticketService/ticket.service";
import { CartI } from "./types";
import { ClipLoader } from "react-spinners";
import { Spinner } from "../components/shared/spinner/Spinner";
import { SpinnerVariant } from "../components/shared/spinner/types";

const initialState: CartI = {
  content: {
    items: [],
    total: 0,
  },
  delivery: {
    isLoading: false,
    cost: 0,
  },
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
      const foundItemIndex = state.content.items.findIndex(
        (item) => item.title === payload.title
      );
      if (foundItemIndex >= 0) {
        const updatedItems = [...state.content.items];
        updatedItems[foundItemIndex] = {
          ...updatedItems[foundItemIndex],
          stackCount: updatedItems[foundItemIndex].stackCount + 1,
        };
        return { ...state, content: { ...state.content, items: updatedItems } };
      } else {
        return {
          ...state,
          content: {
            ...state.content,
            items: [...state.content.items, payload],
          },
        };
      }
    },

    removeItem: (state, action) => {
      // By immer lib with use of mutating
      const foundItem = state.content.items.find(
        (item) => item.title === action.payload.title
      );
      if (foundItem?.stackCount! > 1) {
        foundItem!.stackCount! -= 1;
      } else {
        state.content.items = state.content.items.filter(
          (item) => item.title !== action.payload.title
        );
      }
    },

    removeStack: (state, action) => {
      console.log(state, action);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchDeliveryCost.fulfilled, (state, action) => {
      state.delivery.cost = action.payload.deliveryCost;
      state.delivery.isLoading = false;
    });
    builder.addCase(fetchDeliveryCost.pending, (state) => {
      state.delivery.isLoading = true;
    });
    builder.addCase(fetchDeliveryCost.rejected, (state) => {
      // toast
    });
  },
});

export const { addItem, removeItem } = cartReducer.actions;
export const reducer = cartReducer.reducer;
