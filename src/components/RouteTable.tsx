import { Table } from "antd";

const columns = [
  {
    title: "Маршрут",
    dataIndex: "name",
    key: "name",
  },
];

const RouteTable = ({ routes, selectedRouteId, onRowClick }: any) => {
  //@ts-ignore
  //@ts-nocheck
  const data = routes.map((route: any, index: any) => ({
    key: index,
    name: `Маршрут №${index + 1}`,
  }));

  return (
    <Table
      className="sidebar"
      dataSource={data}
      columns={columns}
      //@ts-ignore
      //@ts-nocheck
      onRow={(record, rowIndex) => {
        return {
          onClick: () => onRowClick(rowIndex),
          className: rowIndex === selectedRouteId ? "selected-row" : "",
        };
      }}
    />
  );
};

export default RouteTable;
