import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const cartCancelHandler = () => {
    setShowCart(false);
  };
  const cartShowHandler = () => {
    setShowCart(true);
  };
  return (
    <CartProvider>   
      {showCart && <Cart onCancel={cartCancelHandler} />}
        <Header onShowCart={cartShowHandler}/>
        <main>
          <Meals/>
        </main>
    </CartProvider>
  );
}

export default App;
