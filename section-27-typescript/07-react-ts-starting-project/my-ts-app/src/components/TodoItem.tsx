import Todo from "../models/todo";


type TodoProps = {
  itemInfo: Todo;
};
const TodoItem = ({ itemInfo }: TodoProps) => {
    return (
            <li>
              {itemInfo.text}
            </li>
          );
        };
export default TodoItem;
