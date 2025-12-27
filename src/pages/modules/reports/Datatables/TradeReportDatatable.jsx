import React from 'react'
import DataTable from '../../../../components/uiComponents/DataTable'

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
const DummyData = [
    { group: "A", number: 107, name: "Vikas Mehta", city: "Jaipur", registration: "2024-03-02 08:10", email: "vikas.mehta@gmail.com", adress: "Malviya Nagar, Jaipur", comment: "Regular user" },
    { group: "B", number: 108, name: "Kiran Rao", city: "Hyderabad", registration: "2024-01-08 13:00", email: "kiran.rao@gmail.com", adress: "Madhapur, Hyderabad", comment: "Active user" },
    { group: "C", number: 109, name: "Manoj Yadav", city: "Patna", registration: "2024-04-01 19:45", email: "manoj.yadav@gmail.com", adress: "Kankarbagh, Patna", comment: "Limited access" },
   
];
function TradeReportDatatable() {

    return (
        <> 
            {/* DataTable */}
            <DataTable
                columns={columns}
                data={DummyData}
                withTopPadding={false}
                
            />
            
        </>
    )
}

export default TradeReportDatatable