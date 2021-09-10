import { useState, useCallback, useMemo } from "react";

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
  //=> 另外一种 api 设计
  // const handlers = useMemo(() => {
  //   return {
  //     show: () => setVisible(true),
  //     hide: () => setVisible(false),
  //     toggle: () => setVisible((visible) => !visible)
  //   };
  // }, []);

  // return [visible, handlers];
}
