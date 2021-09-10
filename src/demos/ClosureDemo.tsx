import { Button, message } from "antd";
import { useCallback, useEffect, useState } from "react";

export const ClosureDemo = () => {
  const [count, setCount] = useState(0);

  const logCount = useCallback(() => {
    message.info(`count = ${count}`);
  }, []);

  useEffect(() => {
    logCount();
  });

  return (
    <>
      <h2>ClosureDemo</h2>
      <p>count: {count}</p>
      <Button onClick={() => setCount((count) => count + 1)}>+1</Button>
    </>
  );
};
