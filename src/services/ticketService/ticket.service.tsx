import { ENDPOINTS } from "../xhr/conf";
import { fetchData } from "../xhr/fetchData";

const { get } = fetchData();

const getDeliveryCost = () => {
  return get(ENDPOINTS.tickets.deliveryCost).then((result) => result.json());
};

export const ticketService = {
  getDeliveryCost,
};
