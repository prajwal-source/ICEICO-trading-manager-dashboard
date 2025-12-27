import { Plug, X } from "lucide-react";
import CustomPopup from "../../../utils/CustomPopup";
import { useState } from "react";

export default function HelpPopup({ isOpen, onClose }) {
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
          <Plug size={20}/>
          <span>Help</span>
        </div>
        <X size={20} className="cursor-pointer mr-1 hover:bg-red-700 hover:text-white" onClick={onClose}/>
      </div>

      {/* Body */}
      <div className="p-4 space-y-3">Help Popup</div>

      
    </div>
    </CustomPopup>
  );
}
