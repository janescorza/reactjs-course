import Todo from "../models/todo";
import styles from "./TodoItem.module.css"


type TodoProps = {
  itemInfo: Todo;
};
const TodoItem = ({ itemInfo }: TodoProps) => {
    return (
            <li className={styles.item}>
              {itemInfo.text}
            </li>
          );
        };
export default TodoItem;
