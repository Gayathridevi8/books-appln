import React from 'react';

import { useNavigate,Navigate  } from "react-router-dom";

import { isAuthenticated,logout } from '../../services/Auth';
import Nav from '../NavbarFire';
import Page88 from '../Page88';
function Page8() {
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
        <Page88/>
        </>
        
     );
}

export default Page8;