import React, { useState } from 'react'
import DataTable from '../../../../components/uiComponents/DataTable'
import AddHolidayPopup from '../popups/AddHolidayPopup';

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
  const [addHoliday,setAddHoliday]=useState(false);
  return (
    <>
    <DataTable
     columns={columns}
     data={data}
     withTopPadding={false}
     enableRowDblClick
     onRowDoubleClick={(row)=>{
      setAddHoliday(true)
     }}
    />

    <AddHolidayPopup
    isOpen={addHoliday}
    onClose={()=>setAddHoliday(false)}
    />
    
    </>
  )
}

export default Holidays;