import React, { useState } from 'react'
import DataTable from '../../../../components/uiComponents/DataTable';
import EditManagerPopup from '../popups/EditManagerPopup';

const columns = [
  { header: "Number", field: "number" },
  { header: "Name", field: "name" },
  { header: "Email", field: "email" },
  { header: "Date of Deletion", field: "dod" },
  { header: "Group", field: "group" },
  { header: "Currency", field: "currency" },
];
// dummy data
const data = [
  {
    number:"100"
  },
 
];


function Managers() {
  const [editManager,setEditManager]=useState(false);
  return (
    <>
      
      {/* DataTable */}
      <DataTable
        columns={columns}
        data={data}
        withTopPadding={false}
        showPagination={true}
        enableRowDblClick
        onRowDoubleClick={(row)=>{
          setEditManager(true)
        }}
      />
     <EditManagerPopup
     isOpen={editManager}
     onClose={()=>setEditManager(false)}
     />
    </>
  )
}

export default Managers;