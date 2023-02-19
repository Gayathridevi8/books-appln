import React from 'react';


import { useNavigate,Navigate  } from "react-router-dom";

import { isAuthenticated,logout } from '../../services/Auth';
import Nav from '../NavbarFire';
import Page101 from '../Page101';

function Page10() {
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
        <Page101/>
        </>
        
     );
}

export default Page10;