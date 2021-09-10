import { useEffect, useRef } from "react";

/** 获取上一次的值 */
export const usePrevious = <T = any>(value: T) => {
  const previous = useRef<T>();

  useEffect(() => {
    previous.current = value;
  }, [value]);

  return previous.current;
};
