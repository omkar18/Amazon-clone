import React from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProducts from "./CheckoutProducts";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />

        <div>
          <h4>Hello {user?.email}</h4>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {/* Checkout products */}
          {basket.map((item) => (
            <CheckoutProducts
              id={item?.id}
              title={item?.title}
              image={item?.image}
              price={item?.price}
              rating={item?.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
