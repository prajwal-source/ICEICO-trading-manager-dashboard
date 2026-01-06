import React, { useState } from "react";
import { Eye, Edit2, Trash2, ChevronLeft, ChevronRight, Wallet } from "lucide-react";
import CustomPopup from "../../../utils/CustomPopup";
import NotesPopup from "./NotesPopup";
import AddActionPopup from "./AddActionPopup";
import AddDescrition from "./AddDescritpion";

export default function AccountDetails({ row, isOpen, onClose }) {
    const [showPhone, setShowPhone] = useState(false);
    const [showNotes, setShowNotes] = useState(false);
    const [addAction,setAddAction]=useState(false);
    const [addDescription,setAddDescription]=useState(false);

    if (!row) return null;

    return (
        <CustomPopup
            isOpen={isOpen}
            onClose={onClose}
            width="900px"
            draggable
            position={{ top: 49, left: 120 }}

            dragHandleSelector=".popup-header"
        >
            <div className="popup-header h-155 w-7xl bg-gray-100 p-2 overflow-auto rounded border shadow-sm">
                <div className="px-2 mx-auto">
                    {/* Header */}
                    <div className=" bg-white rounded-lg shadow-sm px-4 py-2 mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-semibold">
                                {row.name} {row.lastName}
                            </h1>
                            <span className="text-sm  bg-gray-50 border border-gray300 py-1 px-2 rounded"> ID {row.number}</span>
                            <button className="px-3 py-1.5 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
                                Duplicates (1)
                            </button>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-800 flex align-center text-center 
                            border border-gray-300 px-2 bg-gray-50 py-1 gap-2"><Wallet size={18} />0.00 USD (10574)</span>
                            <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">
                                Sign into Trader's Room
                            </button>
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                onClick={onClose}
                            >
                                Close
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        {/* General Information */}
                        <Card title="General information">
                            <div>Title</div>
                            <InfoRow label="Last name" value={row.lastName} />
                            <InfoRow label="First name" value={row.name} />
                            <InfoRow label="Desk" value={row.desk} />
                            <InfoRow label="Responsible" value={row.responsible} />
                            <InfoRow label="Type" value={row.group} info />
                            <InfoRow label="Status" value={row.status} />
                            <InfoRow label="Created" value={row.createdAt} />
                            <InfoRow label="Affiliate ID" value={row.createdAt} />
                        </Card>

                        {/* Contact Information */}
                        <Card title="Contact information">
                            <InfoRow label="Country" value={row.country} />
                            <InfoRow label="Region" value={row.country} />
                            <InfoRow label="City" value={row.country} />
                            <InfoRow label="Postcode" value={row.country} />
                            <InfoRow label="Address" value={row.country} />
                            <InfoRow label="Email" value={row.email} link />
                            <div className="flex items-center justify-between py-2">
                                <span className="text-sm text-gray-600">Phone</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">
                                        {showPhone ? row.phone : row.phoneMasked}
                                    </span>
                                    <button
                                        onClick={() => setShowPhone(!showPhone)}
                                        className="p-1 hover:bg-gray-100 rounded"
                                    >
                                        <Eye className="w-4 h-4 text-gray-600" />
                                    </button>
                                </div>
                            </div>
                            <InfoRow label="Registration IP" value={row.registrationIp} />
                            <InfoRow label="Seen in traders" value={row.registrationIp} />
                            <InfoRow label="Seen in Web" value={row.registrationIp} />
                        </Card>

                        {/* Further Information */}
                        <Card title="Further information">
                            <InfoRow label="Origin" value={row.origin} />
                            <InfoRow label="Verification" value={row.verification} />
                            <InfoRow label="Cityzenship" value={row.source} />
                            <InfoRow label="Campaign Id" value={row.origin} />
                            <InfoRow label="Tag 1" value={row.verification} />
                            <InfoRow label="Tag 2" value={row.source} />
                            <InfoRow label="Passport" value={row.origin} />
                            <InfoRow label="Date of board" value={row.verification} />
                            <InfoRow label="Purpose" value={row.origin} />
                            <InfoRow label="Source" value={row.source} />
                        </Card>
                    </div>

                    {/* Bottom Section */}

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-2 items-stretch">


                        {/* Description → same width as General info */}
                        <Card title="Description" className="lg:col-span-1">
                            <div className="flex items-start justify-between gap-3">
                                <span className="text-sm text-gray-700 break-words">
                                    {row.description || "—"}
                                </span>

                                <div className="flex gap-1 shrink-0">
                                    <button className="p-1.5 rounded hover:bg-gray-100">
                                        <Edit2 className="w-4 h-4 text-gray-600" onClick={()=>setAddDescription(true)} />
                                    </button>
                                    <button className="p-1.5 rounded hover:bg-gray-100">
                                        <Trash2 className="w-4 h-4 text-gray-600" />
                                    </button>
                                </div>
                            </div>
                        </Card>

                        {/* Notes → Contact + Further (2 columns) */}
                        <Card title="Notes" className="lg:col-span-2">
                            <button className="text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 border px-3 py-1 rounded"
                            onClick={()=>setShowNotes(true)}
                            >
                                + Add
                            </button>
                        </Card>
                        <Card title="Actions" className="lg:col-span-2">
                            <button className="text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 border px-3 py-1 rounded"
                            onClick={()=>setAddAction(true)}
                            >
                                + Add
                            </button>
                        </Card>

                    </div>


                </div>
            </div>
            <NotesPopup
                isOpen={showNotes}
                onClose={() => setShowNotes(false)}
                onSave={(text) => console.log("Saved note:", text)}
            />
            <AddActionPopup
            isOpen={addAction}
            onClose={()=>setAddAction(false)}
            />

            <AddDescrition
            isOpen={addDescription}
            onClose={()=>setAddDescription(false)}
            
            />
        </CustomPopup>
    );
}

/* ---------- Reusable Components ---------- */

function Card({ title, children }) {
    return (
        <div className="bg-white rounded-lg shadow-sm px-4 py-2">
            <h2 className="text-lg font-semibold mb-4 border-b border-b-gray-400">{title}</h2>
            <div className="space-y-3">{children}</div>
        </div>
    );
}

function InfoRow({ label, value, link, info }) {
    return (
        <div className="flex items-center justify-between py-0.5">
            <label className="text-sm text-gray-600 flex items-center gap-1">
                {label}
                {info && (
                    <span className="text-gray-400 text-xs"></span>
                )}
            </label>
            <span
                className={`text-sm ${link ? "text-blue-500" : "text-gray-900"
                    } ${!value ? "text-gray-400" : ""}`}
            >
                {value || "—"}
            </span>

        </div>
    );
}