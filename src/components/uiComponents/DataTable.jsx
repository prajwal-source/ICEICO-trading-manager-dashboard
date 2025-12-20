import React, { useState } from "react";
import Pagination from "./Pagination";

const DataTable = ({ columns = [], data = [], actionLabel, onActionClick }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 8; // or calculate based on data length
    const [selectedRow, setSelectedRow] = useState(null);

    return (
        <div className="border pt-[37px] w-full">

            {/* Scroll Area */}
            <div className="max-h-133.5 overflow-y-auto">
                <table className="w-full border-collapse hidden md:table">
                    <thead>
                        <tr>
                            {columns.map((col, index) => (
                                <th
                                    key={index}
                                    className="sticky top-0 z-20 bg-gray-200 text-start text-[13px] px-1 py-1 border-r font-semibold"
                                >
                                    {col.header}
                                </th>
                            ))}

                            {actionLabel && (
                                <th className="sticky top-0 z-20 bg-gray-200 px-3 py-2">
                                    {actionLabel}
                                </th>
                            )}
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className={`${rowIndex % 2 === 0 ? "bg-white" : "bg-amber-50"
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

                                {actionLabel && (
                                    <td className="px-3 py-2 text-center">
                                        <button
                                            onClick={() => onActionClick(row)}
                                            className="text-red-600 text-xl hover:scale-110"
                                        >
                                            ✖
                                        </button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ✅ Sticky Pagination */}
            <div className="sticky bottom-0 z-20 bg-white border-t">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>

        </div>

    );
};

export default DataTable;
