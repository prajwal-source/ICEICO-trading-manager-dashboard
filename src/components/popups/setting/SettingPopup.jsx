import { X } from "lucide-react";
import CustomPopup from "../../../utils/CustomPopup";
import { useState } from "react";
import { MdSettings } from "react-icons/md";

export default function SettingPopup({ isOpen, onClose }) {
  const [mode, setMode] = useState("automatic");

  return (
    <CustomPopup
      isOpen={isOpen}
      width="380px"
      position={{ top: 190, left: 540 }}
      draggable
      dragHandleSelector=".popup-header"
    >
      <div className="border border-gray-400 bg-[#f3f1e3] rounded shadow-md text-sm font-sans">

        {/* TITLE BAR */}
        <div className="flex popup-header items-center justify-between bg-[#e7e5d5] p-1 border-b border-gray-400">
          <div className="flex items-center gap-2 font-medium">
            <MdSettings size={18} />
            <span>Setting</span>
          </div>
          <X
            size={20}
            className="cursor-pointer mr-1 hover:bg-red-700 hover:text-white"
            onClick={onClose}
          />
        </div>

        {/* BODY */}
        <div className="p-4 space-y-4">

          <div className="font-semibold">
            Modes for handling data in the terminal:
          </div>

          {/* CLIENT */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="radio"
              name="mode"
              checked={mode === "client"}
              onChange={() => setMode("client")}
              className="mt-1"
            />
            <div>
              <div className="font-medium">Client</div>
              <div className="text-xs text-gray-600">
                All trading accounts are loaded from the server at once.
                Sorting and filtering is performed on your computer.
                Recommended for up to 50 000 accounts.
              </div>
            </div>
          </label>

          {/* SERVER */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="radio"
              name="mode"
              checked={mode === "server"}
              onChange={() => setMode("server")}
              className="mt-1"
            />
            <div>
              <div className="font-medium">Server</div>
              <div className="text-xs text-gray-600">
                Accounts are loaded partially from the server.
                Designed for fast processing of a large number of accounts.
              </div>
            </div>
          </label>

          {/* AUTOMATIC */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="radio"
              name="mode"
              checked={mode === "automatic"}
              onChange={() => setMode("automatic")}
              className="mt-1"
            />
            <div>
              <div className="font-medium">Automatic</div>
              <div className="text-xs text-gray-600">
                Uses client mode for less than 10 000 accounts.
                Uses server mode for larger data sets.
              </div>
            </div>
          </label>

        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 px-3 py-2 border-t border-gray-400 bg-[#e7e5d5]">
          <button className="px-5 py-1.5 border rounded bg-gray-200 text-gray-400 cursor-not-allowed">
            Save
          </button>
          <button
            onClick={onClose}
            className="px-5 py-1.5 border rounded bg-white hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>

      </div>
    </CustomPopup>
  );
}
