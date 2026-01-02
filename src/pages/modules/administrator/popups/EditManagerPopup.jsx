import { X } from "lucide-react";
import CustomPopup from "../../../../utils/CustomPopup";

const inputClass =
  "w-full h-[22px] border border-gray-400 bg-white px-2 text-sm " +
  "focus:outline-none focus:ring-1 focus:ring-blue-500";

const buttonClass =
  "px-6 py-1 border rounded bg-white hover:bg-gray-100";

export default function EditManagerPopup({ isOpen, onClose }) {
  return (
    <CustomPopup
      isOpen={isOpen}
      width="520px"
      draggable
      dragHandleSelector=".popup-header"
    >
      <div className="bg-[#f6f4ea] border shadow-md text-sm">

        {/* HEADER */}
        <div className="popup-header flex justify-between items-center px-3 py-1.5 bg-[#e7e5d5] border-b cursor-move">
          <span className="font-medium">Edit manager - 100</span>
          <X
            size={16}
            className="cursor-pointer hover:text-red-600"
            onClick={onClose}
          />
        </div>

        {/* FORM */}
        <div className="px-4 py-3 space-y-3">

          {/* NAME + PASSWORD */}
          <div className="grid grid-cols-2 gap-4 items-end">
            <div>
              <label className="block text-xs mb-1">Name:</label>
              <input
                defaultValue="main broker"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-xs mb-1">Password:</label>
              <button className={`${inputClass} text-center`}>
                Modify
              </button>
            </div>
          </div>

          {/* RIGHTS + GROUPS */}
          <div className="grid grid-cols-2 gap-4">

            {/* RIGHTS */}
            <div>
              <label className="block text-xs mb-1">Rights</label>
              <div className="border bg-white h-[220px] overflow-y-auto p-2 space-y-1">
                {[
                  "View accounts",
                  "Create accounts",
                  "Modify accounts",
                  "Delete accounts",
                  "Trade",
                  "In-out money",
                  "Modify deposit operations",
                  "Delete deposit operations",
                  "Coverage",
                  "Modify symbols",
                  "Add operations",
                  "Modify operations",
                  "Delete operations",
                ].map((right) => (
                  <label
                    key={right}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input type="checkbox" defaultChecked />
                    <span>{right}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* GROUPS */}
            <div>
              <label className="block text-xs mb-1">Groups</label>
              <div className="border bg-white h-[220px] overflow-y-auto p-2 space-y-1">
                {[
                  "general (live)",
                  "general (demo)",
                ].map((group) => (
                  <label
                    key={group}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input type="checkbox" defaultChecked />
                    <span>{group}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-2 px-4 py-3 border-t bg-[#e7e5d5]">
          <button className={buttonClass}>Save</button>
          <button className={buttonClass} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </CustomPopup>
  );
}
