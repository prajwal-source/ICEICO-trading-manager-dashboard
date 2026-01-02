import React, { useState } from 'react'
import DataTable from '../../../../components/uiComponents/DataTable'
import EditGroupPopup from '../popups/EditGroupPopup';

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
  const [editGroup,setEditGroup]=useState(false);
  return (
    <>
    <DataTable
     columns={columns}
     data={data}
     withTopPadding={false}
     enableRowDblClick
     onRowDoubleClick={(row)=>{
      setEditGroup(true)
     }}
    />

    <EditGroupPopup
    isOpen={editGroup}
    onClose={()=>setEditGroup(false)}  
  />
    
    </>
  )
}

export default Groups;