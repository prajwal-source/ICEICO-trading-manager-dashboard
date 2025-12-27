import React from 'react'
import DataTable from '../../../../components/uiComponents/DataTable';

const columns = [
    { header: "Group", field: "group" },
    { header: "Number", field: "number" },
    { header: "Name", field: "name" },
    { header: "City", field: "city" },
    { header: "Registration date", field: "registration" },
    { header: "Email", field: "email" },
    { header: "Adress", field: "adress" },
    { header: "Comment", field: "comment" },
];
// dummy data
const data = [
  
    { group: "A", number: 103, name: "Suresh Kumar", city: "Chennai", registration: "2024-03-18 09:05", email: "suresh.kumar@gmail.com", adress: "T Nagar, Chennai", comment: "Premium member" },
    { group: "C", number: 104, name: "Pooja Singh", city: "Lucknow", registration: "2024-01-29 18:20", email: "pooja.singh@gmail.com", adress: "Gomti Nagar, Lucknow", comment: "Inactive" },
    
];
function GroupReportDatatable() {
    return (
        <>
            {/* DataTable */}
            <DataTable
                columns={columns}
                data={data}
                withTopPadding={false}
                
            />
        </>
    )
}

export default GroupReportDatatable;