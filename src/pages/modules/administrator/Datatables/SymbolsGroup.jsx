import React, { useState } from "react";
import DataTable from "../../../../components/uiComponents/DataTable";
import ModifyGroupPopup from "../popups/ModifyGroupPopup";

const columns = [
  { header: "Name", field: "parameter" },
  { header: "Description", field: "value" },
];

// dummy data
const data = [
  {
    parameter: "Quote archive state",
    value: "2.51.0 (10/06/2025 4:41:36 pm)",
  },
  { parameter: "A", value: 122 },
  { parameter: "B", value: 123 },
];

function SymbolsGroup() {
 const [modifyGroup,setModifyGroup]=useState(false);

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        withTopPadding={false}
        enableRowDblClick
        onRowDoubleClick={(row)=>{
          setModifyGroup(true);
        }}
       
      />
      <ModifyGroupPopup
      isOpen={modifyGroup}
      onClose={()=>setModifyGroup(false)}
      />

      
    </>
  );
}

export default SymbolsGroup;
