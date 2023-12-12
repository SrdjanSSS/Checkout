import React from "react";
import styles from "./Checkout.module.css";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/CartSlice";

const Checkout = () => {
  const { cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>YOUR BAG</h1>
        <div className={styles.itemsContainer}>
          {cartItems.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>
        <div className={styles.totalContainer}>
          <div className={styles.totalBox}>
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className={styles.btnBox}>
            <button onClick={() => dispatch(clearCart())}>CLEAR CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
