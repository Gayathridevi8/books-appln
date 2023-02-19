import React from 'react';

import Nav from '../NavbarFire';
import Page111 from '../Page111';
import { useNavigate,Navigate  } from "react-router-dom";

import { isAuthenticated,logout } from '../../services/Auth';
function Page11() {
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
        <Page111/>
        </>
        
     );
}

export default Page11;