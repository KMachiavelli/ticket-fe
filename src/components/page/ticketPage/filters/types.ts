import { TicketI } from "../../../../services/ticketService/types";

export interface FormInputI
  extends Pick<
    TicketI,
    FormInputs.DATE | FormInputs.DISTRIBUTOR | FormInputs.TITLE
  > {
  [FormInputs.MIN_PRICE]: number;
  [FormInputs.MAX_PRICE]: number;
  [FormInputs.SORT_ORDER]: string;
}

export enum FormInputs {
  DATE = "date",
  DISTRIBUTOR = "distributor",
  TITLE = "title",
  MIN_PRICE = "minPrice",
  MAX_PRICE = "maxPrice",
  SORT_ORDER = "sortOrder",
}

export enum SortOptions {
  PRICE = "price",
  TITLE = "title",
}
