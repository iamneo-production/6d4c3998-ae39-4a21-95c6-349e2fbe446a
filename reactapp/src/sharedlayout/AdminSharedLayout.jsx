import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from "../components/Navbar/AdminNavbar/AdminNavbar"

export default function AdminSharedLayout() {
  return (
    <div>
      <AdminNavbar/>
      <Outlet/>
    </div>
  )
}