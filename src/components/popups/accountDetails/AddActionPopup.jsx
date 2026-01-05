import React, { useState } from "react";
import {
    X,
    ChevronDown,
    Calendar,
    Pencil
} from "lucide-react";
import CustomPopup from "../../../utils/CustomPopup";

export default function AddActionPopup({ isOpen, onClose, onSave }) {
    const [form, setForm] = useState({
        client: "Srirangan Aravindu",
        responsible: "sales_staff sales_staff",
        type: "Phone call",
        status: "New",
        actionDate: "05.01.2026 11:58",
        description: ""
    });

    const handleChange = (key, value) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <CustomPopup isOpen={isOpen} onClose={onClose} width="700px" >
            <div className="bg-white border rounded-lg shadow-md overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <h2 className="text-lg font-semibold">Add action</h2>
                    <button
                        onClick={onClose}
                        className="p-1 rounded hover:bg-red-600 hover:text-white"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-4 space-y-4">

                    {/* Client */}
                    <FormRow label="Client" required>
                        <InputWithIcon
                            value={form.client}
                            icon={<Pencil size={16} />}
                        />
                    </FormRow>

                    {/* Responsible */}
                    <FormRow label="Responsible" required>
                        <InputWithIcon
                            value={form.responsible}
                            icon={<Pencil size={16} />}
                        />
                    </FormRow>

                    {/* Type */}
                    <FormRow label="Type">
                        <SelectBox value={form.type} />
                    </FormRow>

                    {/* Status */}
                    <FormRow label="Status">
                        <SelectBox value={form.status} />
                    </FormRow>

                    {/* Action date */}
                    <FormRow label="Action date" required>
                        <InputWithIcon
                            value={form.actionDate}
                            icon={<Calendar size={16} />}
                        />
                    </FormRow>

                    {/* Description */}
                    <FormRow label="Description" required alignTop>
                        <textarea
                            value={form.description}
                            onChange={(e) =>
                                handleChange("description", e.target.value)
                            }
                            className="w-full h-28 resize-none border border-gray-300 rounded-md p-2 text-sm focus:outline-none"
                        />
                    </FormRow>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 px-4 py-3 border-t bg-gray-50">
                    <button
                        disabled
                        className="px-4 py-2 rounded text-sm bg-gray-200 text-gray-400 cursor-not-allowed"
                    >
                        Save
                    </button>

                    <button
                        disabled
                        className="px-4 py-2 rounded text-sm bg-gray-200 text-gray-400 cursor-not-allowed"
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

/* ---------- Reusable UI ---------- */

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

function InputWithIcon({ value, icon }) {
    return (
        <div className="flex items-center border border-gray-300 rounded-md px-2">
            <input
                value={value}
                readOnly
                className="flex-1 text-sm py-1.5 focus:outline-none bg-transparent"
            />
            <span className="text-gray-500">{icon}</span>
        </div>
    );
}

function SelectBox({ value }) {
    return (
        <div className="flex items-center border border-gray-300 rounded-md px-2">
            <input
                value={value}
                readOnly
                className="flex-1 text-sm py-1.5 focus:outline-none bg-transparent"
            />
            <ChevronDown size={18} className="text-gray-500" />
        </div>
    );
}
