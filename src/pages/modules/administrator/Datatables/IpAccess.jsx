import React from 'react'
import DataTable from '../../../../components/uiComponents/DataTable'

const columns = [
    { header: "Parameter", field: "parameter" },
    { header: "First Ip", field: "value" },
    { header: "Last Ip", field: "value" },
    { header: "Edit", field: "value" },
    { header: "Delete", field: "value" },
   
];

// dummy data
const data = [
    { parameter: "Add",  },
  
];
function IpAccess() {
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

export default IpAccess;