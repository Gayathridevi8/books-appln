
// java
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';

import axios from 'axios';
import "./Page1.css"
import ImageCard from './ImageCard';
function Page101() {
  const [currencyList, setCurrencyList] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => setSearch(e.target.value);

  useEffect(() => {
      axios.get('https://www.googleapis.com/books/v1/volumes?q=java&key=AIzaSyBv_n9DMP5efHjBhAlWJAxaiD5UbNyy0ng')
      .then((response)=>setCurrencyList(response.data.items))
  }, [])


  return (
    <div className="App"> 
    
    <div className="header p-2">
   <h2>Do</h2>
   <div className="row justify-content-center">
    <div className="searchcateg col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-4 mt-3 mb-3">
    <input 
    class="form-control me-2" 
    type="search"
     placeholder="Search" 
     aria-label="Search"
     onChange={handleSearch}
     />
    </div>
  
     </div>
     </div>

   
     <div className='p-5 content d-flex flex-wrap justify-content-center mt-1'>
      {currencyList.filter((currency) => currency.volumeInfo.title.toLowerCase().includes(search.toLowerCase())).map((currency)=> (
        <ImageCard {...currency} />
      ))}
     </div>
    </div>
  );
}

export default Page101;
