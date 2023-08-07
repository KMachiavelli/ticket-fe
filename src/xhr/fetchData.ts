import { notifyError } from "../utils/service/notifyHTTP";
import { requestConfig } from "./conf";

const patchedFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    // it is mostly for redux async handling action.error to be possible to be transfered

    const errorData = await response.json();
    notifyError(errorData.error); // toast error
    throw new Error(
      JSON.stringify({
        status: response.status,
        message: errorData.error,
      })
    );
  }
  return response;
};

export const fetchData = () => {
  const putData = async (url = "", data = {}) => {
    const response = await patchedFetch(url, {
      ...requestConfig(true),
      method: "PUT",
      body: JSON.stringify(data),
    });
    return response;
  };

  const patchData = async (url = "", data = {}): Promise<any> => {
    const response = await patchedFetch(url, {
      ...requestConfig(true),
      method: "PATCH",
      body: JSON.stringify(data),
    });
    return response;
  };

  const postData = async (url = "", data = {}): Promise<any> => {
    const response = await patchedFetch(url, {
      ...requestConfig(true),
      method: "POST",
      body: JSON.stringify(data),
    });
    return response;
  };

  const getData = async (url = ""): Promise<any> => {
    const response = await patchedFetch(url, {
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
