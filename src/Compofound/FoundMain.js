import react ,{useState}from "react";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Search.css"
import "./stylenew.css"
import Nav from "../components/NavbarFire";
import { useNavigate,Navigate  } from "react-router-dom";

import { isAuthenticated,logout } from "../services/Auth";

const Main=()=>{

    const navigate=useNavigate();
    const logoutUser =()=>{
     logout();
     navigate('/login');
  }

    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    if(!isAuthenticated()){
        //redirect user to dashboard page
        return <Navigate to="/login"/>
        }
    return(
        <>
        <div className="foundmainsearch"></div>
        {/* <Link to="/favorites"><h1>Favorites</h1></Link> */}
        <Nav logoutUser={logoutUser}/>
        
    <div className='containerfound1'>
        
            <div className='search-bar'>
                
                <input type='text' placeholder="Search anything"  value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                <button><i className="fas fa-search"></i></button>
            </div>
    </div>
    
    <div className="containerfavo">
        {
            <Card book={bookData}/>
        }  
    </div>
        </>
    )
}
export default Main;