import { Order } from "../types/Order";
import { ShoppingItem } from "./../types/Context";

const totalNumberOfItems = (shoppingItems: ShoppingItem[] = []): number => {
  const totalNumber = shoppingItems.reduce((acc, item) => acc + item.quantity, 0);

  return totalNumber;
};

const totalCostOfCart = (shoppingItems: ShoppingItem[] = []): number => {
  let total = shoppingItems.reduce((acc, item) => acc + item.quantity * item.product.price, 0);

  total = Math.round(total * 100) / 100;

  return total;
};

const generateOrderPayload = (shoppingItems: ShoppingItem[] = []): Order[] => {
  let payload: Order[] = [];

  shoppingItems.forEach((item: ShoppingItem) => {
    const order = {
      itemId: item.product.id,
      quantity: item.quantity,
      pricePerItem: item.product.price,
    };

    payload.push(order);
  });

  return payload;
};

export { totalNumberOfItems, totalCostOfCart, generateOrderPayload };
