import React, { useState } from 'react'
import DataTable from '../../../../components/uiComponents/DataTable';
import Pagination from '../../../../components/uiComponents/Pagination';

const columns = [
    { header: "Group", field: "group" },
    { header: "Number", field: "number" },
    { header: "Status", field: "status" },
    { header: "Delay", field: "delay" },
    { header: "Strategy", field: "stratgy" },
    { header: "Deposit", field: "deposit" },
    { header: "Withdraw", field: "withdraw" },
    { header: "Deals", field: "deals" },
    { header: "Profit", field: "profit" },
    { header: "Equity", field: "equity" },
    { header: "Coverage Deals", field: "coverageDeal" },
    { header: "Coverage profit", field: "coverageProfit" },
    { header: "Result", field: "result" },
];
const columnsForPositions = [
    { header: "Symbol", field: "group" },
    { header: "Number", field: "number" },
    { header: "Coverage Number", field: "status" },
    { header: "Type", field: "delay" },
    { header: "Volume", field: "stratgy" },
    { header: "Date", field: "deposit" },
    { header: "Open Price", field: "withdraw" },
    { header: "Current price", field: "deals" },
    { header: "Profit", field: "profit" },

];
const positionsData = [
    {
        group: "EURUSD",
        number: 201,
        status: 5012,
        delay: "BUY",
        stratgy: 0.50,
        deposit: "2025-01-10 10:15",
        withdraw: 1.0825,
        deals: 1.0862,
        profit: 185,
    },

];

// dummy data
const data = [
    {
        group: "General (Live)",
        number: 101,
        status: "Active",
        delay: "2s",
        stratgy: "Scalping",
        deposit: 5000,
        withdraw: 1200,
        deals: 34,
        profit: 850,
        equity: 4650,
        coverageDeal: 3,
        coverageProfit: 120,
        result: "Profit",
    },
    {
        group: "General (Demo)",
        number: 102,
        status: "Active",
        delay: "1s",
        stratgy: "Swing",
        deposit: 8000,
        withdraw: 2000,
        deals: 41,
        profit: 1320,
        equity: 7320,
        coverageDeal: 5,
        coverageProfit: 210,
        result: "Profit",
    },
    {
        group: "General (Demo)",
        number: 102,
        status: "Active",
        delay: "1s",
        stratgy: "Swing",
        deposit: 8000,
        withdraw: 2000,
        deals: 41,
        profit: 1320,
        equity: 7320,
        coverageDeal: 5,
        coverageProfit: 210,
        result: "Profit",
    },
    {
        group: "General (Live)",
        number: 103,
        status: "Inactive",
        delay: "5s",
        stratgy: "Intraday",
        deposit: 6000,
        withdraw: 1000,
        deals: 18,
        profit: -350,
        equity: 4650,
        coverageDeal: 2,
        coverageProfit: -80,
        result: "Loss",
    },
    {
        group: "General (Demo)",
        number: 104,
        status: "Active",
        delay: "3s",
        stratgy: "Scalping",
        deposit: 10000,
        withdraw: 3000,
        deals: 55,
        profit: 2450,
        equity: 9450,
        coverageDeal: 6,
        coverageProfit: 320,
        result: "Profit",
    },
    {
        group: "General (Live)",
        number: 105,
        status: "Active",
        delay: "1s",
        stratgy: "Swing",
        deposit: 7500,
        withdraw: 1500,
        deals: 29,
        profit: 980,
        equity: 6980,
        coverageDeal: 4,
        coverageProfit: 180,
        result: "Profit",
    },
    {
        group: "General (Demo)",
        number: 106,
        status: "Inactive",
        delay: "6s",
        stratgy: "Intraday",
        deposit: 4000,
        withdraw: 500,
        deals: 12,
        profit: -620,
        equity: 2880,
        coverageDeal: 1,
        coverageProfit: -150,
        result: "Loss",
    },
    {
        group: "General (Live)",
        number: 107,
        status: "Active",
        delay: "2s",
        stratgy: "Scalping",
        deposit: 9000,
        withdraw: 2500,
        deals: 48,
        profit: 1750,
        equity: 8250,
        coverageDeal: 5,
        coverageProfit: 260,
        result: "Profit",
    },
    {
        group: "General (Demo)",
        number: 108,
        status: "Active",
        delay: "1s",
        stratgy: "Swing",
        deposit: 11000,
        withdraw: 4000,
        deals: 60,
        profit: 3100,
        equity: 10100,
        coverageDeal: 7,
        coverageProfit: 450,
        result: "Profit",
    },
    {
        group: "General (Live)",
        number: 109,
        status: "Inactive",
        delay: "7s",
        stratgy: "Intraday",
        deposit: 3000,
        withdraw: 0,
        deals: 9,
        profit: -900,
        equity: 2100,
        coverageDeal: 0,
        coverageProfit: 0,
        result: "Loss",
    },
    {
        group: "General (Demo)",
        number: 110,
        status: "Active",
        delay: "2s",
        stratgy: "Scalping",
        deposit: 6500,
        withdraw: 1300,
        deals: 27,
        profit: 740,
        equity: 5940,
        coverageDeal: 3,
        coverageProfit: 110,
        result: "Profit",
    },
    {
        group: "General (Live)",
        number: 111,
        status: "Active",
        delay: "1s",
        stratgy: "Swing",
        deposit: 8500,
        withdraw: 2200,
        deals: 36,
        profit: 1560,
        equity: 7860,
        coverageDeal: 4,
        coverageProfit: 200,
        result: "Profit",
    },
    {
        group: "General (Demo)",
        number: 112,
        status: "Inactive",
        delay: "4s",
        stratgy: "Intraday",
        deposit: 5000,
        withdraw: 1000,
        deals: 16,
        profit: -420,
        equity: 3580,
        coverageDeal: 2,
        coverageProfit: -90,
        result: "Loss",
    },
    {
        group: "General (Live)",
        number: 113,
        status: "Active",
        delay: "2s",
        stratgy: "Scalping",
        deposit: 12000,
        withdraw: 3500,
        deals: 70,
        profit: 4200,
        equity: 11700,
        coverageDeal: 8,
        coverageProfit: 520,
        result: "Profit",
    },
    {
        group: "General (Demo)",
        number: 114,
        status: "Active",
        delay: "1s",
        stratgy: "Swing",
        deposit: 9500,
        withdraw: 2800,
        deals: 44,
        profit: 1980,
        equity: 8680,
        coverageDeal: 5,
        coverageProfit: 300,
        result: "Profit",
    },
    {
        group: "General (Live)",
        number: 115,
        status: "Inactive",
        delay: "8s",
        stratgy: "Intraday",
        deposit: 2800,
        withdraw: 0,
        deals: 7,
        profit: -1100,
        equity: 1700,
        coverageDeal: 0,
        coverageProfit: 0,
        result: "Loss",
    },
];

function Account() {
    const [toggle, setToggel] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <>
            {/* DataTable */}
           
            <DataTable
                columns={columns}
                data={data}
                withTopPadding={false}

            />
            <div className="fixed bottom-8.5 w-319.75 z-50 bg-white ">
                <Pagination
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
                <div className='bg-amber-50 pl-5 border-x border-b text-sm'>
                    Positions
                </div>
                <div className='h-47'>

                    <DataTable
                        columns={columnsForPositions}
                        data={positionsData}
                        withTopPadding={false}

                    />
                </div>

            </div>

        </>
    )
}

export default Account;