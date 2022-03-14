import User from "./User.js";
import Card from "../UI/Card/Card";
import styles from "./UserList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul >
        {props.users.map((user) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            age={user.age}
          ></User>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
