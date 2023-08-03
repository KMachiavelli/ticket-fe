import { requestConfig } from "./conf";

export const fetchData = () => {
  const putData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      ...requestConfig(true),
      method: "PUT",
      body: JSON.stringify(data),
    });
    return response;
  };

  const patchData = async (url = "", data = {}): Promise<any> => {
    const response = await fetch(url, {
      ...requestConfig(true),
      method: "PATCH",
      body: JSON.stringify(data),
    });
    return response;
  };

  const postData = async (url = "", data = {}): Promise<any> => {
    const response = await fetch(url, {
      ...requestConfig(true),
      method: "POST",
      body: JSON.stringify(data),
    });
    return response;
  };

  const getData = async (url = ""): Promise<any> => {
    const response = await fetch(url, {
      ...requestConfig(),
      method: "GET",
    });
    return response;
  };

  return {
    put: putData,
    get: getData,
    post: postData,
    patch: patchData,
  };
};
