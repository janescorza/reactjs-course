import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from "react-redux";

function App() {
  const cartStatus = useSelector((state) => state.cartStatus);

  return (
    <Layout>
      {cartStatus.cartDisplayed && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
