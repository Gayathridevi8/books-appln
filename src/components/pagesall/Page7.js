import React from 'react';

import { useNavigate,Navigate  } from "react-router-dom";

import { isAuthenticated,logout } from '../../services/Auth';
import Nav from '../NavbarFire';
import Page77 from '../Page77';
function Page7() {
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
        <Page77/>
        </>
        
     );
}

export default Page7;