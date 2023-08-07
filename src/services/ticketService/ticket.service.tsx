import { convertToUrlSearchParams } from "../../utils/service/getUrlSearchParams";
import { ENDPOINTS } from "../../xhr/conf";
import { fetchData } from "../../xhr/fetchData";
import {
  CartVerificationRequestTO,
  CartVerificationResponseTO,
  FilteredTicketsRequestTO,
  FilteredTicketsResponseTO,
} from "./types";

const { get, patch } = fetchData();

const getTickets = (
  filter: FilteredTicketsRequestTO
): Promise<FilteredTicketsResponseTO> => {
  const queryString = convertToUrlSearchParams(filter);
  return get(ENDPOINTS.tickets.root + queryString).then((response) =>
    response.json()
  );
};

const patchCart = (
  cart: CartVerificationRequestTO
): Promise<CartVerificationResponseTO> => {
  // the whole cart is not stored on back-end side, but needs verification and delivery cost update
  return patch(ENDPOINTS.tickets.cart, cart).then((response) =>
    response.json()
  );
};

export const ticketService = {
  patchCart,
  getTickets,
};
