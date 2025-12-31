import React, { useState } from 'react'
import DashboardToolbar from '../../../components/dashboard-toolbar/DashboardToolbar';
import MonitorDatatable from './Datatables/MonitorDatatable';
import IpAccess from './Datatables/IpAccess';
import AdminSymbols from './Datatables/AdminSymbols';
import SymbolsGroup from './Datatables/SymbolsGroup';
import Holidays from './Datatables/Holidays';
import Groups from './Datatables/Groups';
import Journals from './Datatables/Journals';
import ArchivedAccount from './Datatables/ArchivedAccount';
import Managers from './Datatables/Managers';
import MainSettings from './Datatables/MainSettings';


function Administrator() {
  const [active, setActive] = useState("monitor");

  return (
      <div className="flex flex-col h-153 ">

      {/* Toolbar */}
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
      <div className="flex flex-1 overflow-hidden pt-9">

        {/* Sidebar */}
        <aside className="w-64 bg-gray-50 border-r border-slate-300 flex flex-col gap-1 p-0.5">
          {["monitor", "main setting", "ip access", "symbols","symbol group","holidays","groups","managers","journals","archived accounts"].map((item) => (
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
        <main className="flex-1 overflow-hidden mt-0.25">
          {active === "monitor" && <MonitorDatatable/>}
          {active === "main setting" && <MainSettings/>}
          {active === "ip access" && <IpAccess/>}
          {active === "symbols" && <AdminSymbols/> }
          {active === "symbol group" && <SymbolsGroup/>}
          {active === "holidays" && <Holidays/> }
          {active === "groups" && <Groups/>}
          {active === "managers" && <Managers/> }
          {active === "journals" && <Journals/> }
          {active === "archived accounts" && <ArchivedAccount/> }
        </main>

      </div>
    </div>
  );
}


export default Administrator;

