import { ReactElement } from "react";
import { TicketI } from "../services/ticketService/types";

export interface CartI {
  content: {
    items: Array<Pick<TicketI, "title"> & { stackCount: number }>;
    total: number;
  };
  delivery: {
    cost: number;
    isLoading: boolean;
  };
}

export interface AuthI {}
