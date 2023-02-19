import React from 'react';

import "./Compofound/style.css"
import Homepage from './components/Homepage'
import Categoriespage from './components/Categoriespage'
import Frontpage from './components/Frontpage'
import Navbar from './components/Navbar'

import Page1 from './components/pagesall/Page1';
import Page2 from './components/pagesall/Page2';
import Page3 from './components/pagesall/Page3';
import Page4 from './components/pagesall/Page4';
import Page5 from './components/pagesall/Page5';
import Page6 from './components/pagesall/Page6';
import Page7 from './components/pagesall/Page7';
import Page8 from './components/pagesall/Page8';
import Page9 from './components/pagesall/Page9';
import Page10 from './components/pagesall/Page10';
import Page11 from './components/pagesall/Page11';
import Page12 from './components/pagesall/Page12';
import Page13 from './components/pagesall/Page13';
import Page14 from './components/pagesall/Page14';
import Page15 from './components/pagesall/Page15';
import Page16 from './components/pagesall/Page16';
import Page17 from './components/pagesall/Page17';
import Page18 from './components/pagesall/Page18';

// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';



import FoundMain from './Compofound/FoundMain'
import Favorites from './Compofound/Favorites';
function App () {
  return (  
  <>
   <BrowserRouter>

   <Routes>

    <Route path='/register' element={ <RegisterPage/>}/>
    <Route path='/login' element={ <LoginPage/>}/>
    <Route path='/home' element={<Frontpage/>}/>
    <Route path='/' element={<Homepage/>}/>
    <Route path="/categories" element={<Categoriespage/>}/>
    <Route path="/bootstrap" element={<Page1/>}/>
    <Route path="/python" element={<Page2/>}/>
    <Route path="/js" element={<Page3/>}/>
    <Route path="/php" element={<Page4/>}/>
    <Route path="/ruby" element={<Page5/>}/>
    <Route path="/expressjs" element={<Page6/>}/>
    <Route path="/nodejs" element={<Page7/>}/>
    <Route path="/html" element={<Page8/>}/>
    <Route path="/c" element={<Page9/>}/>
    <Route path="/java" element={<Page10/>}/>
    <Route path="/r" element={<Page11/>}/>
    <Route path="/typescript" element={<Page12/>}/>
    <Route path="/lua" element={<Page13/>}/>
    <Route path="/powershell" element={<Page14/>}/>
    <Route path="/scala" element={<Page15/>}/>
    <Route path="/mongodb" element={<Page16/>}/>
    <Route path="/wordpress" element={<Page17/>}/>
    <Route path="/rust" element={<Page18/>}/>


    <Route path="/search" element={<FoundMain/>}/>
    
    <Route path='/favorites' element={<Favorites/>}/>
    


   </Routes>


   </BrowserRouter>

  
   

  </>
  );
}

export default App;





