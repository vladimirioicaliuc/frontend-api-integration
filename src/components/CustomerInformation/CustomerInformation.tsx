import React, { FunctionComponent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { FormInputData } from "../../types/Customer";
import { OrderResponse } from "../../types/Order";
import { submitOrder } from "../../service/productsApi";
import { generateOrderPayload } from "../../utils/shoppingCart";
import Button, { ButtonType } from "../Button/Button";

import "./CustomerInformation.scss";

export type CustomerInformationProps = {};

const CustomerInformation: FunctionComponent<CustomerInformationProps> = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputData>();
  const navigate = useNavigate();
  const { shoppingItems, clearShoppingItems } = useCartContext();
  const onSubmit: SubmitHandler<FormInputData> = (data) => placeOrder(data);

  const placeOrder = (customerInfo: FormInputData) => {
    const order = generateOrderPayload(shoppingItems);

    const payload = {
      customer: customerInfo,
      order,
    };

    submitOrder(payload).then((res: OrderResponse) => {
      clearShoppingItems();
      navigate(`/order-complete/${res.orderId}`);
    });
  };

  return (
    <div className="customer-information">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-row">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            placeholder="John"
            className="form-control"
            type="text"
            {...register("firstName", { required: true, maxLength: 20 })}
          />

          {errors.firstName?.type === "required" && <div className="validation-error">First name is required</div>}
          {errors.firstName?.type === "maxLength" && (
            <div className="validation-error">First name must have a maximum of 20 characters</div>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            placeholder="Doe"
            className="form-control"
            type="text"
            {...register("lastName", { required: true, maxLength: 20 })}
          />

          {errors.lastName?.type === "required" && <div className="validation-error">Last name is required</div>}
          {errors.lastName?.type === "maxLength" && (
            <div className="validation-error">Last name must have a maximum of 20 characters</div>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="john@doe.com"
            className="form-control"
            type="text"
            {...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i })}
          />

          {errors.email?.type === "required" && <div className="validation-error">Email is required</div>}
          {errors.email?.type === "pattern" && (
            <div className="validation-error">Make sure it's a valid email address</div>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            placeholder="Street Main, 1234"
            className="form-control"
            type="text"
            {...register("address", { required: true, maxLength: 50 })}
          />

          {errors.address?.type === "required" && <div className="validation-error">Address is required</div>}
          {errors.address?.type === "maxLength" && (
            <div className="validation-error">Address must have a maximum of 50 characters</div>
          )}
        </div>

        <Button label="Proceed to checkout" onClick={() => false} type={ButtonType.PRIMARY} fullWidth={true}></Button>
      </form>
    </div>
  );
};

export default CustomerInformation;
