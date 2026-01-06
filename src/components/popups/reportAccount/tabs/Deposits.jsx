import React from 'react'
import DataTable from '../../../uiComponents/DataTable';
const data = [
    {
        number: 30001,
        date: "2026-01-01",
        sum: 5000,
        comment: "Initial deposit",
    },
    {
        number: 30002,
        date: "2026-01-03",
        sum: -1200,
        comment: "Withdrawal",
    },
    {
        number: 30003,
        date: "2026-01-05",
        sum: 2500,
        comment: "Bonus credit",
    },
    {
        number: 30004,
        date: "2026-01-08",
        sum: -800,
        comment: "Trading loss adjustment",
    },
    {
        number: 30005,
        date: "2026-01-10",
        sum: 1500,
        comment: "Profit withdrawal",
    },
];

function Deposits({ row }) {
    const columns = [
        { header: "Number", field: "number" },
        { header: "Date", field: "date" },
        { header: "Sum", field: "sum" },
        { header: "Comment", field: "comment" },
    ];

    return (
         <div>
            <div className="border px-3 py-1 bg-amber-200">
                Trading data
            </div>
            <DataTable
                columns={columns}
                data={data}
                showPagination={false}
                withTopPadding={false}
            />
        </div>
    )
}

export default Deposits