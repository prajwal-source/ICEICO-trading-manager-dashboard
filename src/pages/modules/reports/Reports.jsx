import React, { useState } from 'react'
import DashboardToolbar from '../../../components/dashboard-toolbar/DashboardToolbar';
import AccountReportDatatable from './Datatables/AccountReportDatatable';
import GroupReportDatatable from './Datatables/GroupReportDatatable';
import Pagination from '../../../components/uiComponents/Pagination';
import TradeReportDatatable from './Datatables/TradeReportDatatable';

function Reports() {
  const [active, setActive] = useState("trade");

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">

      {/* Top Toolbar */}
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
            name: "period",
            value: "all",
            onChange: (v) => console.log(v),
            options: [
              { label: "All", value: "all" },
              { label: "December 2025", value: "all" },
              { label: "November 2025", value: "yes" },
              { label: "October 2025", value: "no" },
              { label: "Choose ", value: "no" },
            ],
          },
          {
            name: "pips",
            value: "all",
            onChange: (v) => console.log(v),
            options: [
              { label: "0", value: "all" },
              { label: "5", value: "dec" },
              { label: "10", value: "nov" },
              { label: "12", value: "oct" },
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
        onSearch={(e)=> console.log(e) }
              />

      {/* Content Area */}
      <div className="flex flex-1 overflow-hidden mt-9">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-50 border-r border-slate-300 flex flex-col gap-1 p-0.5">
          {["trade", "account", "group"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}

              className={`border rounded px-4 py-2 text-sm transition
                ${active === item
                  ? "bg-gray-200"
                  : "bg-white hover:bg-amber-100"
                }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)} Report

            </button>

          ))}
        </aside>

        {/* Main Body */}
        <main className="flex-1 overflow-hidden h-149.5 mt-0.25">
          
            {active === "trade" && <TradeReportDatatable />}
            {active === "account" && <AccountReportDatatable />}
            {active === "group" && <GroupReportDatatable />}

          
          <div className="fixed bottom-8.5 w-7xl  right-0 z-50 ">
            <Pagination
              currentPage={currentPage}
              // totalPages={Math.ceil(data.length / 10)} // example: 10 rows per page
              onPageChange={handlePageChange}
            />
          </div>
        </main>

      </div>
    </div>
  )
}

export default Reports;

