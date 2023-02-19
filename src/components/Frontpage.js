import React from 'react';
import "./Frontpage.css"
import { Link } from 'react-router-dom';
import Nav from './NavbarFire';

import { useNavigate,Navigate  } from "react-router-dom";

import { isAuthenticated,logout } from "../services/Auth";
function Webwork() {
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
       {/* Main Section */}
       <Nav logoutUser={logoutUser}/>
        <section className='mainstt py-5' >
            <div className='containerer py-5'>
                <div className='row'>
                    <div className='col-lg-7 text-center mainstttext'>
                        <h1>Start Reading!!!<br/></h1>
                        <p className='ptag'>Let's be reasonable and add an eighth day to the week that is devoted exclusively to reading.</p>
                        {/* <input type="text" placeholder="Job Title Or Keyword"/> */}
                        <button className='btn2stt mt-5'>Get Started</button>
                    </div>
                </div>
            </div>
        </section>

{/* Another section */}
{/* <section className='cetastt py-5'>
    <div  className='container-fluid py-5 text-center'>
        {/* <p className='redstt'>FEATURED TOURS PACKAGES</p> */}
        {/* <h1>Browse Top Categories</h1>
        <div className='row py-5'>
            <div className='col-lg-11 m-auto pt-3'>
                <div className='row py-5'>
                    <div className='col-lg-3 pt-3'>
                        <div className='card py-3'>
                            <div className='card-body'>
                                <img src="./images/child.jpg" className='img-fluid my-3' alt=''/>
                                <h6>Design & Creative</h6>
                                <h6 className='redstt'>(786)</h6>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-3 pt-3'>
                        <div className='card py-3'>
                            <div className='card-body'>
                                <img src="./images/child.jpg" className='img-fluid my-3' alt=''/>
                                <h6>Design & Creative</h6>
                                <h6 className='redstt'>(786)</h6>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-3 pt-3'>
                        <div className='card py-3'>
                            <div className='card-body'>
                                <img src="./images/child.jpg" className='img-fluid my-3' alt=''/>
                                <h6>Design & Creative</h6>
                                <h6 className='redstt'>(786)</h6>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-3 pt-3'>
                        <div className='card py-3'>
                            <div className='card-body'>
                                <img src="./images/child.jpg" className='img-fluid my-3' alt=''/>
                                <h6>Design & Creative</h6>
                                <h6 className='redstt'>(786)</h6>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='row pb-3'>
                    <div className='col-lg-3 pt-3'>
                        <div className='card py-3'>
                            <div className='card-body'>
                                <img src="./images/child.jpg" className='img-fluid my-3' alt=''/>
                                <h6>Design & Creative</h6>
                                <h6 className='redstt'>(786)</h6>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-3 pt-3'>
                        <div className='card py-3'>
                            <div className='card-body'>
                                <img src="./images/child.jpg" className='img-fluid my-3' alt=''/>
                                <h6>Design & Creative</h6>
                                <h6 className='redstt'>(786)</h6>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-3 pt-3'>
                        <div className='card py-3'>
                            <div className='card-body'>
                                <img src="./images/child.jpg" className='img-fluid my-3' alt=''/>
                                <h6>Design & Creative</h6>
                                <h6 className='redstt'>(786)</h6>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-3 pt-3'>
                        <div className='card py-3'>
                            <div className='card-body'>
                                <img src="./images/child.jpg" className='img-fluid my-3' alt=''/>
                                <h6>Design & Creative</h6>
                                <h6 className='redstt'>(786)</h6>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='row py-5'>
                    <div className='col-lg-5 m-auto'>
                        <button className='btn3stt'>BROWSE ALL CATEGORIES</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</section> */} 
{/* Next Section */}
<section className='jobstt py-5'>
    <div className='containerer  py-5'>
        <div className='row py-5'>
         
            <div className='col-lg-5'>
            {/* <img src="./images/creator.png"/> */}
            <img src="./images/create (1).jpg"/>
            </div>
            <div className='col-lg-7 ml-30 divcontentfront'>
                {/* <p className='redstt'>WHAT WE ARE DOING</p> */}
                <div className='h1talent'>
                <h1 className='talented ml-20'>CREATION OF OUR WEBSITE</h1>
                </div>
                <p className='whatpossp' style={{fontWeight: "700"}}>
                    We have created our Website by fetching information from the API. API stands for "Application Programming Interface".
                    It is a software intermediary that allows two Applications to talk to each other. APIs are used to integrate new Applications with existing software systems.
                    This increases development speed because each functionality doesn't have to be written from scratch. We can use APIs to leverage existing code.
                               </p>
                <p>
                </p>
                {/* <button className='btn4stt mt-3'>POST A JOB</button> */}

            </div>

        </div>
    </div>
</section>
<section className='resumestt py-5 text-center text-white'>
    <div className='containerer py-5'>
        <div className='row py-5'>
            <div className='col-lg-10 m-auto'>
                {/* <p className='pb-3'>FEATURED TOURS PACKAGES</p> */}
                <h1>Believe you can and you're halfway there!!</h1>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-5 m-auto'>
                <button className='btn3stt'>START</button>

            </div>
        </div>
    </div>
</section>
{/* Next Section */}
<section className='jobstt py-5'>
    <div className='containerer py-5'>
        <div className='row py-5'>
         
            <div className='col-lg-5'>
            <img src='https://static8.depositphotos.com/1035122/948/i/450/depositphotos_9488048-stock-photo-woman-compare-books-and-digital.jpg'/>
            {/* <img src="https://img.freepik.com/premium-photo/people-technology-children-concept-happy-smiling-girl-with-tablet-pc-computer-city-background_380164-86497.jpg?w=826"/> */}
            </div>
            <div className='col-lg-7 ml-30 divcontentfront'>
                {/* <p className='redstt'>WHAT WE ARE DOING</p> */}
                <h1 className='talented ml-20'>Want to know what's possible in MyBook??</h1>
                <p className='whatpossp' style={{fontWeight: "700"}}>
                You can enhance your knowledge in certain subjects we have provided for you. You can buy the book by visiting the link provided.                </p>
                <p>
                </p>
                <button className='btn4stt mt-3'>ENHANCE</button>

            </div>

        </div>
    </div>
</section>
{/* Next Section */}
<section className='applystt py-5'>
    <div className='containerer text-white text-center py-5'>
        {/* <p className='redstt'>APPLY PROCESS</p> */}
        <h1>How it works</h1>
        <div className='row py-5'>
            <div className='col-lg-4 pt-2'>
                <div className='card p-3 cardfront'>
                    <div className='card-body text-center'>
                        <div className='cir1stt pt-3 mb-3'>
                            <img src='./images/app.png' className='img-fluid' alt=''/>
                        </div>
                        <h2>Browse Categories</h2>
                        <p className='py-3'>You can browse through the books in the Categories provided.</p>
                    </div>
                </div>

            </div>
            <div className='col-lg-4 pt-2'>
                <div className='card p-3 cardfront'>
                    <div className='card-body text-center'>
                        <div className='cir1stt pt-3 mb-3'>
                            <img src='./images/search.png' className='img-fluid' alt=''/>
                        </div>
                        <h2>Search any book</h2>
                        <p className='py-3'>You can visit whatever the books of any kind by simply Searching it by its name.</p>
                    </div>
                </div>

            </div>
            <div className='col-lg-4 pt-2'>
                <div className='card p-3 cardfront'>
                    <div className='card-body text-center'>
                        <div className='cir1stt pt-3 mb-3'>
                            <img src='./images/favourite.png' className='img-fluid' alt=''/>
                        </div>
                        <h2>Make your favourites list</h2>
                        <p className='py-3'>You can create your own favourites by adding it to the favourites list.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

{/* Carousal section */}

<section className='sliderstt py-5'>
    <div className='container text-center py-5'>
        <div className='row'>
            <div className='col-lg-9 m-auto'>
            <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/george.jpg" class="img-fluid mb-4 avatar" alt="..."/>
      <h4>GEORGE R.R. MARTIN</h4>
      
      <p className='peracstt py-3'>American novelist</p>
      <div class="gdfrstt">
        
        
        <p >
        "A reader lives a thousand lives before he dies. The man who never reads lives only one."  
          </p>
        </div>
      
    </div>
    <div class="carousel-item">
      <img src="./images/harry.jpg" class="img-fluid mb-4 avatar" alt="..."/>
      <h4>HARRY TRUMAN </h4>
      <p>Creative Director</p>
      <div class="gdfrstt">
        
        {/* <h2 class="ours">GAYATHRI DEVI P</h2> */}
        <p >
       Not all readers are leaders, but all leaders are readers.
          </p>
        </div>
    </div>
    <div class="carousel-item">
      <img src="./images/fran.jpg" class="img-fluid mb-4 avatar" alt="..."/>
      <h4>FRAN LEBOWITZ</h4>
      <p>American author</p>
      <div class="gdfrstt">
        
        {/* <h2 class="ours">GAYATHRI DEVI P</h2> */}
        <p >
        Think before you speak. Read before you think.  
          </p>
        </div>
    </div>
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
        </div>
    </div>
</section>

{/* Footer Section */}

<section className='footerstt pt-5 '>
    <div className='container-fluid pt-5 '>
        <div className='row'>
            <div className='col-lg-8 m-auto'>
                <div className='row pb-4 '>
                    {/* <div className='col-lg-8'>
                        <h3 className='py-5'>ABOUT US</h3>
                        <p>fja dfkaj; jdfja djaj nncn diaj dfaj djjfa ddn kf dfjkja fkjf</p>
                    </div> */}
                    <div className='col-lg-8 '>
                        <h3 className='py-5'>CONTACT INFO</h3>
                        <p>Address: 26, Karunanidhi Nagar, Sowripalayam, Peelamedu, Coimbatore-641028</p>
                        <p className='linkstt pt-3'>Phone: +91 7339699478</p>
                        <p className='linkstt'>Email: gayucbe2002@gmail.com</p>
                    </div>
                    {/* <div className='col-lg-3'>
                        <h3 className='py-5'>IMPORTANT LINK</h3>
                        <p className='linkstt'>View Project</p>
                        <p className='linkstt'>Contact Us</p>
                        <p className='linkstt'>Testimonial</p>
                        <p className='linkstt'>Properties</p>
                        <p className='linkstt'>Support</p>
                    </div> */}
                    {/* <div className='col-lg-3'>
                        <h3 className='py-5'>NEWSLETTER</h3>
                        <p>Heaven fruitful doesn't over lesser in days. Appear creeping</p>
                        <input type="text" placeholder="Enter Your Email"></input>
                        <button>Go</button>
                    </div> */}
                </div>
                <hr/>
                {/* <p className='py-4'>Copyright @2021 All rights reserved | This template is made with by <span className='redstt'>GD</span></p> */}
               
            </div>
        </div>
    </div>
</section>

        </>
     );
}

export default Webwork;
