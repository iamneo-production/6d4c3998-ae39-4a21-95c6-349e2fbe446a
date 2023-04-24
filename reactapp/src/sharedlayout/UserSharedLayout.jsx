import React from 'react'
import { Outlet } from 'react-router-dom'

export default function UserSharedLayout() {
  return (
    <div>
      {/* <Navbar/> */}
      <Outlet/>
    </div>
  )
}
