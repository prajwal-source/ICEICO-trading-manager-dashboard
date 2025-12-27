import { Info, Plug, X } from "lucide-react";
import CustomPopup from "../../../utils/CustomPopup";
import { useState } from "react";

export default function AccountInformation({ isOpen, onClose }) {
  const [show,setShow]=useState();
  return (

    <CustomPopup
      isOpen={isOpen}
      width="220px"
      position={{ top: 190, left: 540 }}
      draggable
      dragHandleSelector=".popup-header"
    >
    <div className="w-[380px] border border-gray-400 bg-[#f3f1e3] rounded shadow-md text-sm font-sans">

      {/* Title bar */}
      <div className="flex popup-header items-center justify-between  bg-[#e7e5d5] p-1 border-b border-gray-400">
        <div className="flex items-center gap-2 font-medium">
          <Info className="text-blue-600" size={20}/>
          <span>Account Information - 100</span>
        </div>
        <X size={20} className="cursor-pointer mr-1 hover:bg-red-700 hover:text-white" onClick={onClose}/>
      </div>

      {/* Body */}
      <div className="p-4 space-y-3">

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, vel et. Beatae atque fuga laboriosam culpa vel voluptatibus veritatis incidunt, minus vitae enim quidem voluptas iusto voluptates soluta quisquam sequi!
      </div>

      {/* Footer buttons */}
      <div className="flex justify-end gap-2 px-4 py-3 bg-[#e7e5d5] border-t border-gray-400">
       
        <button className="px-4 py-1 border border-gray-400 rounded bg-white hover:bg-amber-100"
        onClick={onClose}>
          Close
        </button>
      </div>
    </div>
    </CustomPopup>
  );
}
