import { X } from "lucide-react";
import CustomPopup from "../../../../../utils/CustomPopup";

export default function SymbolsPopup({ isOpen, onClose }) {
  return (
    <CustomPopup
      isOpen={isOpen}
      width="360px"
      draggable
      dragHandleSelector=".popup-header"
    >
      {/* ROOT */}
      <div className="border h-full rounded border-gray-400 bg-[#f5f2e8] shadow-lg text-sm flex flex-col">

        {/* HEADER */}
        <div className="popup-header flex items-center justify-between bg-[#e7e5d5] px-2 py-1 border-b border-gray-400">
          <span className="text-xs font-medium">Modify Symbol</span>
          <X
            size={16}
            className="cursor-pointer hover:bg-red-600 hover:text-white rounded"
            onClick={onClose}
          />
        </div>

        {/* BODY */}
        <div className="flex-1 p-4 space-y-2 overflow-auto">

          <div className="flex items-center">
            <label className="w-42.75 text-sm">Symbol:</label>
            <select className="flex-1 bg-white border border-gray-400 rounded px-2 py-1 text-xs">
              <option>GBPJPY</option>
              <option>GBPUSD</option>
              <option>USDCAD</option>
            </select>
          </div>

          <div className="flex items-center">
            <label className="w-44">Coverage name:</label>
            <input
              type="text"
              defaultValue="GBPJPY"
              className="flex-1 bg-white border border-gray-400 rounded px-2 py-1 text-xs"
            />
          </div>

          <div className="flex items-center">
            <label className="w-44">Swap short:</label>
            <input
              type="text"
              defaultValue="-2.22"
              className="flex-1 bg-white border border-gray-400 rounded px-2 py-1 text-xs"
            />
          </div>

          <div className="flex items-center">
            <label className="w-44">Swap long:</label>
            <input
              type="text"
              defaultValue="0.99"
              className="flex-1 bg-white border border-gray-400 rounded px-2 py-1 text-xs"
            />
          </div>

          <div className="flex items-center">
            <label className="w-44">Coverage stop level:</label>
            <input
              type="text"
              defaultValue="100"
              className="flex-1 bg-white border border-gray-400 rounded px-2 py-1 text-xs"
            />
          </div>

          <div className="flex items-center">
            <label className="w-42.75">Coverage Allowed:</label>
            <select className="flex-1 bg-white border border-blue-500 rounded px-2 py-1 text-xs">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

        </div>

        {/* FOOTER */}
        <div className="flex justify-center gap-3 pl-7 border-t border-gray-400 p-2 bg-[#e6e0c9]">
          <button className="px-6 py-1 border border-gray-500 rounded bg-white hover:bg-gray-100">
            Modify
          </button>
          <button
            onClick={onClose}
            className="px-6 py-1 border border-gray-500 rounded bg-white hover:bg-gray-100"
          >
            Close
          </button>
        </div>

      </div>
    </CustomPopup>
  );
}
