import React from 'react';

import Nav from '../NavbarFire';
import Page181 from '../Page181';
import { useNavigate,Navigate  } from "react-router-dom";

import { isAuthenticated,logout } from '../../services/Auth';

function Page18() {
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
        <Page181/>
        </>
        
     );
}

export default Page18;