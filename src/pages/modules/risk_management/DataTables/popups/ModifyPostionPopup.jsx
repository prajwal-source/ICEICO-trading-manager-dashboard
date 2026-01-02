import { X } from "lucide-react";
import CustomPopup from "../../../../../utils/CustomPopup";

export default function ModifyPositionPopup({ isOpen, onClose }) {
  return (
    <CustomPopup
      isOpen={isOpen}
      width="520px"
      draggable
      dragHandleSelector=".popup-header"
    >
      {/* ROOT */}
      <div className="bg-white border rounded-md shadow-xl text-sm">

        {/* Header (Drag Handle) */}
        <div className="popup-header flex justify-between items-center px-4 py-2 border-b bg-[#f7f6f2] ">
          <h2 className="font-semibold">Modify position #114338</h2>
          <X
            size={18}
            className="cursor-pointer hover:text-red-500"
            onClick={onClose}
          />
        </div>

        {/* Instrument */}
        <div className="px-4 py-2 font-medium">
          <span className="text-yellow-600">GOLD</span>{" "}
          <span className="text-green-600">▲ Buy</span>
        </div>

        {/* Form */}
        <div className="px-4 py-2 space-y-3">

          {/* Row 1 */}
          <div className="grid grid-cols-3 gap-3">
            <Field label="Volume (lot)">
              <input
                defaultValue="0.01"
                className="w-full border rounded px-2 py-1 text-sm
                           focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </Field>

            <Field label="Open price">
              <input
                defaultValue="4350.26"
                className="w-full border rounded px-2 py-1 text-sm
                           focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </Field>

            <Field label="Open date">
              <input
                defaultValue="02-01-2026"
                className="w-full border rounded px-2 py-1 text-sm
                           focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </Field>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-3">
            <Field label="Swap (USD)">
              <input
                defaultValue="0.00"
                className="w-full border rounded px-2 py-1 text-sm
                           focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </Field>

            <Field label="Commission (USD)">
              <input
                defaultValue="0.50"
                className="w-full border rounded px-2 py-1 text-sm
                           focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </Field>

            <Field label="Open time">
              <input
                defaultValue="03:30:54"
                className="w-full border rounded px-2 py-1 text-sm
                           focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </Field>
          </div>

          {/* Margin */}
          <div className="text-xs text-gray-600">
            Margin: <span className="font-medium">$ 17.40</span>
          </div>

          {/* Stops */}
          <div className="border-t pt-3">
            <div className="font-medium mb-2">Stops</div>

            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Take Profit</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Stop Loss</span>
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t flex justify-between items-center">
          <div>
            <span className="mr-4">
              Current price: <b>4,372.71</b>
            </span>
            <span>
              Profit: <b className="text-green-600">$ 21.95</b>
            </span>
          </div>

          <div className="flex gap-2">
            <button className="px-4 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600">
              Modify
            </button>
            <button
              className="px-4 py-1.5 border rounded hover:bg-gray-100"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>

      </div>
    </CustomPopup>
  );
}

/* Field wrapper */
function Field({ label, children }) {
  return (
    <div>
      <label className="block text-xs mb-1 text-gray-600">
        {label}
      </label>
      {children}
    </div>
  );
}
