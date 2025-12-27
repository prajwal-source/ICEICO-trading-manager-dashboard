import React from 'react'
import DataTable from '../../../../components/uiComponents/DataTable'

const columns = [
    { header: "Parameter", field: "parameter" },
    { header: "Value", field: "value" },
   
];

// dummy data
const data = [
    { parameter: "Quate archive state", value: "2.51.0 (10/06/2025 4:41:36 pm) " },
    { parameter: "A", value: 122},
    { parameter: "B", value: 123},
];
function MonitorDatatable() {
  return (
    <>
    <DataTable
     columns={columns}
     data={data}
     withTopPadding={false}
    />
    
    </>
  )
}

export default MonitorDatatable