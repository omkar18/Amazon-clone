import React from "react";
import { useStateValue } from "./StateProvider";
import "./Payment.css";
import CheckoutProducts from "./CheckoutProducts";
export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout ({basket?.length} items)</h1>
        {/* payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angels, CA</p>
          </div>
        </div>
        {/* payment section - Review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and delivery</h3>
          </div>
          <div className="payment__items">
            {/* All the bsket items */}
            {basket.map((item) => (
              <CheckoutProducts
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* payment section - Payment Method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">{/* Stripe payment logic */}</div>
        </div>
      </div>
    </div>
  );
}
