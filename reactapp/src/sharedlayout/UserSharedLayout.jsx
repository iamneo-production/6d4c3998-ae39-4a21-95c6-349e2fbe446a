import React from 'react'
import { Outlet } from 'react-router-dom'
<<<<<<< HEAD
import UserNavbar from '../components/Navbar/UserNavbar/UserNavbar'
=======
import Navbar from '../components/Navbar'
>>>>>>> 97abf19 (user-admin-routes-protection)


export default function UserSharedLayout() {
  return (
    <div>
<<<<<<< HEAD
      <UserNavbar/>
=======
      <Navbar/>
>>>>>>> 97abf19 (user-admin-routes-protection)
      <Outlet/>
    </div>
  )
}
