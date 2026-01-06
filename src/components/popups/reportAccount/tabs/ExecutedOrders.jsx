import React from 'react'
import DataTable from '../../../uiComponents/DataTable';
const data = [
  {
    number: 10001,
    symbol: "EURUSD",
    type: "Buy",
    volume: 1.0,
    openDate: "2026-01-01 10:15",
    closeDate: "2026-01-01 11:30",
    price: 1.1025,
    executionPrice: 1.1050,
    takeProfit: 1.1100,
    stopLoss: 1.0980,
    closureType: "Take Profit",
  },
  {
    number: 10002,
    symbol: "USDJPY",
    type: "Sell",
    volume: 0.5,
    openDate: "2026-01-01 12:00",
    closeDate: "2026-01-01 13:10",
    price: 148.20,
    executionPrice: 147.80,
    takeProfit: 147.50,
    stopLoss: 148.90,
    closureType: "Manual",
  },
  {
    number: 10003,
    symbol: "GBPUSD",
    type: "Buy",
    volume: 2.0,
    openDate: "2026-01-02 09:40",
    closeDate: "2026-01-02 10:55",
    price: 1.2710,
    executionPrice: 1.2765,
    takeProfit: 1.2800,
    stopLoss: 1.2650,
    closureType: "Take Profit",
  },
  {
    number: 10004,
    symbol: "BTCUSD",
    type: "Sell",
    volume: 0.2,
    openDate: "2026-01-02 15:20",
    closeDate: "2026-01-02 16:05",
    price: 43250,
    executionPrice: 42800,
    takeProfit: 42500,
    stopLoss: 43500,
    closureType: "Stop Loss",
  },
  {
    number: 10005,
    symbol: "XAUUSD",
    type: "Buy",
    volume: 1.5,
    openDate: "2026-01-03 11:10",
    closeDate: "2026-01-03 12:00",
    price: 2035.40,
    executionPrice: 2042.80,
    takeProfit: 2050.00,
    stopLoss: 2025.00,
    closureType: "Manual",
  },
];

function ExecutedOrders(row) {
   const columns = [
  { header: "Number", field: "number" },
  { header: "Symbol", field: "symbol" },
  { header: "Type", field: "type" },
  { header: "Volume", field: "volume" },
  { header: "Open date", field: "openDate" },
  { header: "Close date", field: "closeDate" },
  { header: "Price", field: "price" },
  { header: "Execution price", field: "executionPrice" },
  { header: "Take Profit", field: "takeProfit" },
  { header: "Stop Loss", field: "stopLoss" },
  { header: "Type of closure", field: "closureType" },
];


  return (
   <DataTable
  columns={columns}
  data={data}
  showPagination={false}
  withTopPadding={false}
/>
  )
}

export default ExecutedOrders