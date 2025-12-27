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
    { group: "A", number: 101, name: "Rahul Sharma", city: "Delhi", registration: "2024-01-12 10:15", email: "rahul.sharma@gmail.com", adress: "Laxmi Nagar, Delhi", comment: "Active user" },
   
];
function CoveragePosition() {
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

export default CoveragePosition;