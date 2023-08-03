import { CartActionTypes } from "./types";

export const addItem = (itemName: string) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: itemName,
  };
};

export const removeItem = (itemName: string) => {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: itemName,
  };
};
