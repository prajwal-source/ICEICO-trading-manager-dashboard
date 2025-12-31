import React, { useState } from "react";
import Pagination from "./Pagination";

const DataTable = ({
  columns = [],
  data = [],
  /* Layout */
  withTopPadding = true,

  /* Pagination */
  showPagination,

  /* Row interaction */
  enableRowDblClick = false,
  onRowDoubleClick,

  /* NEW */
  tableHeight = "max-h-133.5", // default height
}) => {
  return (
    <div
      className={`w-full flex flex-col h-full ${withTopPadding ? "pt-[37px]" : ""
        }`}
    >
      {/* TABLE AREA */}
      <div
        className={`flex-1 overflow-y-auto ${showPagination ? tableHeight : ""
          }`}
      >
        <table className="w-full border-collapse hidden md:table">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="sticky top-0 z-20 bg-gray-200 text-start text-[13px] px-1 py-1 border-x border-b font-semibold"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onDoubleClick={() => {
                  if (enableRowDblClick && onRowDoubleClick) {
                    onRowDoubleClick(row, rowIndex);
                  }
                }}
                className={`${rowIndex % 2 === 0 ? "bg-amber-50" : "bg-white"
                  } hover:bg-amber-100 transition-colors border`}
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-1 py-1 font-medium border-r text-[12px]"
                  >
                    {typeof col.render === "function"
                      ? col.render(row[col.field], row)
                      : row[col.field]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default DataTable;
