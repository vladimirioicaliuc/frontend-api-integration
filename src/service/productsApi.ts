import { OrderPayload, OrderResponse } from "../types/Order";
import { getRequest, postRequest } from "./api";
import { API_URL } from "../constants/env";
import { Product } from "../types/Product";

const getProducts = async (page: number = 0, pageSize: number, query?: string): Promise<Product[]> => {
  const url = `${API_URL}/articles`;

  const response = await getRequest(url, {
    page,
    pageSize,
    query,
  });

  return response;
};

const getProduct = async (productId: string): Promise<Product> => {
  const url = `${API_URL}/articles/${productId}`;

  const response = await getRequest(url, {});

  return response;
};

const submitOrder = async (order: OrderPayload): Promise<OrderResponse> => {
  const url = `${API_URL}/orders`;

  const response = await postRequest(url, { data: order });

  return response;
};

export { getProduct, getProducts, submitOrder };
