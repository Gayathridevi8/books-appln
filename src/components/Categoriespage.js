import React from "react";
import { Link } from "react-router-dom";
import "./Categoriespage.css"
import Nav from "./NavbarFire";
import { useNavigate,Navigate  } from "react-router-dom";

import { isAuthenticated,logout } from "../services/Auth";
function Categories(){
  const navigate=useNavigate();
  const logoutUser =()=>{
   logout();
   navigate('/login');
}


if(!isAuthenticated()){
//redirect user to dashboard page
return <Navigate to="/login"/>
}
    return(
        <>
        <Nav logoutUser={logoutUser}/>
       
       

    <section class = "plangs">
      <div class = "categs-container">
        <div class = "categs-head">
          <h2>SUGGESTED PROGRAMMING LANGUAGES</h2>
          <p>Let's start enhancing our knowledge!!!</p>
        </div>

       

        <div class = "allcategs">
       
          <div class = "allbooks featured">
            <div class = "boooks-img">
              <img src = "./images/python.png" alt = "img"/>
            </div>
            <div class = "boook-content">
              <h2 class = "boook-name"><Link to="/python" className="linkcategor fw-bold">PYTHON</Link></h2>
              <div class = "lines"></div>
              {/* <h3 class = "food-price">$</h3> */}
            
              {/* <p class = "category">Categories: <span>Fe</span></p> */}
            </div>
          </div>
        
          <div class = "allbooks today">
            <div class = "boooks-img">
              <img src = "./images/bootstrap.png" alt = "img"/>
            </div>
            <div class = "boook-content">
              <h2 class = "boook-name"><Link to="/bootstrap" className="linkcategor fw-bold">BOOTSTRAP</Link></h2>
              <div class = "lines"></div>
              {/* <h3 class = "food-price">$</h3> */}
             
              {/* <p class = "category">Categories: <span>To</span></p> */}
            </div>
          </div>
          
          <div class = "allbooks new-arrival">
            <div class = "boooks-img">
              <img src = "./images/rust.png" alt = "img"/>
            </div>
            <div class = "boook-content">
              <h2 class = "boook-name"><Link to="/rust" className="linkcategor fw-bold">RUST</Link></h2>
              <div class = "lines"></div>
              {/* <h3 class = "food-price">$</h3> */}
             
              {/* <p class = "category">Categories: <span>Ne</span></p> */}
            </div>
          </div>
         
          <div class = "allbooks featured">
            <div class = "boooks-img">
              <img src = "./images/php.png" alt = "img"/>
            </div>
            <div class = "boook-content">
              <h2 class = "boook-name"><Link to="/php" className="linkcategor fw-bold">PHP</Link></h2>
              <div class = "lines"></div>
              {/* <h3 class = "food-price">$</h3> */}
             
              {/* <p class = "category">Categories: <span>Fe</span></p> */}
            </div>
          </div>
         
          <div class = "allbooks today">
            <div class = "boooks-img">
              <img src = "./images/js.png" alt = "img"/>
            </div>
            <div class = "boook-content">
              <h2 class = "boook-name"><Link to="/js" className="linkcategor fw-bold">JAVASCRIPT</Link></h2>
              <div class = "lines"></div>
              {/* <h3 class = "food-price">$</h3> */}
           
              {/* <p class = "category">Categories: <span>T</span></p> */}
            </div>
          </div>
       
          <div class = "allbooks new-arrival">
            <div class = "boooks-img">
              <img src = "./images/ruby.png" alt = "img"/>
            </div>
            <div class = "boook-content">
              <h2 class = "boook-name"><Link to="/ruby" className="linkcategor fw-bold">RUBY</Link></h2>
              <div class = "lines"></div>
              {/* <h3 class = "food-price">$</h3> */}
            
              {/* <p class = "category">Categories: <span>N</span></p> */}
            </div>
          </div>
        
          <div class = "allbooks featured">
            <div class = "boooks-img">
              <img src = "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.png" alt = "img"/>
            </div>
            <div class = "boook-content">
              <h2 class = "boook-name"><Link to="/expressjs" className="linkcategor fw-bold">EXPRESS JS</Link></h2>
              <div class = "lines"></div>
              {/* <h3 class = "food-price">$</h3> */}
           
              {/* <p class = "category">Categories: <span>Fe</span></p> */}
            </div>
          </div>
         
          <div class = "allbooks today">
            <div class = "boooks-img">
              <img src = "./images/nodejs.png" alt = "img"/>
            </div>
            <div class = "boook-content">
              <h2 class = "boook-name"><Link to="/nodejs" className="linkcategor fw-bold">NODE JS</Link></h2>
              <div class = "lines"></div>
              {/* <h3 class = "food-price">$</h3> */}
           
              {/* <p class = "category">Categories: <span>T</span></p>
              
              */}
            </div>
          </div>
          
          <div class = "allbooks new-arrival">
            <div class = "boooks-img">
              <img src = "./images/html.png" alt = "img"/>
            </div>
            <div class = "boook-content">
              <h2 class = "boook-name"><Link to="/html" className="linkcategor fw-bold">HTML</Link></h2>
              <div class = "lines"></div>
              {/* <h3 class = "food-price">$</h3> */}
           

              {/* <p class = "category">Categories: <span>N</span></p> */}
            </div>
          </div>
          
          <div class = "allbooks featured">
            <div class = "boooks-img">
              <img src = "./images/C.png" alt = "img"/>
            </div>
            <div class = "boook-content">
              <h2 class = "boook-name"><Link to="/c" className="linkcategor fw-bold">C</Link></h2>
              <div class = "lines"></div>
              {/* <h3 class = "food-price">$</h3> */}
          
              {/* <p class = "category">Categories: <span>F</span></p> */}
            </div>
          </div>
         
          <div class = "allbooks today">
            <div class = "boooks-img">
              <img src = "https://abrudz.github.io/logos/Java.svg" alt = "img"/>
            </div>
            <div class = "boook-content">
              <h2 class = "boook-name"><Link to="/java" className="linkcategor fw-bold">JAVA</Link></h2>
              <div class = "lines"></div>
              {/* <h3 class = "food-price">$</h3> */}
          
              {/* <p class = "category">Categories: <span>T</span></p> */}
            </div>
          </div>
         
          <div class = "allbooks new-arrival">
            <div class = "boooks-img">
              <img src = "./images/r.png" alt = "img"/>
            </div>
            <div class = "boook-content">
              <h2 class = "boook-name"><Link to="/r" className="linkcategor fw-bold">R</Link></h2>
              <div class = "lines"></div>
              {/* <h3 class = "food-price">$</h3> */}
            
              {/* <p class = "category">Categories: <span>N</span></p> */}
            </div>
          </div>
         
          <div class = "allbooks featured">
            <div class = "boooks-img">
              <img src = "./images/typescript.png" alt = "img"/>
            </div>
            <div class = "boook-content">
              <h2 class = "boook-name"><Link to="/typescript" className="linkcategor fw-bold">TYPESCRIPT</Link></h2>
              <div class = "lines"></div>
              {/* <h3 class = "food-price">$</h3> */}
           
              {/* <p class = "category">Categories: <span>F</span></p> */}
            </div>
          </div>
        
          <div class = "allbooks today">
            <div class = "boooks-img">
              <img src = "./images/lua.png" alt = "img"/>
            </div>
            <div class = "boook-content">
              <h2 class = "boook-name"><Link to="/lua" className="linkcategor fw-bold">LUA</Link></h2>
              <div class = "lines"></div>
              {/* <h3 class = "food-price">$</h3> */}
             
              {/* <p class = "category">Categories: <span>T</span></p> */}
            </div>
          </div>
          
          <div class = "allbooks new-arrival">
            <div class = "boooks-img">
              <img src = "./images/powershell.png" alt = "img"/>
            </div>
            <div class = "boook-content">
              <h2 class = "boook-name"><Link to="/powershell" className="linkcategor fw-bold">POWERSHELL</Link></h2>
              <div class = "lines"></div>
              {/* <h3 class = "food-price">$</h3> */}
             
              {/* <p class = "category">Categories: <span>n</span></p> */}
            </div>
          </div>
         
          <div class = "allbooks featured">
            <div class = "boooks-img">
              <img src = "./images/scala.png" alt = "img"/>
            </div>
            <div class = "boook-content">
              <h2 class = "boook-name"><Link to="/scala" className="linkcategor fw-bold"> SCALA</Link></h2>
              <div class = "lines"></div>
              {/* <h3 class = "food-price">$</h3> */}
         
              {/* <p class = "category">Categories: <span>F</span></p> */}
            </div>
          </div>
         
          <div class = "allbooks today">
            <div class = "boooks-img">
              <img src = "./images/mongodb.png" alt = "img"/>
            </div>
            <div class = "boook-content">
              <h2 class = "boook-name"><Link to="/mongodb" className="linkcategor fw-bold">MONGODB</Link></h2>
              <div class = "lines"></div>
              {/* <h3 class = "food-price">$</h3> */}
          
              {/* <p class = "category">Categories: <span>T</span></p> */}
            </div>
          </div>

          
          <div class = "allbooks new-arrival">
            <div class = "boooks-img">
              <img src = "./images/wordpress.png" alt = "img"/>
            </div>
            <div class = "boook-content">
              <h2 class = "boook-name"><Link to="/wordpress " className="linkcategor fw-bold">WORDPRESS</Link></h2>
              <div class = "lines"></div>
              {/* <h3 class = "food-price">$</h3> */}
            
              {/* <p class = "category">Categories: <span>N</span></p> */}
            </div>
          </div>
        
        </div>
      </div>
    </section>

    

    

    
    
    
        </>
    )
}
export default Categories