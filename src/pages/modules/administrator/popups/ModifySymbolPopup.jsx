import { X } from "lucide-react";
import CustomPopup from "../../../../utils/CustomPopup";

const inputClass =
  "w-full border border-gray-400 bg-white px-2 py-[2px] text-sm " +
  "focus:outline-none focus:ring-1 focus:ring-blue-500";

export default function ModifySymbolPopup({ isOpen, onClose }) {
  return (
    <CustomPopup
      isOpen={isOpen}
      width="620px"
      draggable
      dragHandleSelector=".popup-header"
        position={{ top: 35, left: 450 }}
    >
      <div className="bg-[#f6f4ea] border shadow-md text-sm rounded">

        {/* HEADER */}
        <div className="popup-header flex justify-between items-center px-3 py-1 bg-[#e7e5d5] border-b ">
          <span className="font-medium">Modify symbol</span>
          <X
            size={16}
            className="cursor-pointer hover:bg-red-600 hover:text-white"
            onClick={onClose}
          />
        </div>

        {/* FORM */}
        <div className="px-4 py-1 grid grid-cols-2 gap-x-6 gap-y-0.5">

          <Field label="Quotes Feed">
            <input value="Basic" readOnly className={inputClass} />
          </Field>

          <Field label="Symbol group">
            <select className={inputClass}>
              <option>Currencies</option>
            </select>
          </Field>

          <Field label="Symbol">
            <input value="EURUSD" className={inputClass} />
          </Field>

          <Field label="Asset">
            <input className={inputClass} />
          </Field>

          <Field label="Description" full>
            <input value="Euro / US Dollar" className={inputClass} />
          </Field>

          <Field label="Swap short">
            <input value="0.68" className={inputClass} />
          </Field>

          <Field label="Spread type">
            <select className={inputClass}>
              <option>floating</option>
              <option>fixed</option>
            </select>
          </Field>

          <Field label="Swap long">
            <input value="-5.58" className={inputClass} />
          </Field>

          <Field label="Spread bid">
            <input value="6" className={inputClass} />
          </Field>

          <Field label="Stop level">
            <input value="13" className={inputClass} />
          </Field>

          <Field label="Spread ask">
            <input value="8" className={inputClass} />
          </Field>

          <Field label="Gap level">
            <input value="20" className={inputClass} />
          </Field>

          <Field label="Contract size">
            <input value="100000" className={inputClass} />
          </Field>

          <Field label="Percentage">
            <input value="100.0" className={inputClass} />
          </Field>

          <Field label="Margin currency">
            <input value="EUR" className={inputClass} />
          </Field>

          <Field label="Calculation type">
            <select className={inputClass}>
              <option>forex</option>
            </select>
          </Field>

          <Field label="Profit currency">
            <input value="USD" className={inputClass} />
          </Field>

          <Field label="Digits">
            <input value="5" className={inputClass} />
          </Field>

          <Field label="Delay">
            <input value="2000" className={inputClass} />
          </Field>

          <Field label="Hedged margin">
            <select className={inputClass}>
              <option>Off</option>
              <option>On</option>
            </select>
          </Field>

          <Field label="Commission">
            <input value="5" className={inputClass} />
          </Field>
        </div>

        {/* CHECKBOX */}
        <div className="px-4 py-1">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span>Trade forbidden</span>
          </label>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-2 px-4 py-1 border-t bg-[#e7e5d5]">
          <button className="px-5 py-1 border rounded bg-white hover:bg-gray-100">
            Modify
          </button>
          <button
            className="px-5 py-1 border rounded bg-white hover:bg-gray-100"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </CustomPopup>
  );
}

/* Field Component */
function Field({ label, children, full }) {
  return (
    <div className={full ? "col-span-2" : ""}>
      <label className="block text-xs mb-1 text-gray-700">
        {label}
      </label>
      {children}
    </div>
  );
}
