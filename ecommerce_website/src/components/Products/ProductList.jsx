/* eslint-disable react/prop-types */
import classes from "./ProductList.module.css";
const ProductList = (props) => {
  return (
    <div className={classes.product}>
      <img src={props.product.imageUrl} alt={props.product.title} />
      <h2>{props.product.title}</h2>
      <p>Price: ${props.product.price}</p>
      <button
        className={classes.addtocartBtn}
        onClick={props.addToCart}
        id={props.id}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductList;
