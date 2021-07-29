import { useCallback, useState } from "react";

export function useVisible(initValue: boolean = false) {
  const [visible, setVisible] = useState(initValue);

  const show = useCallback(() => {
    setVisible(true);
  }, []);
  const hide = useCallback(() => {
    setVisible(false);
  }, []);

  const toggle = useCallback(() => {
    setVisible((visible) => !visible);
  }, []);

  return { visible, show, hide, toggle };
}
