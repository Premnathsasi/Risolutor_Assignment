import ProductList from "./ProductList";
import classes from "./Products.module.css";
import { cartActions } from "../store/ProductSlice";
import { useDispatch } from "react-redux";

const productsArr = [
  {
    id: "1",
    title: "Shoe",
    price: 100,
    imageUrl:
      "https://github.com/codewithsadee/anon-ecommerce-website/blob/master/assets/images/products/1.jpg?raw=true",
    quantity: 1,
  },
  {
    id: "2",
    title: "Polo Tshirt",
    price: 50,
    imageUrl:
      "https://github.com/codewithsadee/anon-ecommerce-website/blob/master/assets/images/products/2.jpg?raw=true",
    quantity: 1,
  },
  {
    id: "3",
    title: "Cowboy hat",
    price: 70,
    imageUrl:
      "https://github.com/codewithsadee/anon-ecommerce-website/blob/master/assets/images/products/4.jpg?raw=true",
    quantity: 1,
  },
  {
    id: "4",
    title: "Woman T-shirt",
    price: 100,
    imageUrl:
      "https://github.com/codewithsadee/anon-ecommerce-website/blob/master/assets/images/products/clothes-1.jpg?raw=true",
    quantity: 1,
  },
  {
    id: "5",
    title: "Men's Shirt",
    price: 100,
    imageUrl:
      "https://github.com/codewithsadee/anon-ecommerce-website/blob/master/assets/images/products/jacket-1.jpg?raw=true",
    quantity: 1,
  },
  {
    id: "6",
    title: "Gold Earings",
    price: 50,
    imageUrl:
      "https://github.com/codewithsadee/anon-ecommerce-website/blob/master/assets/images/products/jewellery-1.jpg?raw=true",
    quantity: 1,
  },
  {
    id: "7",
    title: "Rolex Watch",
    price: 70,
    imageUrl:
      "https://github.com/codewithsadee/anon-ecommerce-website/blob/master/assets/images/products/watch-4.jpg?raw=true",
    quantity: 1,
  },
  {
    id: "8",
    title: "Sports Shoe",
    price: 100,
    imageUrl:
      "https://github.com/codewithsadee/anon-ecommerce-website/blob/master/assets/images/products/sports-5.jpg?raw=true",
    quantity: 1,
  },
];
const Products = () => {
  const dispatch = useDispatch();

  const addToCart = (e) => {
    const id = e.target.id;
    const item = productsArr.filter((item) => item.id === id)[0];
    dispatch(cartActions.addItem(item));
  };

  const lists = productsArr.map((item) => (
    <ProductList
      key={item.id}
      product={item}
      addToCart={addToCart}
      id={item.id}
    />
  ));
  return <div className={classes.productlist}>{lists}</div>;
};

export default Products;
