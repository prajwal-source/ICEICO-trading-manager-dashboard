import React, { useState } from "react";
import { MdSettings } from "react-icons/md";
import SettingPopup from "../popups/setting/SettingPopup";

const Pagination = ({
    currentPage = 1,
    totalPages = 2,
    onPageChange,
}) => {
    const [settingPopup, setSettingPopup] = useState(false);

    const handlePrev = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <div className="flex items-center justify-between px-2 py-0.5 border bg-[#e4e3cf] text-sm">

            {/* LEFT */}
            <div className="flex items-center gap-2">
                <span className="font-medium">Show</span>
                <select className="border rounded text-[13px] px-2 py-0.5 bg-white">
                    <option>50</option>
                    <option>100</option>
                    <option>250</option>
                    <option>500</option>
                </select>
                <span className="whitespace-nowrap">
                    Total accounts: <b>396</b>
                </span>


                <div className="flex ml-4 items-center gap-2 text-[12px]">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className={`px-2 py-0.5 border rounded ${currentPage === 1 ? "bg-gray-200 cursor-not-allowed" : "bg-white hover:bg-gray-100"} `} >
                        Prev
                    </button>
                    <div className="flex gap-1">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => onPageChange(index + 1)}
                                className={`px-2 py-0.5 rounded border ${currentPage === index + 1 ? "bg-amber-200 font-semibold" : "bg-white hover:bg-amber-100"}`} >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`px-2 py-0.5 border rounded ${currentPage === totalPages ? "bg-gray-200 cursor-not-allowed" : "bg-white hover:bg-gray-100"} `}>
                        Next
                    </button>
                </div>
            </div>
            {/* RIGHT */}
            <div
                className="border bg-white hover:bg-gray-100 p-1.5 rounded cursor-pointer"
                onClick={() => setSettingPopup(true)}
            >
                <MdSettings size={18} />
            </div>

            <SettingPopup
                isOpen={settingPopup}
                onClose={() => setSettingPopup(false)}
            />
        </div>
    );
};

export default Pagination;
