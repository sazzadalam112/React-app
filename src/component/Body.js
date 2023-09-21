import { restaurantList  } from "../contants";
import RestrauntCard from "./RestaurantCard";
const Body = () =>{
    return(
        <div className="restaurant-list">
          {
            restaurantList.map((restaurant) => {
              return <RestrauntCard {... restaurant.data} />
            })
          }
         </div>
      )
  };
  export default Body;