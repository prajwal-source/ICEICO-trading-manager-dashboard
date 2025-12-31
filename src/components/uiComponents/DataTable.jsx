import React, { useEffect, useState } from "react";

const DataTable = ({
  columns = [],
  data = [],

  /* Layout */
  withTopPadding = true,

  /* Pagination */
  showPagination,

  /* Row interaction : double click */
  enableRowDblClick = false,
  onRowDoubleClick,

  /* Row right click */
  enableRowRightClick = false,
  onRowRightClick,

  /* Height */
  tableHeight = "max-h-133.5",
}) => {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  /* ✅ Clear selection when clicking outside table */
  useEffect(() => {
    const clearSelection = () => setSelectedRowIndex(null);
    window.addEventListener("click", clearSelection);

    return () => window.removeEventListener("click", clearSelection);
  }, []);

  return (
    <div
      className={`w-full flex flex-col h-full ${withTopPadding ? "pt-[37px]" : ""
        }`}
    >
      {/* TABLE AREA */}
      <div
        className={`flex-1 overflow-y-auto ${showPagination ? tableHeight : ""
          }`}
        onClick={(e) => e.stopPropagation()} // prevent outside clear
      >
        <table className="w-full border-collapse hidden md:table">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="sticky top-0 z-20 bg-gray-200 text-start
                             text-[13px] px-1 py-1 border-x border-b font-semibold"
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

                /* ✅ LEFT CLICK → highlight row */
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedRowIndex(rowIndex);
                }}

                /* DOUBLE CLICK */
                onDoubleClick={() => {
                  if (enableRowDblClick && onRowDoubleClick) {
                    onRowDoubleClick(row, rowIndex);
                  }
                }}

                /* RIGHT CLICK */
                onContextMenu={(e) => {
                  if (!enableRowRightClick || !onRowRightClick) return;

                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedRowIndex(rowIndex); // highlight row
                  onRowRightClick(e, row, rowIndex);
                }}

                className={`
                  ${rowIndex === selectedRowIndex
                    ? "bg-amber-200 "
                    : rowIndex % 2 === 0
                      ? "bg-amber-50"
                      : "bg-white"
                  }
                  
                  transition-colors
                  border
                  cursor-pointer
                `}
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
