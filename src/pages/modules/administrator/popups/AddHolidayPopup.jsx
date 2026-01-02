import { X, CheckSquare, Copy } from "lucide-react";
import CustomPopup from "../../../../utils/CustomPopup";

const inputClass =
  "w-full h-[22px] border border-gray-400 bg-white px-2 text-sm " +
  "focus:outline-none focus:ring-1 focus:ring-blue-500";

const dateInputClass =
  "h-[22px] border border-gray-400 bg-white px-2 text-sm " +
  "focus:outline-none focus:ring-1 focus:ring-blue-500";

export default function AddHolidayPopup({ isOpen, onClose }) {
  return (
    <CustomPopup
      isOpen={isOpen}
      width="480px"
      draggable
      dragHandleSelector=".popup-header"
    >
      <div className="bg-[#f6f4ea] border shadow-md text-sm">

        {/* HEADER */}
        <div className="popup-header flex justify-between items-center px-3 py-1.5 bg-[#e7e5d5] border-b cursor-move">
          <span className="font-medium">Add holiday</span>
          <X
            size={16}
            className="cursor-pointer hover:text-red-600"
            onClick={onClose}
          />
        </div>

        {/* FORM */}
        <div className="px-4 py-3 space-y-3">

          {/* NAME */}
          <div>
            <label className="block text-xs mb-1">Name:</label>
            <input className={inputClass} />
          </div>

          {/* DATE & TIME */}
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <label className="block text-xs mb-1">Start date:</label>
              <div className="flex gap-2">
                <input
                  type="date"
                  defaultValue="2017-06-28"
                  className={`${dateInputClass} w-[130px]`}
                />
                <input
                  type="time"
                  defaultValue="23:00"
                  className={`${dateInputClass} w-[80px]`}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs mb-1">End date:</label>
              <div className="flex gap-2">
                <input
                  type="date"
                  defaultValue="2017-06-28"
                  className={`${dateInputClass} w-[130px]`}
                />
                <input
                  type="time"
                  defaultValue="00:00"
                  className={`${dateInputClass} w-[80px]`}
                />
              </div>
            </div>
          </div>

          {/* GROUPS */}
          <div>
            <label className="block text-xs mb-1">Groups:</label>

            <div className="border bg-white flex h-[130px]">
              {/* GROUP LIST */}
              <div className="flex-1 p-2 space-y-1 overflow-y-auto">
                {[
                  "Currencies",
                  "Commodities",
                  "Crypto",
                  "Indices",
                  "US Stocks",
                ].map((group) => (
                  <label
                    key={group}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input type="checkbox" />
                    <span>{group}</span>
                  </label>
                ))}
              </div>

              {/* ICON BUTTONS */}
              <div className="border-l w-[34px] flex flex-col items-center gap-1 p-1 bg-[#f7f6f2]">
                <button className="w-full border bg-white p-1 hover:bg-gray-100">
                  <CheckSquare size={14} />
                </button>
                <button className="w-full border bg-white p-1 hover:bg-gray-100">
                  <Copy size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-2 px-4 py-3 border-t bg-[#e7e5d5]">
          <button className="px-6 py-1 border rounded bg-white hover:bg-gray-100">
            Add
          </button>
          <button
            className="px-6 py-1 border rounded bg-white hover:bg-gray-100"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </CustomPopup>
  );
}
