import { Button } from "antd";
import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";
export const PreviousDemo = () => {
  const [count, setCount] = useState(0);

  const lastCount = usePrevious(count);

  return (
    <div>
      <h2>PreviousDemo</h2>
      <text>
        current value: {count} previousValue: {lastCount}{" "}
      </text>
      <Button onClick={() => setCount((count) => count + 1)}>+1</Button>
    </div>
  );
};
