import React from 'react';
import Nav from '../NavbarFire';
import Page141 from '../Page141';
import { useNavigate,Navigate  } from "react-router-dom";

import { isAuthenticated,logout } from '../../services/Auth';
function Page14() {
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
        <Page141/>
        </>
        
     );
}

export default Page14;