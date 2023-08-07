import { ENDPOINTS } from "../../xhr/conf";
import { fetchData } from "../../xhr/fetchData";

const { get } = fetchData();

export const getUserData = () => {
  return get(ENDPOINTS.user.account);
};
