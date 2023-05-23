import { FormInputData } from "./Customer";

export type Order = {
  itemId: string;
  quantity: number;
  pricePerItem: number;
};

export type OrderResponse = {
  orderId: string;
};

export type OrderPayload = {
  customer: FormInputData;
  order: Order[];
};
