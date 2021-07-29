import { Button } from "antd";
import { useEffect, useReducer } from "react";

export const LifecycleDemo = () => {
  const [, forceUpdate] = useReducer((s: number) => s + 1, 0);

  console.log("render");

  useEffect(() => {
    console.log("component did mount");

    return () => {
      console.log("component will unmount");
    };
  }, []);

  useEffect(() => {
    console.log("component did mount && update");
  });

  return (
    <>
      我是生命周期 demo 组件<Button onClick={forceUpdate}>渲染一下</Button>
    </>
  );
};
