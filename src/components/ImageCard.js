
import React, { useState } from 'react'
import "./ImageCard.css"
export default function ImageCard(props){
  
    return(
        <div className='p-2 port cardforeachcateg'>
     
               <div className="cardforcategory" style={{width: 350}}>
                <div className='justify-content-center'>
                <img src={props.volumeInfo.imageLinks.smallThumbnail} className="card-img-top p-4"  width="20" height="200"/>
                
               
                <p></p>
                
                </div>
  <div className="card-bodycateg">
    <h4 className="card-title cardcategh4">{props.volumeInfo.title.toUpperCase()}</h4>
    <h5 className="card-title cardcategh5"><span className='authors'>Authors: </span>{props.volumeInfo.authors}</h5>
   
    <a href={props.volumeInfo.infoLink} className="readbook">Click to Read the Book</a>
   

  </div>
</div>
        </div>
    )
}







       {/* <div className="card" style={{width: 300}} onClick={()=>{setShow(true);setItem(props)}}> */}
         // const [show,setShow]=useState(false);
    // const [bookItem,setItem]=useState();
     {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a> */}




    