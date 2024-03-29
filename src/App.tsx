import { VisibleDemo } from "./demos/VisibleDemo";
import { AsyncDemo } from "./demos/AsyncDemo";
import { LifecycleDemo } from "./demos/LifecycleDemo";
import "./styles.css";
import { Button } from "antd";
import { useVisible } from "./hooks/useVisible";
import { ClosureDemo } from "./demos/ClosureDemo";
import { PreviousDemo } from "./demos/PreviousDemo";
import { RefDemo } from "./demos/RefDemo";
import ReducerDemo from "./demos/reducerDemo";

export default function App() {
  const { visible, toggle } = useVisible(false);

  return (
    <div className="App">
      <VisibleDemo />
      <AsyncDemo />
      <Button onClick={toggle}>渲染 or 挂载</Button>
      <br />
      {visible && <LifecycleDemo />}
      <ClosureDemo />
      <PreviousDemo />
      <ReducerDemo />
      <RefDemo />
    </div>
  );
}
