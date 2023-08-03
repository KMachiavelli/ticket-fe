import { TicketI } from "../services/ticketService/types";

export interface CartI {
  items: Array<Pick<TicketI, "title"> & { stackCount: number }>;
  deliveryCost: number;
  total: string;
}

export interface AuthI {}
