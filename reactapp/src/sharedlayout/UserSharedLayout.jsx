import React from 'react'
import { Outlet } from 'react-router-dom'
import UserNavbar from '../components/Navbar/UserNavbar'


export default function UserSharedLayout() {
  return (
    <div>
      <UserNavbar/>
      <Outlet/>
    </div>
  )
}
