


import { Link } from "react-router-dom"
import { isAuthenticated } from "../services/Auth"
import "./NavbarFire.css"
export default function NavHome(props){


    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
                <a className="navbar-brand" href="#"><img className="imgfire" src="logobook.png" alt="logo"/></a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav me-auto">
     
    </ul>
    <span class="navbar-text">
    <ul className="navbar-nav mr-auto heyynavhome"  >
                         <li className="nav-item"><Link className="nav-link heyyy text-light" to="/register">Register</Link></li>
                        <li><Link className="nav-link heyyy text-light" to="/login" >Login</Link></li>
                        {/* {isAuthenticated()?<li className="nav-item"><Link className="nav-link heyyy text-light" to="/dashboard" >Home</Link></li>:null}
                        {isAuthenticated()?<li><Link className="nav-link heyyy text-light" to="/categories"  style={{cursor:"pointer"}} >Categories</Link></li>:null}
                        {/* {isAuthenticated()?<li><a className="nav-link heyyy text-light"  onClick={props.logoutUser} href=".createfr" style={{cursor:"pointer"}} >Creation</a></li>:null} */}
                        {/* {isAuthenticated()?<li><a className="nav-link heyyy text-light"  onClick={props.logoutUser} style={{cursor:"pointer"}} >Logout</a></li>:null} */} 
                    </ul>
    </span>
  </div>
</nav>
    )
}