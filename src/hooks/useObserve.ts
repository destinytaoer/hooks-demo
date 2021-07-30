import { useRef, useEffect } from "react";

export const useObserve = <T>(
  fn: () => void,
  deps: T[],
  runFirstTime: boolean = false
) => {
  const isMounted = useRef(false);
  useEffect(() => {
    if (!runFirstTime && !isMounted.current) {
      isMounted.current = true;
    } else {
      fn();
    }
  }, deps);
};
