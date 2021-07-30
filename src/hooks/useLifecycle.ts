import { useReducer, useEffect, useRef } from "react";

/** 模拟 componentDidMount 生命周期 */
export const useMount = (fn: () => void) => {
  useEffect(() => {
    fn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

/** 模拟 componentDidUpdate 生命周期 */
export const useUpdate = (fn: () => void) => {
  const isMounted = useRef(false);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      fn();
    }
  });
};

/** 模拟 componentWillUnmount 生命周期 */
export const useUnmount = (fn: () => void) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fn, []);
};

/**
 * 用于判断组件是否已经挂载
 * @returns fn: 调用获取是否挂载布尔值
 */
export const useIsMounted = () => {
  const ref = useRef(false);
  useEffect(() => {
    ref.current = true;
    return () => {
      ref.current = false;
    };
  }, []);
  return () => ref.current;
};

/**
 * 模拟 forceUpdate 方法, 强制更新组件
 * @returns 强制更新函数
 */
export const useForceUpdate = () => {
  const [, forceUpdate] = useReducer((s: number) => s + 1, 0);

  return forceUpdate;
};
