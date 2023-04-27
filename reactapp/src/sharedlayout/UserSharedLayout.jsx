import React from 'react'
import { Outlet } from 'react-router-dom'
import UserNavbar from '../components/Navbar/UserNavbar/UserNavbar'


export default function UserSharedLayout() {
  return (
    <div>
      <UserNavbar/>
      <Outlet/>
    </div>
  )
}
