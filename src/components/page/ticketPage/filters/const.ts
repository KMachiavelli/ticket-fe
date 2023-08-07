import { SortOptions } from "./types";

export const DEFAULT_INPUTS_VALUES = {
  title: "",
  distributor: "",
  date: "",
  minPrice: 0,
  maxPrice: 1000,
  sortOrder: SortOptions.PRICE,
};

export const SORT_OPTIONS = Object.entries({
  price: SortOptions.PRICE,
  title: SortOptions.TITLE,
});

export const DISTRIBUTOR_OPTIONS = Object.entries({
  unspecified: "",
  D1: "D1",
  D2: "D2",
  D3: "D3",
});
