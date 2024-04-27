import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function CustomTable({ data, isLoading }) {
  const [header, setHeader] = useState(null);

  useEffect(() => {
    if (data?.length > 0) setHeader(Object?.keys(data[0]));
  }, [data]);

  const getColumnWidth = (field) => {
    let maxWidth = 100;
    data.forEach((item) => {
      const cellContent = item[field];
      if (cellContent && cellContent.length > maxWidth) {
        maxWidth = cellContent.length;
      }
    });
    return maxWidth * 8;
  };

  if (isLoading) return <h1>Loading ...</h1>;

  return (
    <div className="card">
      <DataTable value={data}>
        {header?.map((item) => (
          <Column
            field={item}
            header={item}
            style={{ width: `${getColumnWidth(item)}px` }}
          />
        ))}
      </DataTable>
    </div>
  );
}

export default CustomTable;
