import React, { useState } from 'react'
import DashboardToolbar from '../../../components/dashboard-toolbar/DashboardToolbar'
import DataTable from '../../../components/uiComponents/DataTable'

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
    { group: "B", number: 102, name: "Anita Verma", city: "Mumbai", registration: "2024-02-05 14:42", email: "anita.verma@gmail.com", adress: "Andheri West, Mumbai", comment: "Pending verification" },
    { group: "A", number: 103, name: "Suresh Kumar", city: "Chennai", registration: "2024-03-18 09:05", email: "suresh.kumar@gmail.com", adress: "T Nagar, Chennai", comment: "Premium member" },
    { group: "C", number: 104, name: "Pooja Singh", city: "Lucknow", registration: "2024-01-29 18:20", email: "pooja.singh@gmail.com", adress: "Gomti Nagar, Lucknow", comment: "Inactive" },
    { group: "B", number: 105, name: "Amit Patel", city: "Ahmedabad", registration: "2024-04-10 11:55", email: "amit.patel@gmail.com", adress: "Navrangpura, Ahmedabad", comment: "Active user" },
    { group: "C", number: 106, name: "Neha Joshi", city: "Pune", registration: "2024-02-22 16:35", email: "neha.joshi@gmail.com", adress: "Baner, Pune", comment: "Email not verified" },
    { group: "A", number: 107, name: "Vikas Mehta", city: "Jaipur", registration: "2024-03-02 08:10", email: "vikas.mehta@gmail.com", adress: "Malviya Nagar, Jaipur", comment: "Regular user" },
    { group: "B", number: 108, name: "Kiran Rao", city: "Hyderabad", registration: "2024-01-08 13:00", email: "kiran.rao@gmail.com", adress: "Madhapur, Hyderabad", comment: "Active user" },
    { group: "C", number: 109, name: "Manoj Yadav", city: "Patna", registration: "2024-04-01 19:45", email: "manoj.yadav@gmail.com", adress: "Kankarbagh, Patna", comment: "Limited access" },
    { group: "A", number: 110, name: "Sneha Kulkarni", city: "Nagpur", registration: "2024-02-14 07:30", email: "sneha.k@gmail.com", adress: "Dharampeth, Nagpur", comment: "New registration" },

    { group: "B", number: 111, name: "Rohit Malhotra", city: "Gurgaon", registration: "2024-03-11 12:25", email: "rohit.m@gmail.com", adress: "Sector 45, Gurgaon", comment: "Active user" },
    { group: "C", number: 112, name: "Nidhi Jain", city: "Indore", registration: "2024-01-20 15:40", email: "nidhi.j@gmail.com", adress: "Vijay Nagar, Indore", comment: "Profile incomplete" },
    { group: "A", number: 113, name: "Arjun Kapoor", city: "Noida", registration: "2024-02-09 10:05", email: "arjun.k@gmail.com", adress: "Sector 62, Noida", comment: "Active user" },
    { group: "B", number: 114, name: "Meera Nair", city: "Kochi", registration: "2024-03-25 17:15", email: "meera.nair@gmail.com", adress: "Kaloor, Kochi", comment: "Premium member" },
    { group: "C", number: 115, name: "Deepak Chauhan", city: "Bhopal", registration: "2024-01-30 09:50", email: "deepak.c@gmail.com", adress: "MP Nagar, Bhopal", comment: "Inactive" },
    { group: "A", number: 116, name: "Isha Roy", city: "Kolkata", registration: "2024-04-04 18:00", email: "isha.roy@gmail.com", adress: "Salt Lake, Kolkata", comment: "Active user" },
    { group: "B", number: 117, name: "Sanjay Gupta", city: "Kanpur", registration: "2024-02-27 11:10", email: "sanjay.g@gmail.com", adress: "Kalyanpur, Kanpur", comment: "Limited access" },
    { group: "C", number: 118, name: "Ritu Saxena", city: "Agra", registration: "2024-03-06 14:55", email: "ritu.s@gmail.com", adress: "Civil Lines, Agra", comment: "Active user" },
    { group: "A", number: 119, name: "Alok Mishra", city: "Prayagraj", registration: "2024-01-17 08:45", email: "alok.m@gmail.com", adress: "George Town, Prayagraj", comment: "New registration" },
    { group: "B", number: 120, name: "Kavita Desai", city: "Surat", registration: "2024-04-12 16:20", email: "kavita.d@gmail.com", adress: "Adajan, Surat", comment: "Active user" },

    { group: "C", number: 121, name: "Naveen Reddy", city: "Warangal", registration: "2024-02-01 13:35", email: "naveen.r@gmail.com", adress: "Hanamkonda, Warangal", comment: "Pending verification" },
    { group: "A", number: 122, name: "Pankaj Soni", city: "Udaipur", registration: "2024-03-14 09:00", email: "pankaj.s@gmail.com", adress: "Hiran Magri, Udaipur", comment: "Active user" },
    { group: "B", number: 123, name: "Shweta Tiwari", city: "Varanasi", registration: "2024-01-22 17:50", email: "shweta.t@gmail.com", adress: "Sigra, Varanasi", comment: "Premium member" },
    { group: "C", number: 124, name: "Ankur Bansal", city: "Meerut", registration: "2024-02-18 10:30", email: "ankur.b@gmail.com", adress: "Shastri Nagar, Meerut", comment: "Active user" },
    { group: "A", number: 125, name: "Payal Arora", city: "Amritsar", registration: "2024-03-29 15:05", email: "payal.a@gmail.com", adress: "Ranjit Avenue, Amritsar", comment: "Email verified" },
    { group: "B", number: 126, name: "Mohit Agarwal", city: "Aligarh", registration: "2024-04-06 12:10", email: "mohit.a@gmail.com", adress: "Ramghat Road, Aligarh", comment: "Active user" },
    { group: "C", number: 127, name: "Simran Kaur", city: "Ludhiana", registration: "2024-01-26 18:40", email: "simran.k@gmail.com", adress: "Model Town, Ludhiana", comment: "New registration" },
    { group: "A", number: 128, name: "Tarun Khanna", city: "Faridabad", registration: "2024-02-11 09:20", email: "tarun.k@gmail.com", adress: "Sector 21, Faridabad", comment: "Active user" },
    { group: "B", number: 129, name: "Neeraj Pandey", city: "Gwalior", registration: "2024-03-07 14:10", email: "neeraj.p@gmail.com", adress: "City Centre, Gwalior", comment: "Limited access" },
    { group: "C", number: 130, name: "Ayesha Khan", city: "Alwar", registration: "2024-04-15 11:45", email: "ayesha.k@gmail.com", adress: "Scheme 1, Alwar", comment: "Active user" }
];

function Registration() {
    return (
        <>
            <DashboardToolbar
                onCreate={() => console.log("Create account")}
                const filters={[
                    {
                        name: "Group",
                        value: "all",
                        onChange: (v) => console.log(v),
                        options: [
                            { label: "All", value: "all" },
                            { label: "General (Live)", value: "live" },
                            { label: "General (Demo)", value: "demo" },

                        ],
                    },
                    {
                        name: "Is Client",
                        value: "all",
                        onChange: (v) => console.log(v),
                        options: [
                            { label: "All", value: "all" },
                            { label: "Yes", value: "yes" },
                            { label: "No", value: "no" },
                        ],
                    },
                    {
                        name: "Registration Date",
                        value: "all",
                        onChange: (v) => console.log(v),
                        options: [
                            { label: "All", value: "all" },
                            { label: "December 2025", value: "yes" },
                            { label: "November 2025", value: "no" },
                            { label: "October 2025", value: "no" },
                            { label: "Choose", value: "no" },
                        ],
                    },
                    {
                        name: "Demo/Live",
                        value: "all",
                        onChange: (v) => console.log(v),
                        options: [
                            { label: "All", value: "all" },
                            { label: "Demo", value: "yes" },
                            { label: "Live", value: "no" },
                        ],
                    },
                ]}

                onSearch={(text) => console.log("Search:", text)}
            />
            {/* DataTable */}
            <DataTable
                columns={columns}
                data={data}
            />
        </>
    )
}

export default Registration