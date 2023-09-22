import { useState } from "react";
import { restaurantList  } from "../contants";
import RestrauntCard from "./RestaurantCard";


  // const searchtext = "kef";
  const Body = () => {
 
  const [searchtext,setSearchtext] = useState("hellow");
   const [searchClicked,setSearchclicked] = useState("false");
    return(
      <>
        <div className="search-container">
        <input 
         type="text"
         className="search-input"
         placeholder="Search"
         value={searchtext}
         onChange={(e) => {
          setSearchtext(e.target.value);
        }}
         />
         <h1>{searchClicked}</h1>
         <button 
         className="search-btn" 
         onClick={()=>{
          if(searchClicked === "true") {
          setSearchclicked("false");
          } else {
         setSearchclicked("True");
          }
          }}
          >
            Search</button>
        </div>
        <div className="restaurant-list">
          {
            restaurantList.map((restaurant) => {
              return <RestrauntCard {... restaurant.data} />
            })
          }
         </div>
         </>
      )
  };
  export default Body;