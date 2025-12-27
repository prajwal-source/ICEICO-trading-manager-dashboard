import React from 'react'
import DataTable from '../../../../components/uiComponents/DataTable'

const columns = [
    { header: "Filename", field: "parameter" },
    { header: "Download", field: "value" },
   
];

// dummy data
const data = [
    { parameter: "Quate archive state", value: "download" },
    { parameter: "A", value: 122},
    { parameter: "B", value: 123},
];
function Journals() {
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

export default Journals;