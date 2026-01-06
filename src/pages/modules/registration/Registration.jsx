import React, { useState } from "react";
import DashboardToolbar from "../../../components/dashboard-toolbar/DashboardToolbar";
import DataTable from "../../../components/uiComponents/DataTable";
import Pagination from "../../../components/uiComponents/Pagination";
import EditAccount from "../../../components/popups/editAccount/EditAccount";
import ContextMenu from "../../../components/contextMenu/ContextMenu";
import NewAccount from "../../../components/popups/new Account/NewAccount";
import AccountDetails from "../../../components/popups/accountDetails/AccountDetailsPopup";
import ReportPopup from "../../../components/popups/reportAccount/ReportAccount";

/* ===================== DUMMY DATA ===================== */

const data = [
  { group: "A", number: 101, name: "Rahul Sharma", city: "Delhi", registration: "2024-01-12 10:15", email: "rahul@gmail.com", adress: "Delhi", comment: "Active" },
  { group: "B", number: 102, name: "Anita Verma", city: "Mumbai", registration: "2024-02-05 14:42", email: "anita@gmail.com", adress: "Mumbai", comment: "Pending" },
  { group: "C", number: 103, name: "Suresh Kumar", city: "Chennai", registration: "2024-03-18 09:05", email: "suresh@gmail.com", adress: "Chennai", comment: "Premium" },
  // add more if needed
];

function Registration() {
  /* ===================== PAGINATION ===================== */
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);

  /* ===================== MODALS ===================== */
  const [createAccount, setCreateAccount] = useState(false);
  const [editAccount, setEditAccount] = useState(false);

  const [accountDetails, setAccountDetails] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [reportAccount,setReportAccount]=useState(false);

  /* ===================== CONTEXT MENU ===================== */
  const [menu, setMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
  });

  const handleRightClick = (e, row) => {
    e.preventDefault();
    setMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
    });
  };

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
    { header: "City", field: "city" },
    { header: "Registration date", field: "registration" },
    { header: "Email", field: "email" },
    { header: "Adress", field: "adress" },
    { header: "Comment", field: "comment" },
  ];

  return (
    <>
      <DashboardToolbar
        onCreate={() => setCreateAccount(true)}
        onSearch={(text) => console.log("Search:", text)}
      />

      {/* ===================== TABLE ===================== */}
      <DataTable
        columns={columns}
        data={paginatedData}
        showPagination
        enableRowDblClick
        onRowDoubleClick={() => setEditAccount(true)}
        enableRowRightClick
        onRowRightClick={handleRightClick}
      />

      {/* ===================== PAGINATION ===================== */}
      <div className="fixed bottom-8.5 left-0 right-0 z-50 bg-white">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(data.length / rowsPerPage)}
          onPageChange={setCurrentPage}
        />
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
      
      <ReportPopup
      isOpen={reportAccount}
      onClose={()=>setReportAccount(false)}
      />

      <AccountDetails
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

export default Registration;
