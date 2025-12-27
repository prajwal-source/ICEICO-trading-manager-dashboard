import { Plug, X } from "lucide-react";
import CustomPopup from "../../../utils/CustomPopup";
import { useState } from "react";

export default function SignInCard({ isOpen, onClose }) {
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
          <span>Sign in</span>
        </div>
        <X size={20} className="cursor-pointer mr-1 hover:bg-red-700 hover:text-white" onClick={onClose}/>
      </div>

      {/* Body */}
      <div className="p-4 space-y-3">

        {/* Login */}
        <div className="grid grid-cols-[80px_1fr] items-center gap-2">
          <label className="text-right">Login:</label>
          <input
            type="text"
            className="border border-gray-400 px-2 py-1 bg-white outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="grid grid-cols-[80px_1fr] items-center gap-2">
          <label className="text-right">Password:</label>
          <input
            type={show ? "text" : "password"}
            className="border border-gray-400 px-2 py-1 bg-white outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex items-center gap-6 ml-[80px]">
          <label className="flex items-center gap-1 cursor-pointer">
            <input type="checkbox" onChange={()=>setShow(!show)} className="accent-gray-600" />
            <span>Show</span>
          </label>

          <label className="flex items-center gap-1 cursor-pointer">
            <input type="checkbox" className="accent-gray-600" />
            <span>Save</span>
          </label>
        </div>

        <hr className="border-gray-400" />

        {/* Server */}
        <div className="grid grid-cols-[80px_1fr] items-center gap-2">
          <label className="text-right">Server:</label>
          <select className="border border-gray-400 px-2 py-1 bg-white">
            <option>Rockfieldtrade</option>
          </select>
        </div>
      </div>

      {/* Footer buttons */}
      <div className="flex justify-end gap-2 px-4 py-3 bg-[#e7e5d5] border-t border-gray-400">
        <button className="px-4 py-1 border border-gray-400 rounded bg-white hover:bg-amber-100">
          Sign in
        </button>
        <button className="px-4 py-1 border border-gray-400 rounded bg-white hover:bg-amber-100"
        onClick={onClose}>
          Close
        </button>
      </div>
    </div>
    </CustomPopup>
  );
}
