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

  return (
    <>

      {/* DataTable */}
      <DataTable
        columns={columns}
        data={data}
        showRestoreColumn
        onRestoreClick={(row, index) => {
          console.log("Restore clicked:", row, index);
        }}
        withTopPadding={false}
        showPagination={true}
      />

    </>
  )
}

export default ArchivedAccount;