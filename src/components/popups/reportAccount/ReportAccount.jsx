import { useState } from "react";
import { X } from "lucide-react";
import CustomPopup from "../../../utils/CustomPopup";
import GeneralReport from "./tabs/GeneralReport";
import TradeOperations from "./tabs/TradeOperations";
import ExecutedOrders from "./tabs/ExecutedOrders";
import Deposits from "./tabs/Deposits";


const tabs = [
    "General report",
    "Trade operations",
    "Deposit",
    "Executed orders",
];

export default function ReportPopup({ isOpen, onClose }) {
    const [activeTab, setActiveTab] = useState("General report");

    const tabComponents = {
        "General report": <GeneralReport />,
        "Trade operations": <TradeOperations />,
        "Deposit": <Deposits />,
        "Executed orders": <ExecutedOrders />,
    };

    return (
        <CustomPopup
            isOpen={isOpen}
            onClose={onClose}
            width="1200px"
            draggable
            dragHandleSelector=".popup-header"
        >
            {/* ROOT */}
            <div className="h-full flex flex-col border  rounded bg-[#f5f2e8]">

                {/* HEADER */}
                <div className="popup-header flex items-center justify-between px-3 py-2 bg-gray-100 border-b border-gray-400">
                    <span className="text-sm font-medium"> Report : #1000</span>
                    <X
                        size={18}
                        onClick={onClose}
                        className="cursor-pointer hover:bg-red-600 hover:text-white rounded"
                    />
                </div>

                {/* TABS */}
                <div className="flex bg-[#CCCDC7]">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 mx-1 my-1 rounded border  text-xs border-r cursor-pointer border-gray-400
                ${activeTab === tab
                                    ? "bg-amber-100 font-semibold"
                                    : "hover:bg-amber-100 bg-gray-50"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
              

                {/* TAB CONTENT */}
                <div className="bg-white h-105  border-t overflow-hidden">
                    {tabComponents[activeTab]}
                </div>


                {/* FOOTER */}
                <div className="flex items-center justify-between px-3 py-2 bg-[#e7e5d5] border-t border-gray-400 text-xs">
                    <div>
                        Period:
                        <select className="ml-2 border border-gray-400 px-1 py-0.5 bg-white">
                            <option>All operations</option>
                            <option>Today</option>
                            <option>Last Week</option>
                            <option>Last Month</option>
                            <option>Last 3 Months</option>
                        </select>
                    </div>

                    <div className="flex gap-2">
                        <button className="popup-btn border p-2 rounded bg-gray-50 hover:bg-gray-100 font-semibold">Download</button>
                      
                        <button className="popup-btn border p-2 rounded bg-gray-50 hover:bg-gray-100 font-semibold" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </CustomPopup>
    );
}
