import { useState,useEffect } from "react";
import { restaurantList  } from "../contants";
import RestrauntCard from "./RestaurantCard";

function filterData(searchtext,restaurants) {
  
}


  // const searchtext = "kef";
  const Body = () => {
  const [restaurants,setRestaurants] = useState( restaurantList );
  const [searchtext,setSearchtext] = useState("")

  useEffect(() => {
    getRestaurants();
  },[]);
  
  async function getRestaurants() {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json();
  console.log(json); 
  //  setRestaurants(json?.data?.cards?.[2])
  }
  console.log("render");
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
  
  <button className="search-btn"
   onClick={ () => {
    const data = filterData(searchtext,restaurants);
    setRestaurants(data);
   }}

  >Search</button>

</div>
    <div className="restaurant-list">
        {restaurants. map((restaurant) => {
           return <RestrauntCard {... restaurant.data} key={restaurant.data.key} />
           })
          }
         </div>
     </>
  
      )
  };
  export default Body;