import Todo from "../models/todo";
import styles from "./TodoItem.module.css"


type TodoProps = {
  itemInfo: Todo;
  removeHandler: ()=>void;
};
const TodoItem = ({ itemInfo,removeHandler }: TodoProps) => {
    return (
            <li className={styles.item} onClick={removeHandler}>
              {itemInfo.text}
            </li>
          );
        };
export default TodoItem;
