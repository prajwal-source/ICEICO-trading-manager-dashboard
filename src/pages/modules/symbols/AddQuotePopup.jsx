import { PersonStanding, UserPlus, X } from "lucide-react";
import CustomPopup from "../../../utils/CustomPopup";

export default function AddQuotePopup({ isOpen, onClose }) {
    return (
        <CustomPopup
            isOpen={isOpen}
            width="300px"
            draggable
            dragHandleSelector=".popup-header"
        >
            {/* ROOT */}
            <div className="border h-full rounded border-gray-400 bg-[#f5f2e8] shadow-lg text-sm flex flex-col">

                {/* HEADER */}
                <div className="popup-header flex items-center justify-between bg-[#e7e5d5] px-2 py-1 border-b border-gray-400 ">
                    <div className="flex items-center text-xs gap-2 font-medium">

                        <span>Add Quote</span>
                    </div>
                    <X
                        size={18}
                        className="cursor-pointer hover:bg-red-600 hover:text-white rounded"
                        onClick={onClose}
                    />
                </div>

                {/* BODY (ONLY INPUTS SCROLL) */}
                <div className="p-3 max-h-[72vh] overflow-auto flex-1">

                    <div className="text-sm mb-1" >Symbol : </div>
                    <select className="bg-white border border-gray-400 rounded px-1 text-xs">
                        <option>Java</option>
                        <option>Spring Boot</option>
                        <option>React</option>
                    </select>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        <div>
                            <div className="mb-0.5">Bid :</div>
                            <input className="bg-white border w-full border-gray-400 rounded px-2 py-0.5 text-xs" type="number" />

                        </div>
                        <div>

                            <div className="mb-0.5">Ask : </div>
                            <input className="bg-white border w-full border-gray-400 rounded px-2 py-0.5 text-xs" type="number" />

                        </div>
                    </div>

                </div>
                {/* FOOTER (FIXED) */}
                <div className="flex justify-center gap-3 mb-1 border-t border-t-gray-500 p-1">
                    <button className="px-4 py-0.5 border border-gray-500 rounded bg-white hover:bg-gray-100">
                        Add
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-0.5 border border-gray-500 rounded bg-white hover:bg-gray-100"
                    >
                        Close
                    </button>
                </div>

            </div>
        </CustomPopup>
    );
}
