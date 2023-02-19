import React from 'react';

import Nav from '../NavbarFire';
import Page11 from '../Page11';
import { useNavigate,Navigate  } from "react-router-dom";

import { isAuthenticated,logout } from '../../services/Auth';
function Page1() {
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
        <Page11/>
        </>
        
     );
}

export default Page1;