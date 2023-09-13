import Products from "./components/Products/Products";
import Header from "./components/Header";
import Cart from "./components/Cart/Cart";
import "./App.css";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      <Header onShowCart={showCartHandler} />
      <Products />
      {showCart && <Cart onClose={hideCartHandler} />}
    </>
  );
}

export default App;
