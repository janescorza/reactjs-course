import styles from "./User.module.css";
import Card from "../UI/Card/Card";

const User = (props) => {
  return (
    <li className={styles.user}>
        <p className={`${styles["test-color"]}`}>
          {props.name} ({props.age} years old)
        </p>
    </li>
  );
};

export default User;
