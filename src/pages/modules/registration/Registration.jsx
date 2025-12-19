import React from 'react'
import DashboardToolbar from '../../../components/dashboard-toolbar/DashboardToolbar'

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


        </>
    )
}

export default Registration