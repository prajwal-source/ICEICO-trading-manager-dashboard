import React from 'react'
import DataTable from '../../../../components/uiComponents/DataTable'

const columns = [
    { header: "Name", field: "parameter" },
    { header: "Start Date", field: "value" },
    { header: "End Date", field: "value" },
    { header: "Groups", field: "value" },
   
];

// dummy data
const data = [
    { parameter: "Name", },
   
];
function Holidays() {
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

export default Holidays;