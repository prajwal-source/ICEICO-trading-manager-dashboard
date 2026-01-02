import { X } from "lucide-react";
import CustomPopup from "../../../../utils/CustomPopup";

const inputClass =
  "w-full h-[22px] border border-gray-400 bg-white px-2 text-sm " +
  "focus:outline-none focus:ring-1 focus:ring-blue-500";

const selectClass =
  "w-full h-[22px] border border-gray-400 bg-white px-1 text-sm " +
  "focus:outline-none focus:ring-1 focus:ring-blue-500";

export default function EditGroupPopup({ isOpen, onClose }) {
  return (
    <CustomPopup
      isOpen={isOpen}
      width="360px"
      draggable
      dragHandleSelector=".popup-header"
    >
      <div className="bg-[#f6f4ea] border shadow-md text-sm">

        {/* HEADER */}
        <div className="popup-header flex justify-between items-center px-3 py-1.5 bg-[#e7e5d5] border-b cursor-move">
          <span className="font-medium">Edit group</span>
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
            <input
              defaultValue="general (live)"
              className={inputClass}
            />
          </div>

          {/* CURRENCY & MIN LOT */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs mb-1">Currency:</label>
              <select className={selectClass}>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>

            <div>
              <label className="block text-xs mb-1">Minimum Lot:</label>
              <select className={selectClass}>
                <option>0.01</option>
                <option>0.1</option>
                <option>1.0</option>
              </select>
            </div>
          </div>

          {/* DEMO CHECKBOX */}
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span className="text-gray-500">Demo</span>
          </label>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-xs mb-1">Description:</label>
            <textarea
              defaultValue="dg"
              rows={3}
              className="w-full border border-gray-400 bg-white px-2 py-1 text-sm
                         focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* ROBOT TRADING */}
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" defaultChecked />
            <span>Trading with robots</span>
          </label>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-2 px-4 py-3 border-t bg-[#e7e5d5]">
          <button className="px-6 py-1 border rounded bg-white hover:bg-gray-100">
            Save
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
