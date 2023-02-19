import React from 'react';
import { useNavigate,Navigate  } from "react-router-dom";

import { isAuthenticated,logout } from '../../services/Auth';
import Nav from '../NavbarFire';
import Page66 from '../Page66';
function Page6() {
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
        <Page66/>
        </>
        
     );
}

export default Page6;