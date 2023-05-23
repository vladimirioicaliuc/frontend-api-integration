import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

export type OrderCompleteProps = {};

const OrderComplete: FunctionComponent<OrderCompleteProps> = () => {
  const { orderId } = useParams();
  return (
    <div className="container">
      <h3 data-testid="title">Thank you placing your order with us</h3>
      <div data-testid="orderId">Your order number is {orderId}</div>
    </div>
  );
};

export default OrderComplete;
