import React, { useState } from "react";
import { X, ChevronDown, Calendar, Pencil } from "lucide-react";
import CustomPopup from "../../../utils/CustomPopup";

export default function AddActionPopup({ isOpen, onClose, onSave }) {
    const [form, setForm] = useState({
        client: "Srirangan Aravindu",
        responsible: "sales_staff sales_staff",
        type: "Phone call",
        status: "New",
        actionDate: "05.01.2026 11:58",
        description: "",
    });

    const handleChange = (key, value) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <CustomPopup isOpen={isOpen} onClose={onClose} width="700px">
            <div className="bg-white border rounded-lg shadow-md overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <h2 className="text-lg font-semibold">Add action</h2>
                    <button onClick={onClose} className="p-1 rounded hover:bg-red-600 hover:text-white">
                        <X size={18} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-4 space-y-4">

                    <FormRow label="Client" required>
                        <InputWithIcon
                            value={form.client}
                            onChange={(e) => handleChange("client", e.target.value)}
                            icon={<Pencil size={16} />}
                        />
                    </FormRow>

                    <FormRow label="Responsible" required>
                        <InputWithIcon
                            value={form.responsible}
                            onChange={(e) => handleChange("responsible", e.target.value)}
                            icon={<Pencil size={16} />}
                        />
                    </FormRow>

                    <FormRow label="Type">
                        <SelectBox
                            value={form.type}
                            options={["Phone call", "Email", "Meeting"]}
                            onChange={(e) => handleChange("type", e.target.value)}
                        />
                    </FormRow>

                    <FormRow label="Status">
                        <SelectBox
                            value={form.status}
                            options={["New", "In Progress", "Completed"]}
                            onChange={(e) => handleChange("status", e.target.value)}
                        />
                    </FormRow>

                    <FormRow label="Action date" required>
                        <div className="relative">
                            <input
                                type="date"
                                value={form.actionDate}
                                onChange={(e) => handleChange("actionDate", e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-md focus:outline-none"
                            />
                            
                        </div>
                    </FormRow>


                    <FormRow label="Description" required alignTop>
                        <textarea
                            value={form.description}
                            onChange={(e) => handleChange("description", e.target.value)}
                            className="w-full h-28 resize-none border border-gray-300 rounded-md p-2 text-sm focus:outline-none"
                        />
                    </FormRow>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 px-4 py-3 border-t bg-gray-50">
                    <button
                        onClick={() => onSave?.(form)}
                        className="px-4 py-2 rounded text-sm bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Save
                    </button>
                    <button
                        onClick={() => onSave?.(form)}
                        className="px-4 py-2 rounded text-sm bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Save and create
                    </button>

                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded text-sm bg-gray-400 text-white hover:bg-gray-500"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </CustomPopup>
    );
}


function FormRow({ label, required, children, alignTop }) {
    return (
        <div className="grid grid-cols-3 gap-4 items-center">
            <label
                className={`text-sm text-gray-600 ${alignTop ? "self-start mt-2" : ""
                    }`}
            >
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>

            <div className="col-span-2">{children}</div>
        </div>
    );
}

function InputWithIcon({ value, onChange, icon }) {
    return (
        <div className="flex items-center border border-gray-300 rounded-md px-2">
            <input
                value={value}
                onChange={onChange}
                className="flex-1 text-sm py-1.5 focus:outline-none bg-transparent"
            />
            <span className="text-gray-500">{icon}</span>
        </div>
    );
}

function SelectBox({ value, options = [], onChange }) {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={onChange}
                className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm appearance-none focus:outline-none"
            >
                {options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
            <ChevronDown size={18} className="absolute right-2 top-2.5 text-gray-500 pointer-events-none" />
        </div>
    );
}

