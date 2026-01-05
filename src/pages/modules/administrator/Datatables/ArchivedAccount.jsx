import React, { useState } from 'react'
import DataTable from '../../../../components/uiComponents/DataTable';

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
    number: "USD"
  },

];


function ArchivedAccount() {

  const handleRestore=()=>{
     if (confirm("Do you want to Restore ?")) {
        console.log("Account restored");
        
    } else {
      return;
    }
  }

  return (
    <>

      {/* DataTable */}
      <DataTable
        columns={columns}
        data={data}
        showRestoreColumn
        onRestoreClick={(row, index) => {
          handleRestore();
        }}
        withTopPadding={false}
        showPagination={true}
      />

    </>
  )
}

export default ArchivedAccount;