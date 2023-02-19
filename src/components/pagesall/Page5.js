import React from 'react';

import Nav from '../NavbarFire';
import Page55 from '../Page55';
import { useNavigate,Navigate  } from "react-router-dom";

import { isAuthenticated,logout } from '../../services/Auth';

function Page5() {
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
        <Page55/>
        </>
        
     );
}

export default Page5;