import React from "react"
import "./Homepage.css"


import { Link } from "react-router-dom"
import NavHome from "./NavbarHomeFire"
function Navbar1(){
    return<>
  {/* <header>
  <div class="nav">
    
    <img src="logobook.png" alt="logo"height="142px" width="250px"/>
 

  <ul>

    <li><a href="home.html">Home</a></li>
   <li><a href="aboutus.html">About Us</a></li>
   <li><a href="service.html">Services</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="home.html"><button>TAKE ACTION</button></a></li>
   
  </ul>
   
  
  </div>
</header> */}
 {/* <div id="headerhome">
            <img src="./images/logobook.png" alt="Logo"/>
            <ul>
               
                <li><Link to="/register">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div> */}
       
        



       <NavHome/>
        <div className='herobanner'>
       
            <div className='contentbanner'>
            <h1>LET'S GET STARTED!!!</h1>
            <p>Make your imagination explore</p>
            </div>
           
            <img src="./images/child1.jpg"/>
            <div className='barbanner'></div>
        </div>
    
    </>
}
export default Navbar1