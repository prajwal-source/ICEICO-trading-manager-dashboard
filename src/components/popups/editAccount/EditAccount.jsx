import { PersonStanding, UserPlus, X } from "lucide-react";
import CustomPopup from "../../../utils/CustomPopup";

export default function EditAccount({ isOpen, onClose }) {
    return (
        <CustomPopup
            isOpen={isOpen}
            width="800px"
            position={{ top: 84, left: 320 }}
            draggable
            dragHandleSelector=".popup-header"
        >
            {/* ROOT */}
            <div className="border h-full rounded border-gray-400 bg-[#f5f2e8] shadow-lg text-sm flex flex-col">

                {/* HEADER */}
                <div className="popup-header flex items-center justify-between bg-[#e7e5d5] px-2 py-1 border-b border-gray-400 ">
                    <div className="flex items-center text-xs gap-2 font-medium">
                        <UserPlus size={12} />
                        <span>Edit Account</span>
                    </div>
                    <X
                        size={18}
                        className="cursor-pointer hover:bg-red-600 hover:text-white rounded"
                        onClick={onClose}
                    />
                </div>

                {/* BODY (ONLY INPUTS SCROLL) */}
                <div className="p-1 max-h-[72vh] overflow-auto flex-1">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1">

                        {/* LEFT */}
                        <div className="md:col-span-2 border text-xs border-gray-400 p-0.5">
                            <h3 className="font-semibold mb-3">Registration information</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                                <Input label="Surname" />
                                <Input label="Name" />
                                <Input label="Patronymic" />
                                <Input label="Email" full />
                                <Input label="Country" />
                                <Input label="Region" />
                                <Input label="City" />
                                <Input label="Zip code" />
                                <Input label="Address" full />
                                <Textarea label="Comment" full />
                                <span>Password:<button className=" ml-2 border px-3 py-1 font-md hover:bg-gray-300 rounded bg-gray-200"
                                    onClick={() => alert("message...")}
                                >Modify</button></span>


                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="border text-xs border-gray-400 p-1">
                            <h3 className="font-semibold mb-1.5">Trading parameters</h3>

                            <div className="space-y-0.5 text-xs">
                                <Select label="Groups" options={["general (live)"]} />
                                <Select label="Leverage" options={["1:100"]} />
                                <Input label="Stop out" defaultValue="20" />
                                <Input label="Min deposit" defaultValue="0" />
                                <Input label="Max. orders" defaultValue="20" />
                                <Input label="Delay" defaultValue="1000" />
                                <Select label="Status" options={["Free"]} />
                                <Select label="Trading with robots" options={["Group priority"]} />

                                <div className="pt-0.5 space-y-1">
                                    <Checkbox label="Trade permission" checked />
                                    <Checkbox label="Show bonuses" />
                                    <Checkbox label="Spend bonuses" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER (FIXED) */}
                <div className="flex justify-end gap-3 mt-1 border-t p-1">
                    <button className="px-5 py-1.5 border rounded bg-white hover:bg-gray-100">
                        Edit
                    </button>
                    <button
                        onClick={onClose}
                        className="px-5 py-1.5 border rounded bg-white hover:bg-gray-100"
                    >
                        Close
                    </button>
                </div>

            </div>
        </CustomPopup>
    );
}

/* REUSABLE COMPONENTS */

const Input = ({ label, full, defaultValue }) => (
    <div className={full ? "md:col-span-2" : ""}>
        <label className="block text-xs mb-1">{label}:</label>
        <input
            defaultValue={defaultValue}
            className="w-full border rounded px-1 py-1 bg-white"
        />
    </div>
);

const Textarea = ({ label, full }) => (
    <div className={full ? "md:col-span-2" : ""}>
        <label className="block text-xs mb-1">{label}:</label>

        <textarea required className="w-full border rounded px-2 py-1 bg-white h-18" />
    </div>
);

const Select = ({ label, options }) => (
    <div>
        <label className="block text-sm mb-1">{label}:</label>
        <select className="w-full border rounded px-2 py-1 bg-white">
            {options.map((opt) => (
                <option key={opt}>{opt}</option>
            ))}
        </select>
    </div>
);

const Checkbox = ({ label, checked }) => (
    <label className="flex items-center gap-2 text-xs">
        <input type="checkbox" defaultChecked={checked} />
        {label}
    </label>
);