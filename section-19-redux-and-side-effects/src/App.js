import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import {useEffect} from 'react';

function App() {
  const cartStatus = useSelector((state) => state.cartStatus);
  const cart = useSelector((state) => state.cartItems);

  useEffect(()=>{

    fetch('https://react-js-course-b4b3c-default-rtdb.firebaseio.com/cart.json',
    {method: 'PUT', body: JSON.stringify(cart)})
  },[cart])

  return (
    <Layout>
      {cartStatus.cartDisplayed && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
