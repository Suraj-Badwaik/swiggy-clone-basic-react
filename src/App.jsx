
import './App.css';
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Restaurant from './components/Restaurant';
import Payment from './components/Payment';
// import React from 'react';
// import Navbar from './components/Navbar';
import userInfo from "./data/userInfo.json";
import restaurant from "./data/restaurant.json";
import offers from './data/offers.json';
import { useState } from 'react';



const filters = {
  1:"Cost High to Lost",
  2:"Cost Lost to High",
  3:"Ratings",
  4:"Delivery Time",
  5:"Relevance",
}

function App() {
  const [filterBy, setFilterBy] = useState("");
  const [data, setData] = useState(restaurant);

  const updateFilter = (newFilter) =>{
  console.log('newFilter:', newFilter)

    switch(newFilter){
      case "1" :{
        setFilterBy(1);
        data.sort((a, b) => b.costForTwo - a.costForTwo);
        setData([...data]);
        break;
      }
      case "2" :{
        setFilterBy(2);
        data.sort((a, b) => a.costForTwo - b.costForTwo);
        setData([...data]);
        break;
      }
      default: {
        setData(restaurant)
        break;
      }
    }



  }

  return (
    <div className="App">
      <Navbar {...userInfo.location} />
       <Offers offers= {offers}/>

       <div>
       <Filters filters={filters} currentFilteredBy ={filterBy} updateFilter ={updateFilter} /> 
       
       </div>
       
       <Restaurant restaurant= {data} />  
    </div>
  );
}

export default App;
