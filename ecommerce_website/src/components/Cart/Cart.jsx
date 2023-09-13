/* eslint-disable react/prop-types */
import Modal from "../Modal/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/ProductSlice";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.carts.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);

  const addHandler = (e) => {
    const itemId = e.target.id;
    const item = cartItems.find((item) => item.id === itemId);
    dispatch(cartActions.addItem(item));
  };

  const removeHandler = (e) => {
    dispatch(cartActions.removeItem(e.target.id));
  };

  const purchaseHandler = () => {
    dispatch(cartActions.emptyCart());
  };

  const lists = (
    <ul className={classes.cartitems}>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          item={item}
          onAdd={addHandler}
          onRemove={removeHandler}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {lists}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.buttonalt} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button} onClick={purchaseHandler}>
          Purchase
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
