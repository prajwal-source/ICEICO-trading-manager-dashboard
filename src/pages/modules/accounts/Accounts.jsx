import React, { useState } from "react";
import DashboardToolbar from "../../../components/dashboard-toolbar/DashboardToolbar";
import DataTable from "../../../components/uiComponents/DataTable";
import Pagination from "../../../components/uiComponents/Pagination";
import EditAccount from "../../../components/popups/editAccount/EditAccount";
import { SquareChevronDown, SquareChevronUp } from "lucide-react";
import ContextMenu from "../../../components/contextMenu/ContextMenu";
import NewAccount from "../../../components/popups/new Account/NewAccount";
import AccountDetailsPopup from "../../../components/popups/accountDetails/AccountDetailsPopup";
import ReportAccount from "../../../components/popups/reportAccount/ReportAccount";


/* ===================== DUMMY DATA ===================== */
const data = [
  {
    group: "general (live)",
    number: 10001,
    name: "Rahul Sharma",
    leverage: "1:100",
    deposit: 15000,
    withdraw: 2000,
    bonus: "500/0",
    "in-out": 13000,
    deals: 1250.5,
    margin_levels: 75,
    spent: 100,
    profit: 0,
    margin: 3500,
    free: 9400,
  },
  {
    group: "general (demo)",
    number: 10002,
    name: "Anita Verma",
    leverage: "1:50",
    deposit: 8000,
    withdraw: 0,
    bonus: "0/0",
    "in-out": 8000,
    deals: -250.75,
    margin_levels: 0,
    spent: 0,
    profit: 0,
    margin: 0,
    free: 7749.25,
  },
  {
    group: "general (live)",
    number: 10003,
    name: "Suresh Kumar",
    leverage: "1:200",
    deposit: 25000,
    withdraw: 5000,
    bonus: "1000/200",
    "in-out": 20000,
    deals: 3450.9,
    margin_levels: 82,
    spent: 300,
    profit: 0,
    margin: 6000,
    free: 17150.9,
  },
  {
    group: "general (demo)",
    number: 10004,
    name: "Pooja Singh",
    leverage: "1:1",
    deposit: 10000,
    withdraw: 0,
    bonus: "0/0",
    "in-out": 10000,
    deals: 560,
    margin_levels: 0,
    spent: 0,
    profit: 0,
    margin: 0,
    free: 10560,
  },
  {
    group: "general (live)",
    number: 10005,
    name: "Amit Patel",
    leverage: "1:300",
    deposit: 30000,
    withdraw: 4000,
    bonus: "1200/300",
    "in-out": 26000,
    deals: 8450.75,
    margin_levels: 90,
    spent: 500,
    profit: 0,
    margin: 7000,
    free: 27450.75,
  },
  {
    group: "general (demo)",
    number: 10006,
    name: "Neha Joshi",
    leverage: "1:1",
    deposit: 6000,
    withdraw: 0,
    bonus: "0/0",
    "in-out": 6000,
    deals: -450,
    margin_levels: 0,
    spent: 0,
    profit: 0,
    margin: 0,
    free: 5550,
  },
  {
    group: "general (live)",
    number: 10007,
    name: "Vikas Mehta",
    leverage: "1:150",
    deposit: 18000,
    withdraw: 3000,
    bonus: "600/150",
    "in-out": 15000,
    deals: 2150.4,
    margin_levels: 70,
    spent: 200,
    profit: 0,
    margin: 4800,
    free: 14150.4,
  },
  {
    group: "general (demo)",
    number: 10008,
    name: "Kiran Rao",
    leverage: "1:1",
    deposit: 9000,
    withdraw: 0,
    bonus: "0/0",
    "in-out": 9000,
    deals: 1200,
    margin_levels: 0,
    spent: 0,
    profit: 0,
    margin: 0,
    free: 10200,
  },
  {
    group: "general (live)",
    number: 10009,
    name: "Manoj Yadav",
    leverage: "1:200",
    deposit: 22000,
    withdraw: 6000,
    bonus: "800/200",
    "in-out": 16000,
    deals: -650.25,
    margin_levels: 60,
    spent: 300,
    profit: 0,
    margin: 5200,
    free: 15449.75,
  },
  {
    group: "general (demo)",
    number: 10010,
    name: "Sneha Kulkarni",
    leverage: "1:1",
    deposit: 7000,
    withdraw: 0,
    bonus: "0/0",
    "in-out": 7000,
    deals: 300,
    margin_levels: 0,
    spent: 0,
    profit: 0,
    margin: 0,
    free: 7300,
  },
];
const tradeData = [
  {
    symbol: "EURUSD",
    number: 5001,
    volume: 1.2,
    openPrice: 1.0845,
    currentPrice: 1.0872,
    profit: 270,
  },
  {
    symbol: "GBPUSD",
    number: 5002,
    volume: 0.8,
    openPrice: 1.2741,
    currentPrice: 1.2698,
    profit: -344,
  },
];
/* ===================== TRADE TABLE ===================== */
const columnsForTrade = [
  { header: "Symbol", field: "symbol" },
  { header: "Number", field: "number" },
  { header: "Volume", field: "volume" },
  { header: "Open Price", field: "openPrice" },
  { header: "Current Price", field: "currentPrice" },
  { header: "Profit", field: "profit" },
];
/* ===================== COMPONENT ===================== */
function Accounts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [editAccount, setEditAccount] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [accountDetails, setAccountDetails] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [reportAccount,setReportAccount]=useState(false);
  /* ===================== CONTEXT MENU ===================== */
  const [menu, setMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    row: null,
  });

  const handleRightClick = (e, row) => {
    e.preventDefault();
    setMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      row,
    });
  };
/* ===================== COLUMNS ===================== */
  const columns = [
    { header: "Group", field: "group" },
    { header: "Number", field: "number" },
    {
      header: "Name",
      field: "name",
      render: (value, row) => (
        <span
          className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer "
          onClick={(e) => {
            e.stopPropagation();
            setSelectedRow(row);     // ✅ store clicked row
            setAccountDetails(true); // ✅ open popup
          }}
        >
          {value}
        </span>
      ),
    },

    {
      header: <span className="block text-right">Leverage</span>,
      field: "leverage",
      render: (value) => (
        <div className="text-right">{value}</div>
      ),
    },
    {
      header: <span className="block text-right">Deposit</span>,
      field: "deposit",
      render: (v) => <div className="text-right">{Number(v).toFixed(2)}</div>,
    },
    {
      header: <span className="block text-right">Withdraw</span>,
      field: "withdraw",
      render: (v) => <div className="text-right">{Number(v).toFixed(2)}</div>,
    },
    {
      header: <span className="block text-right">Bonus In/Out</span>,
      field: "bonus",
      render: (v) => <div className="text-right">{v}</div>,
    },
    {
      header: <span className="block text-right">In-Out</span>,
      field: "in-out",
      render: (v) => <div className="text-right">{Number(v).toFixed(2)}</div>,
    },
    {
      header: <span className="block text-right">Deals</span>,
      field: "deals",
      render: (v) => <div className="text-right">{Number(v).toFixed(2)}</div>,
    },
    {
      header: <span className="block text-right">Margin Levels</span>,
      field: "margin_levels",
      render: (v) => <div className="text-right">{Number(v).toFixed(2)}</div>,
    },
    {
      header: <span className="block text-right">Spent bonus</span>,
      field: "spent",
      render: (v) => <div className="text-right">{Number(v).toFixed(2)}</div>,
    },
    {
      header: <span className="block text-right">Profit</span>,
      field: "profit",
      render: (v) => <div className="text-right">{Number(v).toFixed(2)}</div>,
    },
    {
      header: <span className="block text-right">Margin</span>,
      field: "margin",
      render: (v) => <div className="text-right">{Number(v).toFixed(2)}</div>,
    },
    {
      header: <span className="block text-right">Free</span>,
      field: "free",
      render: (v) => <div className="text-right">{Number(v).toFixed(2)}</div>,
    },
  ];

  /* ===================== PAGINATION ===================== */
  const rowsPerPage = 20;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <>
      <DashboardToolbar
        onCreate={() => setCreateAccount(true)}
        onSearch={(text) => console.log("Search:", text)}
      />

      {/* ===================== MAIN TABLE ===================== */}
      <DataTable
        columns={columns}
        data={paginatedData}
        showPagination
        tableHeight={toggle ? "max-h-56" : "max-h-128"}
        enableRowDblClick
        onRowDoubleClick={() => setEditAccount(true)}
        enableRowRightClick
        onRowRightClick={handleRightClick}
      />

      {/* ===================== PAGINATION + TRADE ===================== */}
      <div className="fixed bottom-8.5 left-0 right-0 z-50 bg-white">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(data.length / rowsPerPage)}
          onPageChange={setCurrentPage}
        />

        <div
          className="border-b h-6 flex justify-between pr-3 bg-amber-100"
          onClick={() => setToggle(!toggle)}
        >
          <div className="text-xm pb-1 pl-2">Trade</div>
          {toggle ? (
            <SquareChevronDown size={25} />
          ) : (
            <SquareChevronUp size={25} />
          )}
        </div>

        {toggle && (
          <div className="h-73">
            <DataTable
              columns={columnsForTrade}
              data={tradeData}
              showPagination
              withTopPadding={false}
              tableHeight="max-h-73"
              enableRowDblClick
              onRowDoubleClick={() => setEditAccount(true)}
              enableRowRightClick
              onRowRightClick={handleRightClick}
            />
          </div>
        )}
      </div>

      {/* ===================== CONTEXT MENU ===================== */}
      <ContextMenu
        x={menu.x}
        y={menu.y}
        visible={menu.visible}
        onClose={() => setMenu({ ...menu, visible: false })}
        onCreateAccount={() => {
          setMenu({ ...menu, visible: false });
          setCreateAccount(true);
        }}
        onEdit={() => {
          setMenu({ ...menu, visible: false });
          setEditAccount(true);
        }}
        onReport={()=>{
           setMenu({ ...menu, visible: false });
           setReportAccount(true);
        }}
      />

      {/* ===================== MODALS ===================== */}
      <EditAccount
        isOpen={editAccount}
        onClose={() => setEditAccount(false)}
      />

      <NewAccount
        isOpen={createAccount}
        onClose={() => setCreateAccount(false)}
      />

      <ReportAccount
      
      isOpen={reportAccount}
      onClose={()=>setReportAccount(false)}
      />

      <AccountDetailsPopup
        isOpen={accountDetails}
        row={selectedRow}   // ✅ THIS IS REQUIRED
        onClose={() => {
          setAccountDetails(false);
          setSelectedRow(null);
        }}
      />

    </>
  );
}

export default Accounts;
