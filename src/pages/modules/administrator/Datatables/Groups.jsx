import React from 'react'
import DataTable from '../../../../components/uiComponents/DataTable'

const columns = [
    { header: "Id", field: "id" },
    { header: "Name", field: "name" },
    { header: "Currency", field: "currency" },
    { header: "Description", field: "description" },
    { header: "Type", field: "type" },
   
];

// dummy data
const data = [
    {   id: "1", 
        name: "General (Live)", 
        currency: "USD", 
        description: "dg", 
        type: "Demo", 
       
    },
   
];
function Groups() {
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

export default Groups;