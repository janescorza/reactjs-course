import { Fragment } from "react";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <Fragment>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A House</Link>
        </li>
        <li>
          <Link to="/products/p3">A Carper</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Welcome;
