/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import classes from "./Header.module.css";

const Header = (props) => {
  const cartItems = useSelector((state) => state.carts.items);
  const noOfItems = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <nav className={classes.navbar}>
      <div className={classes.title}>
        <h1>React Shop</h1>
      </div>
      <div className={classes.cart}>
        <button onClick={props.onShowCart}>
          <FontAwesomeIcon icon={faCartShopping} />
          Cart <span className={classes.badge}>{noOfItems}</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
