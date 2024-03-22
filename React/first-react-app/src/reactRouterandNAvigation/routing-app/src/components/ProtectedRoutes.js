import React from 'react'
import { Navigate, useNavigate ,Outlet} from 'react-router-dom';

function ProtectedRoutes() {
    const isLoggedIn=false;
    const navigate=useNavigate();
  return 
    <>{isLoggedIn?<Outlet />:<Navigate to="/login"></Navigate>}</>
   
}

export default ProtectedRoutes
