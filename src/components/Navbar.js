import React from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector((store) => store.cart.amount);

  return (
    <div className={styles.container}>
      <h1>Checkout</h1>
      <div className={styles.boxR}>
        <div className={styles.iconCircle}>
          <p>{amount}</p>
        </div>
        <FontAwesomeIcon className={styles.icon} icon={faBagShopping} />
      </div>
    </div>
  );
};

export default Navbar;
