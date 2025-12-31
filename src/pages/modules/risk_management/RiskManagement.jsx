import React, { useState } from 'react'
import DashboardToolbar from '../../../components/dashboard-toolbar/DashboardToolbar';
import Account from './DataTables/Account';
import Symbols from './DataTables/Symbols';
import CoveragePosition from './DataTables/CoveragePosition';
import Position from './DataTables/Position';

function RiskManagement() {
  const [active, setActive] = useState("accounts");

  return (
    <div className="flex flex-col h-153 ">

      {/* Toolbar */}
      <DashboardToolbar

        filters={[
          {
            name: "Group",
            value: "all",
            onChange: (v) => console.log(v),
            options: [
              { label: "All", value: "all" },
              { label: "General (Live)", value: "live" },
              { label: "General (Demo)", value: "demo" },
            ],
          },
          {
            name: "Is Client",
            value: "all",
            onChange: (v) => console.log(v),
            options: [
              { label: "All", value: "all" },
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ],
          },
          {
            name: "Registration Date",
            value: "all",
            onChange: (v) => console.log(v),
            options: [
              { label: "All", value: "all" },
              { label: "December 2025", value: "dec" },
              { label: "November 2025", value: "nov" },
              { label: "October 2025", value: "oct" },
            ],
          },
          {
            name: "Demo/Live",
            value: "all",
            onChange: (v) => console.log(v),
            options: [
              { label: "All", value: "all" },
              { label: "Demo", value: "demo" },
              { label: "Live", value: "live" },
            ],
          },
        ]}
        onSearch={(text) => console.log("Search:", text)}
      />

      {/* Content Area */}
      <div className="flex flex-1   pt-9">

        {/* Sidebar */}
        <aside className="w-64 bg-gray-50 border-r border-slate-300 flex flex-col gap-1 p-0.5">
          {["accounts", "symbols", "coverage positions", "positions"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`border rounded px-4 py-2 text-sm transition
                ${active === item ? "bg-gray-200" : "bg-white hover:bg-amber-100"}
              `}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </aside>

        {/* Main Body (NO SCROLL) */}
        <main className="flex-1">
          {/* 
          <div className="fixed bottom-8.5 w-7xl  right-0  z-50 border">
            <Pagination
              currentPage={currentPage}
              // totalPages={Math.ceil(data.length / 10)} // example: 10 rows per page
              onPageChange={handlePageChange}
            />
          </div> */}
          <div className="fixed  overflow-auto">
            <div className={`${active === "accounts" ? "h-80.75 border-b" : "h-134"} w-7xl overflow-y-auto mt-px`}>
              {active === "accounts" && <Account />}
              {active === "symbols" && <Symbols />}
              {active === "coverage positions" && <CoveragePosition />}
              {active === "positions" && <Position />}
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}


export default RiskManagement;

