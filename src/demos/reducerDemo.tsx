import { useWhatChanged } from "@simbathesailor/use-what-changed";
import { Button } from "antd";
import { useContext } from "react";
import { INCREMENT } from "../model/countReducer";
import { context, WithContainer } from "../model/reducerDemo";
import { ADD_TODO } from "../model/todoReducer";
const Count = ({ count }: { count: number }) => {
  return <span>{count}</span>;
};
const Todo = ({ todo }: { todo: string[] }) => {
  return (
    <div>
      {todo.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
};
const ReducerDemo = () => {
  const { count, todo, dispatch } = useContext(context);
  useWhatChanged([count, todo]);
  return (
    <div>
      <Count count={count} />
      <Todo todo={todo} />
      <Button onClick={() => dispatch({ type: INCREMENT })}>+1</Button>
      <Button onClick={() => dispatch({ type: ADD_TODO, payload: "haha" })}>
        add
      </Button>
    </div>
  );
};

export default WithContainer(ReducerDemo);
