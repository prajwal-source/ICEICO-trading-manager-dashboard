import { X } from "lucide-react";
import CustomPopup from "../../../../utils/CustomPopup";
import DataTable from "../../../../components/uiComponents/DataTable";

const inputClass =
  "w-full border border-gray-400 bg-white px-2 py-[2px] text-sm " +
  "focus:outline-none focus:ring-1 focus:ring-blue-500";

const timeInputClass =
  "w-full border border-gray-300 px-1 py-[1px] text-sm " +
  "focus:outline-none focus:ring-1 focus:ring-blue-500";

/* Columns for trade mode */
const tradeModeColumns = [
  {
    header: "Day of week",
    field: "day",
  },
  {
    header: "Open time",
    field: "open",
    render: (value, row) => (
      <input defaultValue={value} className={timeInputClass} />
    ),
  },
  {
    header: "Close time",
    field: "close",
    render: (value, row) => (
      <input defaultValue={value} className={timeInputClass} />
    ),
  },
];

/* Data */
const tradeModeData = [
  { day: "Sunday", open: "00:00", close: "23:59" },
  { day: "Monday", open: "00:00", close: "23:59" },
  { day: "Tuesday", open: "00:00", close: "23:59" },
  { day: "Wednesday", open: "00:00", close: "23:59" },
  { day: "Thursday", open: "00:00", close: "23:59" },
  { day: "Friday", open: "00:00", close: "23:59" },
  { day: "Saturday", open: "00:00", close: "23:59" },
];

export default function ModifyGroupPopup({ isOpen, onClose }) {
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
          <span className="font-medium">Modify group</span>
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
            <input defaultValue="Crypto" className={inputClass} />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-xs mb-1">Description:</label>
            <input
              defaultValue="Cryptocurrency pairs"
              className={inputClass}
            />
          </div>

          {/* TRADE MODE */}
          <div>
            <label className="block text-xs mb-1">Trade mode:</label>

            <div className="border bg-white">
              <DataTable
                columns={tradeModeColumns}
                data={tradeModeData}
                withTopPadding={false}
                showPagination={false}
                tableHeight="max-h-[220px]"
              />
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-2 px-4 py-3 border-t bg-[#e7e5d5]">
          <button className="px-6 py-1 border rounded bg-white hover:bg-gray-100">
            Modify
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
