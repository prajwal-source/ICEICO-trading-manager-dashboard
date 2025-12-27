import { MessageSquare, X } from "lucide-react";
import CustomPopup from "../../../utils/CustomPopup";

export default function FeedbackCard({ isOpen, onClose }) {
  return (
    <CustomPopup
      isOpen={isOpen}
      width="400px"
      position={{ top: 170, left: 550 }}
      draggable
      dragHandleSelector=".popup-header"
    >
      <div className="border border-gray-400 bg-[#f3f1e3] rounded shadow-md text-sm">

        {/* Header */}
        <div className="popup-header flex items-center justify-between bg-[#e7e5d5] px-2 py-1 border-b border-gray-400 ">
          <div className="flex items-center gap-2 font-medium">
            <MessageSquare size={18} />
            <span>Feedback</span>
          </div>
          <X
            size={18}
            className="cursor-pointer hover:bg-red-600 hover:text-white rounded"
            onClick={onClose}
          />
        </div>

        {/* Body */}
        <div className="bg-white p-4">
          <input
            type="text"
            placeholder="Subject"
            className="w-full border bg-white rounded border-[#d9c2a3] px-3 py-2 mb-3 outline-none"
          />

          <textarea
            rows={5}
            placeholder="Tell us about your  suggestions or issues you have encountered with the UTIP Manager"
            className="w-full border rounded bg-white border-[#d9c2a3] px-3 py-2 resize-none outline-none"
          />

          <p className="text-xs text-gray-600 mt-2">
            Attach up to 5 files, maximum 10 mb per upload (*.png, *.gif, *.bmp, *.jpg, *.jpeg)
          </p>

          {/* Upload */}
          <label
            htmlFor="fileUpload"
            className="mt-2 w-11 h-11 border rounded border-gray-400 flex items-center justify-center cursor-pointer text-gray-500 text-xl"
          >
            +
          </label>
          <input id="fileUpload" type="file" multiple className="hidden" />
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-4 py-3 bg-[#e7e5d5] border-t border-gray-400">
          <button
            
            className="px-4 py-1 border rounded border-gray-400 bg-white  cursor-not-allowed"
          >
            Send
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1 border rounded border-gray-400 bg-white hover:bg-amber-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </CustomPopup>
  );
}
