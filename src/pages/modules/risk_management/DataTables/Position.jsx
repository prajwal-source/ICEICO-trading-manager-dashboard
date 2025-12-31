import React from 'react'
import DataTable from '../../../../components/uiComponents/DataTable';
import Pagination from '../../../../components/uiComponents/Pagination';

const columns = [
    { header: "Group", field: "group" },
    { header: "Account", field: "account" },
    { header: "Name", field: "name" },
    { header: "Number", field: "number" },
    { header: "Type", field: "type" },
    { header: "Volume", field: "volume" },
    { header: "Open date", field: "openDate" },
    { header: "Open Price", field: "openPrice" },
    { header: "Additional Parameters", field: "additionalParameters" },
    { header: "Current Price", field: "currentPrice" },
    { header: "Profit Strategy", field: "profitStategy" },
];
// dummy data
const data = [
  {
    group: "General (Live)",
    account: "ACC-1001",
    name: "Rahul Sharma",
    number: 50101,
    type: "Buy",
    volume: 1.20,
    openDate: "2025-01-05 10:15",
    openPrice: 1.0845,
    additionalParameters: "SL: 1.0800 | TP: 1.0900",
    currentPrice: 1.0872,
    profitStategy: "Scalping",
  },
  {
    group: "General (Demo)",
    account: "ACC-1002",
    name: "Anita Verma",
    number: 50102,
    type: "Sell",
    volume: 0.80,
    openDate: "2025-01-06 11:40",
    openPrice: 1.2741,
    additionalParameters: "SL: 1.2800 | TP: 1.2650",
    currentPrice: 1.2698,
    profitStategy: "Swing",
  },
  {
    group: "General (Live)",
    account: "ACC-1003",
    name: "Suresh Kumar",
    number: 50103,
    type: "Buy",
    volume: 2.00,
    openDate: "2025-01-07 09:30",
    openPrice: 0.9250,
    additionalParameters: "SL: 0.9200 | TP: 0.9350",
    currentPrice: 0.9325,
    profitStategy: "Intraday",
  },
  {
    group: "General (Demo)",
    account: "ACC-1004",
    name: "Pooja Singh",
    number: 50104,
    type: "Sell",
    volume: 1.50,
    openDate: "2025-01-08 14:10",
    openPrice: 150.25,
    additionalParameters: "SL: 151.50 | TP: 148.00",
    currentPrice: 149.10,
    profitStategy: "Reversal",
  },
  {
    group: "General (Live)",
    account: "ACC-1005",
    name: "Amit Patel",
    number: 50105,
    type: "Buy",
    volume: 0.60,
    openDate: "2025-01-09 12:05",
    openPrice: 1.3560,
    additionalParameters: "SL: 1.3500 | TP: 1.3650",
    currentPrice: 1.3618,
    profitStategy: "Breakout",
  },
  {
    group: "General (Demo)",
    account: "ACC-1006",
    name: "Neha Joshi",
    number: 50106,
    type: "Sell",
    volume: 1.00,
    openDate: "2025-01-10 15:20",
    openPrice: 0.7125,
    additionalParameters: "SL: 0.7200 | TP: 0.7050",
    currentPrice: 0.7084,
    profitStategy: "Trend Following",
  },
  {
    group: "General (Live)",
    account: "ACC-1007",
    name: "Vikas Mehta",
    number: 50107,
    type: "Buy",
    volume: 1.80,
    openDate: "2025-01-11 10:45",
    openPrice: 1.0920,
    additionalParameters: "SL: 1.0850 | TP: 1.1050",
    currentPrice: 1.0987,
    profitStategy: "Momentum",
  },
  {
    group: "General (Demo)",
    account: "ACC-1008",
    name: "Kiran Rao",
    number: 50108,
    type: "Sell",
    volume: 0.90,
    openDate: "2025-01-12 13:00",
    openPrice: 83.45,
    additionalParameters: "SL: 85.00 | TP: 80.00",
    currentPrice: 81.90,
    profitStategy: "Range Trading",
  },
  {
    group: "General (Live)",
    account: "ACC-1009",
    name: "Manoj Yadav",
    number: 50109,
    type: "Buy",
    volume: 2.50,
    openDate: "2025-01-13 09:10",
    openPrice: 1.2150,
    additionalParameters: "SL: 1.2050 | TP: 1.2300",
    currentPrice: 1.2265,
    profitStategy: "Position Trading",
  },
  {
    group: "General (Demo)",
    account: "ACC-1010",
    name: "Sneha Kulkarni",
    number: 50110,
    type: "Sell",
    volume: 1.10,
    openDate: "2025-01-14 16:35",
    openPrice: 0.8650,
    additionalParameters: "SL: 0.8750 | TP: 0.8500",
    currentPrice: 0.8523,
    profitStategy: "Mean Reversion",
  },
];

function Position() {
    return (
        <>
            {/* DataTable */}
            <DataTable
                columns={columns}
                data={data}
                withTopPadding={false}
            />
            <div className="fixed bottom-8.5 w-319.75 z-50 bg-white ">
                <Pagination />

            </div>
        </>
    )
}

export default Position;