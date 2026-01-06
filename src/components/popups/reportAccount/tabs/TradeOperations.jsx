import React from 'react'
import DataTable from '../../../uiComponents/DataTable';



const data = [
    {
        number: 20001,
        openDate: "2026-01-01 09:15",
        type: "Buy",
        symbol: "EURUSD",
        volume: 1.0,
        closeDate: "2026-01-01 10:05",
        openPrice: 1.1020,
        closePrice: 1.1075,
        takeProfit: 1.1100,
        stopLoss: 1.0980,
        swap: -0.15,
        commission: -2.5,
        profit: 55.0,
        bonusBalance: 10.0,
        openingType: "Market",
        comment: "Morning breakout",
    },
    {
        number: 20007,
        openDate: "2026-01-02 11:00",
        type: "Buy",
        symbol: "AUDUSD",
        volume: 1.5,
        closeDate: "2026-01-02 12:30",
        openPrice: 0.6640,
        closePrice: 0.6685,
        takeProfit: 0.6700,
        stopLoss: 0.6600,
        swap: -0.18,
        commission: -2.8,
        profit: 67.5,
        bonusBalance: 9.0,
        openingType: "Limit",
        comment: "Asia session breakout",
    },
    {
        number: 20008,
        openDate: "2026-01-02 13:40",
        type: "Sell",
        symbol: "US30",
        volume: 0.7,
        closeDate: "2026-01-02 14:15",
        openPrice: 37850,
        closePrice: 37720,
        takeProfit: 37600,
        stopLoss: 37950,
        swap: -0.08,
        commission: -1.5,
        profit: 91.0,
        bonusBalance: 14.0,
        openingType: "Market",
        comment: "Dow Jones fade",
    },
    {
        number: 20009,
        openDate: "2026-01-02 15:10",
        type: "Buy",
        symbol: "EURJPY",
        volume: 0.9,
        closeDate: "2026-01-02 16:05",
        openPrice: 161.40,
        closePrice: 161.95,
        takeProfit: 162.20,
        stopLoss: 160.90,
        swap: -0.14,
        commission: -2.2,
        profit: 49.5,
        bonusBalance: 7.5,
        openingType: "Market",
        comment: "Cross pair strength",
    },
    {
        number: 20010,
        openDate: "2026-01-02 17:00",
        type: "Sell",
        symbol: "ETHUSD",
        volume: 0.3,
        closeDate: "2026-01-02 18:10",
        openPrice: 2350,
        closePrice: 2310,
        takeProfit: 2300,
        stopLoss: 2380,
        swap: -0.25,
        commission: -3.6,
        profit: 120.0,
        bonusBalance: 16.0,
        openingType: "Market",
        comment: "ETH rejection",
    },
];

function TradeOperations({ row }) {

    const columns = [
        { header: "Number", field: "number" },
        { header: "Symbol", field: "symbol" },
        { header: "Type", field: "type" },
        { header: "Volume", field: "volume" },
        { header: "Open date", field: "openDate" },
        { header: "Close date", field: "closeDate" },
        { header: "Open Price", field: "openPrice" },
        { header: "Close Price", field: "closePrice" },
        { header: "Take Profit", field: "takeProfit" },
        { header: "Stop Loss", field: "stopLoss" },
        { header: "Swap", field: "swap" },
        { header: "Commission", field: "commission" },
        { header: "Profit", field: "profit" },
        { header: "Bonus Balance", field: "bonusBalance" },
        { header: "Opening Type", field: "openingType" },
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

export default TradeOperations