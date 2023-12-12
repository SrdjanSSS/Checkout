import styles from "./Item.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../features/CartSlice";

const Item = ({ id, title, price, amount, img }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.imgInfoContainer}>
        <div className={styles.imgContainer}>
          <img src={img} alt=""></img>
        </div>
        <div className={styles.infoContainer}>
          <h5>{title}</h5>
          <h6>${price}</h6>
          <p onClick={() => dispatch(removeItem(id))}>remove</p>
        </div>
      </div>
      <div className={styles.amountContainer}>
        <FontAwesomeIcon
          onClick={() => dispatch(increase(id))}
          className={styles.icon}
          icon={faChevronUp}
        />
        <p>{amount}</p>
        <FontAwesomeIcon
          onClick={() => dispatch(decrease(id))}
          className={styles.icon}
          icon={faChevronDown}
        />
      </div>
    </div>
  );
};

export default Item;
