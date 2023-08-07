import { CartStateI } from "../../reducers/types";

export interface TicketI {
  id: number;
  title: string;
  distributor: string;
  type: TicketType;
  event: string;
  date: string;
  quantity: number;
  price: number;
}

enum TicketType {
  CONCERT = "CONCERT",
  MOVIE = "MOVIE",
  THEATER = "THEATER",
  CONFERENCE = "CONFERENCE",
}

export interface CartVerificationRequestTO extends CartStateI {
  addedItemId: number;
}

export interface CartVerificationResponseTO {
  deliveryCost: number;
  total: number;
  addedItemTitle: string;
  addedItemId: number;
}

export interface FilteredTicketsRequestTO
  extends Omit<TicketI, "id" | "price" | "event" | "quantity" | "type"> {
  minPrice: number;
  maxPrice: number;
  sortOrder: string;
}

export interface FilteredTicketsResponseTO extends Array<TicketI> {}
