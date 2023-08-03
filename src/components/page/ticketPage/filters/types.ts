import { TicketI } from "../../../../services/ticketService/types";

export interface FormInputI
  extends Pick<
    TicketI,
    FormInputs.DATE | FormInputs.DISTRIBUTOR | FormInputs.TITLE
  > {
  [FormInputs.PRICE_RANGE]: [number, number];
}

export enum FormInputs {
  DATE = "date",
  DISTRIBUTOR = "distributor",
  TITLE = "title",
  PRICE_RANGE = "priceRange",
}
