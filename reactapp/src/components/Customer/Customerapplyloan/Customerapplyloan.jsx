import React from 'react'
import { Link } from 'react-router-dom'
export default function Customerapplyloan() {
  return (
    <div>
      <h1>This is home page</h1>
      Apply loan
      <div>
      <Link to={'/user/login'}>
        Logout
      </Link>
      </div>
    </div>
  )
}
