import React from 'react';

import Nav from '../NavbarFire';
import Page171 from '../Page171';
import { useNavigate,Navigate  } from "react-router-dom";

import { isAuthenticated,logout } from '../../services/Auth';

function Page17() {
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
        <Page171/>
        </>
        
     );
}

export default Page17;