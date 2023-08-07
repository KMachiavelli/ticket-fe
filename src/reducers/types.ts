import { TicketI } from "../services/ticketService/types";
import { UserI } from "../services/userService/types";

export interface CartStateI {
  content: {
    items: Array<Pick<TicketI, "title" | "id"> & { stackCount: number }>;
    total: number;
    isLoading: boolean;
  };
  delivery: {
    cost: number;
    isLoading: boolean;
  };
}

export interface TicketsStateI {
  tickets: Array<TicketI>;
  isLoading: boolean;
}

export interface AuthStateI {
  user: Pick<UserI, "accessToken" | "username"> | null;
  isLoggedIn: boolean;
}
