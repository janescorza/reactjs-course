import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const products = [
  {
    id: 1,
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id:2,
    title: "Test2",
    price: 62,
    description: "This is a second product - amazing!",
  },
  {
    id:3,
    title: "Test3",
    price: 63,
    description: "This is a third product - amazing!",
  },
];

const Products = (props) => {

  const productsList = products.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
    />
  ));
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productsList}
      </ul>
    </section>
  );
};

export default Products;
