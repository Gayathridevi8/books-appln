import react from "react";
import { useState } from "react";
import Modalnew from "./Modal";
import "./stylenew.css"
import { useAppContext } from "./context/appContext";
const Cardnew = ({ book }) => {

    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    const {favorites,addToFavorites,removeFromFavorites} = useAppContext();
    console.log('favorites are', favorites);

    const favoritesChecker = (id) =>{
        const boolean = favorites.some((item)=>item.id === id);
        return boolean;
    }





    return (
        <>
            {
                book.map((item) => {
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
    <button classname="letsfav"onClick={()=>removeFromFavorites(item.id)} style={{fontWeight: 850}} >
      Remove from favourites
      </button>
  ):(
  <button className="letsunfav" onClick={()=>addToFavorites(item)} style={{fontWeight: 850}}>
      Add to favourites
      </button>
  )} 
                            </div>
                              <Modalnew show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </>
                        )
                    }
                    
                })
            }

        </>
    )
}
export default Cardnew;

