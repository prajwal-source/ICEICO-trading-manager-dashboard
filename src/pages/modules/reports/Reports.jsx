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
  // const rowsPerPage = 20;
  // const startIndex = (currentPage - 1) * rowsPerPage;
  // const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);
  return (
    <div className="flex flex-col h-full overflow-hidden">

      {/* Top Toolbar */}
      <DashboardToolbar
        onCreate={() => console.log("Create account")}
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
        <main className="flex-1 overflow-hidden h-150">
          
            {active === "trade" && <TradeReportDatatable />}
            {active === "account" && <AccountReportDatatable />}
            {active === "group" && <GroupReportDatatable />}

          
          <div className="fixed bottom-8.5 w-7xl  right-0 z-50 border">
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

