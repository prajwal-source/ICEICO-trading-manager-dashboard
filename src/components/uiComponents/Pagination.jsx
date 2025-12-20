import React from "react";
import { MdSettings } from "react-icons/md";

const Pagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
}) => {
    const handlePrev = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <div className="flex items-center justify-between bg-[#e4e3cf] p-1 text-sm">

            {/* LEFT: Show + Count */}
            <div className="flex items-center gap-2">
                <span className="font-medium">Show</span>
                <select className="border rounded text-[13px] pr-2 bg-white">
                    <option>50</option>
                    <option>100</option>
                    <option>250</option>
                    <option>500</option>
                </select>
                <span>Total accounts: 396</span>
            </div>

            {/* Center: Pagination Controls */}
            <div className="flex items-center text-[12px] gap-2">
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className={`px-2 py-0.5 border rounded 
                      ${currentPage === 1 ? "bg-gray-200 cursor-not-allowed" : "bg-white hover:bg-gray-100"
                        }`}
                >
                    Prev
                </button>

                <div className="flex gap-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => onPageChange(index + 1)}
                            className={`px-2 py-0.5 rounded border
                ${currentPage === index + 1
                                    ? "bg-amber-100 border"
                                    : "bg-white hover:bg-amber-100"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`px-2 py-0.5 border rounded 
              ${currentPage === totalPages
                            ? "bg-gray-200 cursor-not-allowed"
                            : "bg-white hover:bg-gray-100"
                        }`}
                >
                    Next
                </button>
            </div>

            {/* RIGHT: Settings Icon */}
            <div className="border bg-white hover:bg-gray-100 p-1.5 mr-1 rounded cursor-pointer">
                <MdSettings size={18} />
            </div>

        </div>
    );
};

export default Pagination;
