/* eslint-disable react/prop-types */
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;
  return (
    <li className={classes.cartItem}>
      <div>
        <h2>{props.item.title}</h2>
      </div>
      <div>
        <img
          className={classes.image}
          src={props.item.imageUrl}
          alt="cartItem"
        />
      </div>

      <div>
        <span className={classes.price}>{price}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove} id={props.id}>
          −
        </button>
        <span className={classes.badge}>{props.item.quantity}</span>
        <button onClick={props.onAdd} id={props.id}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
