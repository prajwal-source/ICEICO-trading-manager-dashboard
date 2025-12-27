import React, { useState } from 'react'
import DashboardToolbar from '../../../components/dashboard-toolbar/DashboardToolbar'
import DataTable from '../../../components/uiComponents/DataTable'
import Pagination from '../../../components/uiComponents/Pagination';

const columns = [
  { header: "Group", field: "group" },
  { header: "Number", field: "number" },
  { header: "Name", field: "name" },
  {
    header: <span className="block text-right">Leverage</span>, field: "leverage",
    render: (value) => {
      const num = Number(
        String(value).replace(/,/g, "")
      );

      return (
        <div className="text-right">
          {isNaN(num) ? "0.00" : num.toFixed(2)}
        </div>
      );
    },
  },
  {
    header: <span className="block text-right">Deposit</span>, field: "deposit",
    render: (value) => (
      <div className="text-right">
        {Number(value).toFixed(2)}
      </div>
    ),
  },

  {
    header: <span className="block text-right">Withdraw</span>, field: "withdraw",
    render: (value) => (
      <div className="text-right">
        {Number(value).toFixed(2)}
      </div>
    ),
  },
  {
    header: <span className="block text-right">Bonus In/Out</span>,
    field: "bonus",
    render: (value) => {
      const num = Number(
        String(value).replace(/,/g, "")
      );

      return (
        <div className="text-right">
          {isNaN(num) ? "0.00" : num.toFixed(2)}
        </div>
      );
    },
  },

  {
    header: <span className="block text-right">In-Out</span>, field: "in-out",
    render: (value) => (
      <div className="text-right">
        {Number(value).toFixed(2)}
      </div>
    ),
  },
  {
    header: <span className="block text-right">Deals</span>, field: "deals",
    render: (value) => (
      <div className="text-right">
        {Number(value).toFixed(2)}
      </div>
    ),
  },
  {
    header: <span className="block text-right">Margin Levels</span>, field: "margin_levels",
    render: (value) => (
      <div className="text-right">
        {Number(value).toFixed(2)}
      </div>
    ),
  },
  {
    header: <span className="block text-right">Spent bonus</span>, field: "spent",
    render: (value) => (
      <div className="text-right">
        {Number(value).toFixed(2)}
      </div>
    ),
  },
  {
    header: <span className="block text-right">Profit</span>, field: "profit",
    render: (value) => (
      <div className="text-right">
        {Number(value).toFixed(2)}
      </div>
    ),
  },
  {
    header: <span className="block text-right">Margin</span>, field: "margin",
    render: (value) => (
      <div className="text-right">
        {Number(value).toFixed(2)}
      </div>
    ),
  },
  {
    header: <span className="block text-right">Free</span>, field: "free",
    render: (value) => (
      <div className="text-right">
        {Number(value).toFixed(2)}
      </div>
    ),
  },

];
// dummy data
const data = [
  {
    group: "general (live)",
    number: 9997,
    name: "test test test",
    leverage: "1:100",
    deposit: 9997.00,
    withdraw: 0.00,
    bonus: "0.00/0.00",
    "in-out": 9997.00,
    deals: -28.33,
    margin_levels: "0.00",
    spent: 0.00,
    profit: 0.00,
    margin: 0.00,
    free: 9968.67,
  },
  {
    group: "general (demo)",
    number: 10001,
    name: "TET TEST",
    leverage: "1:1",
    deposit: 10000.00,
    withdraw: 0.00,
    bonus: "0.00/0.00",
    "in-out": 10000.00,
    deals: 0.00,
    margin_levels: "0.00",
    spent: 0.00,
    profit: 0.00,
    margin: 0.00,
    free: 10000.00,
  },
  {
    group: "general (demo)",
    number: 10003,
    name: "test test",
    leverage: "1:1",
    deposit: 10000.00,
    withdraw: 0.00,
    bonus: "0.00/0.00",
    "in-out": 10000.00,
    deals: 4255.93,
    margin_levels: "0.00",
    spent: 0.00,
    profit: 0.00,
    margin: 0.00,
    free: 14255.93,
  },

  {
    group: "general (live)",
    number: 10010,
    name: "Rahul Sharma",
    leverage: "1:200",
    deposit: 15000.00,
    withdraw: 2000.00,
    bonus: "200.00/0.00",
    "in-out": 13000.00,
    deals: 1350.25,
    margin_levels: "75.00",
    spent: 100.00,
    profit: 0.00,
    margin: 3500.00,
    free: 10850.25,
  },
  {
    group: "general (demo)",
    number: 10011,
    name: "Anita Verma",
    leverage: "1:50",
    deposit: 5000.00,
    withdraw: 0.00,
    bonus: "0.00/0.00",
    "in-out": 5000.00,
    deals: -120.75,
    margin_levels: "0.00",
    spent: 0.00,
    profit: 0.00,
    margin: 0.00,
    free: 4879.25,
  },
  {
    group: "general (live)",
    number: 10012,
    name: "Suresh Kumar",
    leverage: "1:100",
    deposit: 20000.00,
    withdraw: 5000.00,
    bonus: "500.00/100.00",
    "in-out": 15500.00,
    deals: 2890.40,
    margin_levels: "68.00",
    spent: 200.00,
    profit: 0.00,
    margin: 6200.00,
    free: 12190.40,
  },
  {
    group: "general (demo)",
    number: 10013,
    name: "Pooja Singh",
    leverage: "1:1",
    deposit: 8000.00,
    withdraw: 0.00,
    bonus: "0.00/0.00",
    "in-out": 8000.00,
    deals: 560.00,
    margin_levels: "0.00",
    spent: 0.00,
    profit: 0.00,
    margin: 0.00,
    free: 8560.00,
  },
  {
    group: "general (live)",
    number: 10014,
    name: "Amit Patel",
    leverage: "1:300",
    deposit: 25000.00,
    withdraw: 3000.00,
    bonus: "1000.00/200.00",
    "in-out": 23000.00,
    deals: 8450.75,
    margin_levels: "82.00",
    spent: 400.00,
    profit: 0.00,
    margin: 7100.00,
    free: 23950.75,
  },
  {
    group: "general (demo)",
    number: 10015,
    name: "Neha Joshi",
    leverage: "1:1",
    deposit: 6000.00,
    withdraw: 0.00,
    bonus: "0.00/0.00",
    "in-out": 6000.00,
    deals: -450.00,
    margin_levels: "0.00",
    spent: 0.00,
    profit: 0.00,
    margin: 0.00,
    free: 5550.00,
  },

  {
    group: "general (live)",
    number: 10016,
    name: "Vikas Mehta",
    leverage: "1:100",
    deposit: 12000.00,
    withdraw: 1000.00,
    bonus: "300.00/50.00",
    "in-out": 11300.00,
    deals: 980.60,
    margin_levels: "70.00",
    spent: 150.00,
    profit: 0.00,
    margin: 2800.00,
    free: 10130.60,
  },
  {
    group: "general (demo)",
    number: 10017,
    name: "Kiran Rao",
    leverage: "1:1",
    deposit: 9000.00,
    withdraw: 0.00,
    bonus: "0.00/0.00",
    "in-out": 9000.00,
    deals: 1200.00,
    margin_levels: "0.00",
    spent: 0.00,
    profit: 0.00,
    margin: 0.00,
    free: 10200.00,
  },
  {
    group: "general (live)",
    number: 10018,
    name: "Manoj Yadav",
    leverage: "1:200",
    deposit: 18000.00,
    withdraw: 4000.00,
    bonus: "400.00/100.00",
    "in-out": 14400.00,
    deals: -650.25,
    margin_levels: "60.00",
    spent: 200.00,
    profit: 0.00,
    margin: 5200.00,
    free: 13549.75,
  },
  {
    group: "general (demo)",
    number: 10019,
    name: "Sneha Kulkarni",
    leverage: "1:1",
    deposit: 7000.00,
    withdraw: 0.00,
    bonus: "0.00/0.00",
    "in-out": 7000.00,
    deals: 300.00,
    margin_levels: "0.00",
    spent: 0.00,
    profit: 0.00,
    margin: 0.00,
    free: 7300.00,
  },
  {
    group: "general (live)",
    number: 10020,
    name: "Rohit Malhotra",
    leverage: "1:150",
    deposit: 22000.00,
    withdraw: 2000.00,
    bonus: "600.00/150.00",
    "in-out": 20600.00,
    deals: 5200.90,
    margin_levels: "78.00",
    spent: 300.00,
    profit: 0.00,
    margin: 6400.00,
    free: 19400.90,
  },

  {
    group: "general (demo)",
    number: 10021,
    name: "Nidhi Jain",
    leverage: "1:1",
    deposit: 9500.00,
    withdraw: 0.00,
    bonus: "0.00/0.00",
    "in-out": 9500.00,
    deals: -200.00,
    margin_levels: "0.00",
    spent: 0.00,
    profit: 0.00,
    margin: 0.00,
    free: 9300.00,
  },
  {
    group: "general (live)",
    number: 10022,
    name: "Arjun Kapoor",
    leverage: "1:100",
    deposit: 30000.00,
    withdraw: 5000.00,
    bonus: "1500.00/300.00",
    "in-out": 26500.00,
    deals: 10400.00,
    margin_levels: "85.00",
    spent: 500.00,
    profit: 0.00,
    margin: 8200.00,
    free: 28700.00,
  },
  {
    group: "general (demo)",
    number: 10023,
    name: "Meera Nair",
    leverage: "1:1",
    deposit: 8500.00,
    withdraw: 0.00,
    bonus: "0.00/0.00",
    "in-out": 8500.00,
    deals: 950.00,
    margin_levels: "0.00",
    spent: 0.00,
    profit: 0.00,
    margin: 0.00,
    free: 9450.00,
  },
  {
    group: "general (live)",
    number: 10024,
    name: "Deepak Chauhan",
    leverage: "1:200",
    deposit: 16000.00,
    withdraw: 3000.00,
    bonus: "400.00/200.00",
    "in-out": 13400.00,
    deals: -980.00,
    margin_levels: "55.00",
    spent: 250.00,
    profit: 0.00,
    margin: 4900.00,
    free: 12420.00,
  },
  {
    group: "general (demo)",
    number: 10025,
    name: "Isha Roy",
    leverage: "1:1",
    deposit: 11000.00,
    withdraw: 0.00,
    bonus: "0.00/0.00",
    "in-out": 11000.00,
    deals: 1800.00,
    margin_levels: "0.00",
    spent: 0.00,
    profit: 0.00,
    margin: 0.00,
    free: 12800.00,
  },
];


function Accounts() {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const rowsPerPage = 20;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);
  return (
    <>
      <DashboardToolbar

        const filters={[
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
            name: "Equity",
            value: "all",
            onChange: (v) => console.log(v),
            options: [
              { label: "All", value: "all" },
              { label: "More 300", value: "yes" },
              { label: "More 1000", value: "no" },
              { label: "Less 300", value: "yes" },
              { label: "Less 1000", value: "no" },

            ],
          },
          {
            name: "MoneyBack",
            value: "all",
            onChange: (v) => console.log(v),
            options: [
              { label: "All", value: "all" },
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },

            ],
          },
          {
            name: "Profitable",
            value: "all",
            onChange: (v) => console.log(v),
            options: [
              { label: "All", value: "all" },
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },

            ],
          },
          {
            name: "Registartion date",
            value: "all",
            onChange: (v) => console.log(v),
            options: [
              { label: "All", value: "all" },
              { label: "December 2025", value: "yes" },
              { label: "November 2025", value: "no" },
              { label: "October 2025", value: "yes" },
              { label: "Choose", value: "no" },

            ],
          },
          {
            name: "Demo/Live",
            value: "all",
            onChange: (v) => console.log(v),
            options: [
              { label: "All", value: "all" },
              { label: "Demo", value: "yes" },
              { label: "Live", value: "no" },
            ],
          },
        ]}

        onSearch={(text) => console.log("Search:", text)}
      />
      {/* DataTable */}
      <DataTable
        columns={columns}
        data={paginatedData}
        showPagination={true}
      />
      <div className="fixed bottom-8.5 left-0 right-0 z-50 bg-white border-t">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(data.length / 10)} // example: 10 rows per page
          onPageChange={handlePageChange}
        />
      </div>
    </>
  )
}

export default Accounts;