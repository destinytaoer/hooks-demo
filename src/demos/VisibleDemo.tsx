import { useState } from "react";
import { useVisible } from "../hooks/useVisible";
import { Drawer, Button } from "antd";

export const VisibleDemo = () => {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  // const { visible, show, hide } = useVisible(false);

  return (
    <>
      <h2>VisibleDemo</h2>
      <Button onClick={show}>点击展示抽屉</Button>
      <Drawer visible={visible} onClose={hide}></Drawer>
    </>
  );
};
