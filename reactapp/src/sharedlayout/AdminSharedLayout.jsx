import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminSharedLayout() {
  return (
    <div>
      
      <Outlet/>
    </div>
  )
}