import React, { useState } from 'react'
import DashboardToolbar from '../../../components/dashboard-toolbar/DashboardToolbar'
import DataTable from '../../../components/uiComponents/DataTable'
import Pagination from '../../../components/uiComponents/Pagination';

const columns = [
    { header: "Group", field: "group" },
    { header: "Number", field: "number" },
    { header: "Name", field: "name" },
    { header: "Adress", field: "adress" },
    { header: "Email", field: "email" },
    { header: "Registration Ip", field: "registration" },
    { header: "Current IP", field: "current" },
    {
        header: "Status",
        field: "status",
        render: (value) => (
            <span className={` px-2 py-0.5 rounded text-xs font-semibold ${value === "Online" ? " text-green-600 " : "text-red-500"  } `}
            >
                {value}
            </span>
        ),
    },
    { header: "Authorisation Date", field: "authorisation" },
    { header: "Logout Date", field: "logout" },
];
// dummy data
const data = [
  {
    group: "A",
    number: 1001,
    name: "Rahul Sharma",
    adress: "Delhi, India",
    email: "rahul.sharma@gmail.com",
    registration: "192.168.1.10",
    current: "10.0.0.21",
    status: "Online",
    authorisation: "2024-01-12 10:15",
    logout: "2024-01-12 18:30",
  },
  {
    group: "B",
    number: 1002,
    name: "Anita Verma",
    adress: "Mumbai, India",
    email: "anita.verma@gmail.com",
    registration: "192.168.1.11",
    current: "10.0.0.22",
    status: "Offline",
    authorisation: "2024-01-13 09:40",
    logout: "2024-01-13 12:10",
  },
  {
    group: "A",
    number: 1003,
    name: "Suresh Kumar",
    adress: "Chennai, India",
    email: "suresh.kumar@gmail.com",
    registration: "192.168.1.12",
    current: "10.0.0.23",
    status: "Online",
    authorisation: "2024-01-14 11:05",
    logout: "2024-01-14 19:00",
  },
  {
    group: "C",
    number: 1004,
    name: "Pooja Singh",
    adress: "Lucknow, India",
    email: "pooja.singh@gmail.com",
    registration: "192.168.1.13",
    current: "10.0.0.24",
    status: "Offline",
    authorisation: "2024-01-15 08:55",
    logout: "2024-01-15 09:30",
  },
  {
    group: "B",
    number: 1005,
    name: "Amit Patel",
    adress: "Ahmedabad, India",
    email: "amit.patel@gmail.com",
    registration: "192.168.1.14",
    current: "10.0.0.25",
    status: "Online",
    authorisation: "2024-01-16 10:20",
    logout: "2024-01-16 18:10",
  },
  {
    group: "A",
    number: 1006,
    name: "Neha Joshi",
    adress: "Pune, India",
    email: "neha.joshi@gmail.com",
    registration: "192.168.1.15",
    current: "10.0.0.26",
    status: "Offline",
    authorisation: "2024-01-17 09:00",
    logout: "2024-01-17 11:45",
  },
  {
    group: "C",
    number: 1007,
    name: "Vikas Mehta",
    adress: "Jaipur, India",
    email: "vikas.mehta@gmail.com",
    registration: "192.168.1.16",
    current: "10.0.0.27",
    status: "Online",
    authorisation: "2024-01-18 12:30",
    logout: "2024-01-18 20:15",
  },
  {
    group: "B",
    number: 1008,
    name: "Kiran Rao",
    adress: "Hyderabad, India",
    email: "kiran.rao@gmail.com",
    registration: "192.168.1.17",
    current: "10.0.0.28",
    status: "Online",
    authorisation: "2024-01-19 10:10",
    logout: "2024-01-19 17:40",
  },
  {
    group: "A",
    number: 1009,
    name: "Manoj Yadav",
    adress: "Patna, India",
    email: "manoj.yadav@gmail.com",
    registration: "192.168.1.18",
    current: "10.0.0.29",
    status: "Offline",
    authorisation: "2024-01-20 08:45",
    logout: "2024-01-20 09:20",
  },
  {
    group: "C",
    number: 1010,
    name: "Sneha Kulkarni",
    adress: "Nagpur, India",
    email: "sneha.k@gmail.com",
    registration: "192.168.1.19",
    current: "10.0.0.30",
    status: "Online",
    authorisation: "2024-01-21 11:00",
    logout: "2024-01-21 18:50",
  },

  {
    group: "B",
    number: 1011,
    name: "Rohit Malhotra",
    adress: "Gurgaon, India",
    email: "rohit.m@gmail.com",
    registration: "192.168.1.20",
    current: "10.0.0.31",
    status: "Online",
    authorisation: "2024-01-22 10:30",
    logout: "2024-01-22 17:00",
  },
  {
    group: "A",
    number: 1012,
    name: "Nidhi Jain",
    adress: "Indore, India",
    email: "nidhi.j@gmail.com",
    registration: "192.168.1.21",
    current: "10.0.0.32",
    status: "Offline",
    authorisation: "2024-01-23 09:20",
    logout: "2024-01-23 13:10",
  },
  {
    group: "C",
    number: 1013,
    name: "Arjun Kapoor",
    adress: "Noida, India",
    email: "arjun.k@gmail.com",
    registration: "192.168.1.22",
    current: "10.0.0.33",
    status: "Online",
    authorisation: "2024-01-24 11:40",
    logout: "2024-01-24 19:25",
  },
  {
    group: "B",
    number: 1014,
    name: "Meera Nair",
    adress: "Kochi, India",
    email: "meera.nair@gmail.com",
    registration: "192.168.1.23",
    current: "10.0.0.34",
    status: "Online",
    authorisation: "2024-01-25 10:05",
    logout: "2024-01-25 18:35",
  },
  {
    group: "A",
    number: 1015,
    name: "Deepak Chauhan",
    adress: "Bhopal, India",
    email: "deepak.c@gmail.com",
    registration: "192.168.1.24",
    current: "10.0.0.35",
    status: "Offline",
    authorisation: "2024-01-26 08:15",
    logout: "2024-01-26 09:00",
  },

  {
    group: "C",
    number: 1016,
    name: "Isha Roy",
    adress: "Kolkata, India",
    email: "isha.roy@gmail.com",
    registration: "192.168.1.25",
    current: "10.0.0.36",
    status: "Online",
    authorisation: "2024-01-27 12:10",
    logout: "2024-01-27 20:00",
  },
  {
    group: "B",
    number: 1017,
    name: "Sanjay Gupta",
    adress: "Kanpur, India",
    email: "sanjay.g@gmail.com",
    registration: "192.168.1.26",
    current: "10.0.0.37",
    status: "Offline",
    authorisation: "2024-01-28 09:35",
    logout: "2024-01-28 12:45",
  },
  {
    group: "A",
    number: 1018,
    name: "Ritu Saxena",
    adress: "Agra, India",
    email: "ritu.s@gmail.com",
    registration: "192.168.1.27",
    current: "10.0.0.38",
    status: "Online",
    authorisation: "2024-01-29 10:50",
    logout: "2024-01-29 18:20",
  },
  {
    group: "C",
    number: 1019,
    name: "Alok Mishra",
    adress: "Prayagraj, India",
    email: "alok.m@gmail.com",
    registration: "192.168.1.28",
    current: "10.0.0.39",
    status: "Online",
    authorisation: "2024-01-30 11:30",
    logout: "2024-01-30 19:10",
  },
  {
    group: "B",
    number: 1020,
    name: "Kavita Desai",
    adress: "Surat, India",
    email: "kavita.d@gmail.com",
    registration: "192.168.1.29",
    current: "10.0.0.40",
    status: "Online",
    authorisation: "2024-01-31 10:00",
    logout: "2024-01-31 18:00",
  },

  {
    group: "A",
    number: 1021,
    name: "Naveen Reddy",
    adress: "Warangal, India",
    email: "naveen.r@gmail.com",
    registration: "192.168.1.30",
    current: "10.0.0.41",
    status: "Offline",
    authorisation: "2024-02-01 09:10",
    logout: "2024-02-01 11:20",
  },
  {
    group: "C",
    number: 1022,
    name: "Pankaj Soni",
    adress: "Udaipur, India",
    email: "pankaj.s@gmail.com",
    registration: "192.168.1.31",
    current: "10.0.0.42",
    status: "Online",
    authorisation: "2024-02-02 10:45",
    logout: "2024-02-02 19:00",
  },
  {
    group: "B",
    number: 1023,
    name: "Shweta Tiwari",
    adress: "Varanasi, India",
    email: "shweta.t@gmail.com",
    registration: "192.168.1.32",
    current: "10.0.0.43",
    status: "Online",
    authorisation: "2024-02-03 11:15",
    logout: "2024-02-03 18:45",
  },
  {
    group: "A",
    number: 1024,
    name: "Ankur Bansal",
    adress: "Meerut, India",
    email: "ankur.b@gmail.com",
    registration: "192.168.1.33",
    current: "10.0.0.44",
    status: "Offline",
    authorisation: "2024-02-04 08:35",
    logout: "2024-02-04 09:10",
  },
  {
    group: "C",
    number: 1025,
    name: "Payal Arora",
    adress: "Amritsar, India",
    email: "payal.a@gmail.com",
    registration: "192.168.1.34",
    current: "10.0.0.45",
    status: "Online",
    authorisation: "2024-02-05 10:25",
    logout: "2024-02-05 17:55",
  },
];

function Online() {
   const [currentPage, setCurrentPage] = useState(1);
      const handlePageChange = (page) => {
          setCurrentPage(page);
      };
      const rowsPerPage = 20;
      const startIndex = (currentPage - 1) * rowsPerPage;
      const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);
    return (
        <>
            <DashboardToolbar

                const filters={[
                    {
                        name: "The Group",
                        value: "all",
                        onChange: (v) => console.log(v),
                        options: [
                            { label: "All", value: "all" },
                            { label: "General (Live)", value: "live" },
                            { label: "General (Demo)", value: "demo" },

                        ],
                    },
                    {
                        name: "Online",
                        value: "all",
                        onChange: (v) => console.log(v),
                        options: [
                            { label: "All", value: "all" },
                            { label: "Yes", value: "yes" },
                            { label: "No", value: "no" },

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
                data={paginatedData}
                showPagination={true}
            />
             <div className="fixed bottom-8.5 left-0 right-0 z-50 bg-white ">
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(data.length / 10)} // example: 10 rows per page
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    )
}

export default Online;