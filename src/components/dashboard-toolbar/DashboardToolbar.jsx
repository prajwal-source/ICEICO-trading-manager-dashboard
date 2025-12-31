import { Filter, UserPlus } from "lucide-react";
import { useState } from "react";
import FilterPopup from "../popups/filter/FilterPopup";

function DashboardToolbar({
    onCreate,
    filters = [],
    onSearch,
    searchPlaceholder = "Enter the keyword",
}) {
    
    const [filter,setFilter]=useState(false)

    return (
        <div className="w-full fixed bg-[#f5f2e8] border border-gray-800 px-2 py-1.25">
            <div className="flex items-center gap-3 text-sm">

                {/* Left action */}
                {onCreate && (
                    <button
                        onClick={onCreate}
                        className="flex cursor-pointer items-center text-[12px] font-bold gap-1 px-2 py-0.75 
                       border border-gray-400 bg-white rounded hover:bg-[#fff2c6]"
                    >
                        <UserPlus size={15} className="text-green-800 text-[12px] leading-none" />
                        New account
                    </button>
                )}

                {/* Filters (label outside) */}
                {filters.map((filter, index) => (
                    <div key={index} className="flex items-center gap-1">
                        <span className="font-bold text-xs whitespace-nowrap">
                            {filter.name}:
                        </span>

                        <select
                            value={filter.value}
                            onChange={(e) => filter.onChange(e.target.value)}
                            className="border border-gray-400 text-[12px] bg-white px-2 py-0.5 rounded"
                        >
                            {filter.options.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}

                {/* Spacer */}
                <div className="flex-1" />

                {/* Search */}
                {onSearch && (
                    <div className="flex items-center gap-2">
                        <Filter size={18} onClick={()=>setFilter(true)}  className="text-gray-800 text-xs leading-none" />

                        <input
                            type="text"
                            placeholder={searchPlaceholder}
                            className="border bg-white border-gray-400 px-2 text-xs py-1 rounded w-44"
                            onChange={(e) => onSearch(e.target.value)}
                        />
                         <FilterPopup isOpen={filter} onClose={()=>setFilter(false)}/>

                        <button
                            className="border text-xs border-gray-400 bg-[#e2e1d5] 
                         px-3 py-1 rounded hover:bg-gray-100"
                        >
                            Search
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DashboardToolbar;
