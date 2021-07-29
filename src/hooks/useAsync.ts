import { message } from "antd";
import { useCallback, useState } from "react";

export const useAsync = <T>(
  asyncFn: (...args: any[]) => Promise<[Error | null, T]>,
  showTip: boolean = true
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  const run = useCallback(
    async (...args: any[]) => {
      setLoading(true);
      setError(null);

      const [err, data] = await asyncFn(...args);
      setLoading(false);
      if (err) {
        setError(err);
        if (showTip) {
          message.error(err.message);
        }
        return;
      }
      setData(data);
      // 这里应不应该将 asyncFn 作为依赖
    },
    [asyncFn, showTip]
  );

  return {
    run,
    loading,
    error,
    data
  };
};
