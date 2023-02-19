import React from "react";
import '../App';
import { useAppContext } from "./context/appContext";
import { useState } from "react";
import Modalnew from "./Modal";
import "./favorites.css"
import Nav from "../components/NavbarFire";
import { useNavigate,Navigate  } from "react-router-dom";
import { isAuthenticated,logout } from "../services/Auth";


const Favorites=()=>{
    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    const {favorites,addToFavorites,removeFromFavorites} = useAppContext();
    console.log('favorites are', favorites);

    const favoritesChecker = (id) =>{
        const boolean = favorites.some((item)=>item.id === id);
        return boolean;
    }
    console.log(favorites)
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
       <h1 className="text-center py-5 h1frfav">YOUR FAVORITES</h1>
    <div className="containerfavo">
             { favorites.length>0 ?
                   favorites.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!= undefined && amount !=undefined)
                    {
                        return (
                            <>
                            <div className="wholecardsfov">
                            <div className="cardfov" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumbnail} alt="" />
                                <div className="bottomfov">
                                    <h3 className="titlefov">{item.volumeInfo.title}</h3>
                                   
                               
                                    
                                </div>
                              
                            </div>
                            {favoritesChecker(item.id)?(
                                  <button onClick={()=>removeFromFavorites(item.id)}>
                                    Remove from favourites
                                    </button>
                                ):(
                                <button onClick={()=>addToFavorites(item)}>
                                    Add to favourites
                                    </button>
                                )}


                            </div>
                              <Modalnew show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </>
                        )
                    }
                    
                }):<h2>No favorites yett</h2>
            }
    </div>
    </>
    )
}


export default Favorites