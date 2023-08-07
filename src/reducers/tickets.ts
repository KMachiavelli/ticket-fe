import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ticketService } from "../services/ticketService/ticket.service";
import { FilteredTicketsRequestTO } from "../services/ticketService/types";
import { TicketsStateI } from "./types";

export const fetchGetTickets = createAsyncThunk(
  "tickets/fetchGetTickets",
  (filter: FilteredTicketsRequestTO) => {
    return ticketService.getTickets(filter);
  }
);

const initialState: TicketsStateI = {
  tickets: [],
  isLoading: false,
};

const ticketsReducer = createSlice({
  name: "tickets",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchGetTickets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tickets = action.payload;
    });
    builder.addCase(fetchGetTickets.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

const {} = ticketsReducer.actions;
export const reducer = ticketsReducer.reducer;
