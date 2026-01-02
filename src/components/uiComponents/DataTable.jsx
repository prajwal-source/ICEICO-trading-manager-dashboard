import React, { useEffect, useState } from "react";
import { RotateCcw, Pencil, X, FilePenLine } from "lucide-react";

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

  enableRowRightClick = false,
  onRowRightClick,

  /* Height */
  tableHeight = "max-h-133.5",

  /* Restore column */
  showRestoreColumn = false,
  onRestoreClick,
  restoreIcon: RestoreIcon = RotateCcw,

  /* Edit column */
  showEditColumn = false,
  onEditClick,
  editIcon: EditIcon = Pencil,

  /* Delete column */
  showDeleteColumn = false,
  onDeleteClick,
  deleteIcon: DeleteIcon = X,
}) => {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  /* Clear selection when clicking outside */
  useEffect(() => {
    const clearSelection = () => setSelectedRowIndex(null);
    window.addEventListener("click", clearSelection);
    return () => window.removeEventListener("click", clearSelection);
  }, []);

  return (
    <div
      className={`w-full flex flex-col h-full ${
        withTopPadding ? "pt-[37px]" : ""
      }`}
    >
      {/* TABLE AREA */}
      <div
        className={`flex-1 overflow-y-auto ${
          showPagination ? tableHeight : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <table className="w-full border-collapse hidden md:table">
          {/* HEADER */}
          <thead>
            <tr>
              {showRestoreColumn && (
                <th className="sticky top-0 z-20 bg-gray-200 w-8 border-b border-x" />
              )}

              {columns.map((col, index) => (
                <th
                  key={index}
                  className="sticky top-0 z-20 bg-gray-200 text-start
                             text-[13px] px-1 py-1 border-x border-b font-semibold"
                >
                  {col.header}
                </th>
              ))}

              {showEditColumn && (
                <th className="sticky top-0 z-20 bg-gray-200 w-8 border-b border-x" />
              )}

              {showDeleteColumn && (
                <th className="sticky top-0 z-20 bg-gray-200 w-8 border-b border-x" />
              )}
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedRowIndex(rowIndex);
                }}
                onDoubleClick={() => {
                  if (enableRowDblClick && onRowDoubleClick) {
                    onRowDoubleClick(row, rowIndex);
                  }
                }}
                onContextMenu={(e) => {
                  if (!enableRowRightClick || !onRowRightClick) return;
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedRowIndex(rowIndex);
                  onRowRightClick(e, row, rowIndex);
                }}
                className={`
                  ${
                    rowIndex === selectedRowIndex
                      ? "bg-amber-200"
                      : rowIndex % 2 === 0
                      ? "bg-amber-50"
                      : "bg-white"
                  }
                  transition-colors border cursor-pointer
                `}
              >
                {/* RESTORE */}
                {showRestoreColumn && (
                  <td
                    className="w-8 text-center border-r"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRestoreClick?.(row, rowIndex);
                    }}
                  >
                    <RestoreIcon
                      size={15}
                      className="mx-auto text-green-600 hover:text-blue-600 cursor-pointer"
                    />
                  </td>
                )}

                {/* DATA */}
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

                {/* EDIT */}
                {showEditColumn && (
                  <td
                    className="w-8 text-center border-r"
                    onClick={(e) => {
                      e.stopPropagation();
                      onEditClick?.(row, rowIndex);
                    }}
                  >
                    <FilePenLine
                      size={15}
                      className="mx-auto text-green-600 hover:text-green-800 cursor-pointer"
                    />
                  </td>
                )}

                {/* DELETE */}
                {showDeleteColumn && (
                  <td
                    className="w-8 text-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteClick?.(row, rowIndex);
                    }}
                  >
                    <DeleteIcon
                      size={15}
                      className="mx-auto text-red-600 hover:text-red-800 cursor-pointer"
                    />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
