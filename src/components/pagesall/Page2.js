import React from 'react';

import Nav from '../NavbarFire';
import Page22 from '../Page22';
import { useNavigate,Navigate  } from "react-router-dom";

import { isAuthenticated,logout } from '../../services/Auth';
function Page2() {
    const navigate=useNavigate();
  const logoutUser =()=>{
   logout();
   navigate('/login');
}


if(!isAuthenticated()){
//redirect user to dashboard page
return <Navigate to="/login"/>
}
    return ( 
        <>
        <Nav logoutUser={logoutUser}/>
        <Page22/>
        </>
        
     );
}

export default Page2;