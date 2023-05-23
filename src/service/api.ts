import axios from "axios";

const getRequest = async (url: string, params: any) => {
  try {
    const response = await axios.get(url, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const postRequest = async (url: string, payload: any) => {
  try {
    const response = await axios.post(url, {
      data: payload.data,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getRequest, postRequest };
