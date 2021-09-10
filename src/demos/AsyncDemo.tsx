import { Button, message, Spin, Table } from "antd";
import { useState, useEffect } from "react";
import { useAsync } from "../hooks/useAsync";

interface ListItem {
  id: string;
  name: string;
  age: number;
}

function fetchList() {
  return new Promise<[Error | null, ListItem[]]>((resolve) => {
    setTimeout(() => {
      resolve([
        null,
        [
          { id: "1", name: "aa", age: 18 },
          { id: "2", name: "bb", age: 60 }
        ]
      ]);
      // resolve([new Error("我裂开了"), []]);
    }, 1000);
  });
}

export const AsyncDemo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<ListItem[]>([]);

  const fetchData = () => {
    setLoading(true);
    fetchList()
      .then((res) => {
        const [err, data] = res;
        if (err) {
          setError(true);
          message.error(err.message);
          return;
        }
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
    // 这里要忽略依赖
  }, []);

  return (
    <>
      <h2>AsyncDemo</h2>
      <Button onClick={fetchData}>刷新列表</Button>
      <Spin spinning={loading}>
        <Table
          rowKey="id"
          dataSource={data ?? []}
          columns={[
            {
              dataIndex: "name",
              title: "名称"
            },
            {
              dataIndex: "age",
              title: "年龄"
            }
          ]}
        />
      </Spin>
    </>
  );
};
