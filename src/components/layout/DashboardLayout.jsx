import React from 'react'
import TopNavbar from '../uiComponents/TopNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../uiComponents/Footer'

function DashboardLayout() {
  return (
   <div className="min-h-screen">
      {/* Top Navigation visible everywhere */}
      <TopNavbar/>
      {/* Routed pages */}
      <div className="">
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default DashboardLayout