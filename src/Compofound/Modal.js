import react from 'react';
import "./stylenew.css"
const Modalnew=({show,item,onClose})=>{
    if(!show)
    {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return(
        <>
            <div className="overlayfov">
                <div className="overlay-innerfov">
                    <button className="closefov" onClick={onClose}><i class="fas fa-times"></i></button>
                    <div className="inner-boxfov">
                        <img src={thumbnail} alt="" />
                        <div className="infofov">
                            <h1>{item.volumeInfo.title}</h1>
                            <h3>{item.volumeInfo.authors}</h3>
                            {/* <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br/> */}
                            <a href={item.volumeInfo.previewLink} ><button className="infofovaa">More</button></a>
                        </div>
                    </div>
                    <h4 className="descriptionfov">{item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}
export default Modalnew;