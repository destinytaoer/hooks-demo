import { Button } from "antd";
import { Component, forwardRef, useRef } from "react";
import { useMount, useForceUpdate } from "../hooks/useLifecycle";

// ref 函数组件生命周期共享的数据
export const RefDemo = () => {
  const count = useRef(0);
  let count1 = 0;
  const forceUpdate = useForceUpdate();

  useMount(() => {
    count.current = 1;
    count1 = 1;
  });

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>RefDemo</h2>
      <p>ref: {count.current}</p>
      <p>count1: {count1}</p>
      <Button onClick={forceUpdate}>重渲染</Button>
    </div>
  );
};

// ref 获取组件实例
const ChildFn = () => {
  return <div>child</div>;
};
class ChildClass extends Component {
  render() {
    return <div>child</div>;
  }
}
const Parent = () => {
  // const childRef = useRef();
  const childRef = useRef(null);

  return (
    <div>
      parent
      {/* <ChildFn ref={childRef} /> */}
      {/* <ChildClass ref={childRef} /> */}
    </div>
  );
};
