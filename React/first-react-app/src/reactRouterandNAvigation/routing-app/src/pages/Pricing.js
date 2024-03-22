import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
function Pricing() {
    const location=useLocation();
  return (
    <div>
      Show Pricing
      <nav>
        <Link to={location.pathname+"/free"}>FreeLink</Link>
        <Link to={location.pathname+"/premium"}>PremiumLink</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Pricing
